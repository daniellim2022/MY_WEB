
import * as THREE from 'three';
import {
    EffectComposer,
    RenderPass,
    UnrealBloomPass,
    ShaderPass,
    RGBShiftShader,
    VignetteShader
} from 'three-stdlib';
import { Fighter } from './Fighter';
import { InputHandler } from './InputHandler';
import { GameState, GAME_CONFIG, FighterState, CharacterType } from '../types';
import { SoundManager } from './SoundManager';
import { Reflector } from 'three-stdlib';

// Define types for clarity
interface Projectile {
    mesh: THREE.Object3D;
    velocity: THREE.Vector3;
    owner: Fighter;
    active: boolean;
    life: number;
    damage: number;
    stun: number;
    isHeavy: boolean;
    isBind?: boolean;
    isExplosive?: boolean;
}

interface Particle {
    mesh: THREE.Object3D;
    life: number;
    velocity: THREE.Vector3;
    isGear?: boolean;
    rotSpeed?: number;
}

interface DamageNumber {
    sprite: THREE.Sprite;
    life: number;
    velocity: THREE.Vector3;
}

export class GameEngine {
    // Environment & Effects
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    composer: EffectComposer;
    impactPlane: THREE.Mesh; // Defined now

    p1: Fighter;
    p2: Fighter;
    input: InputHandler;

    animationId: number = 0;
    timerInterval: NodeJS.Timer | number = 0;
    lastTime: number = 0;
    timeLeft: number = GAME_CONFIG.ROUND_TIME;
    introTimer: number = 240; // 4 seconds (60fps)

    // Game Logic
    projectiles: Projectile[] = [];
    particles: Particle[] = [];
    damageNumbers: DamageNumber[] = [];
    gears: THREE.Mesh[] = [];

    // State
    gameOverTriggered: boolean = false;
    hitStopFrames: number = 0; // Trigger freeze
    trauma: number = 0; // Camera Shake
    comboP1: number = 0;
    comboP2: number = 0;
    comboTimerP1: number = 0;
    comboTimerP2: number = 0;

    // Config
    gameSpeed: number = 1.0;

    // Round System
    currentRound: number = 1;
    maxRounds: number = 3; // Best of 3 (First to 2)
    p1Wins: number = 0;
    p2Wins: number = 0;

    onStateChange: (state: GameState) => void;

    constructor(canvas: HTMLCanvasElement, p1Char: CharacterType, p2Char: CharacterType, onStateChange: (state: GameState) => void) {
        this.onStateChange = onStateChange;
        this.input = new InputHandler();
        this.input.onKeyDownCallback = (code) => {
            // Lock Input if Game Over
            if (this.p1.hp <= 0 || this.p2.hp <= 0 || this.timeLeft <= 0) return;
            if (this.p1) this.p1.handleInputEvent(code);
        };

        // Initialize Audio
        SoundManager.getInstance().init().then(() => {
            SoundManager.getInstance().playBGM('bgm_battle');
        });

        // Scene Setup: Ethereal White Training Room
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf0f0ff); // Almost White
        // @ts-ignore
        this.scene.fog = new THREE.FogExp2(0xffffff, 0.008); // White Fog

        // Camera
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.set(0, 5, 12);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" }); // Enable Antialias for clean lines on white
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // CAMERA STATE
        // @ts-ignore
        this.cameraTargetPos = new THREE.Vector3(0, 5, 12);
        // @ts-ignore
        this.cameraLookAt = new THREE.Vector3(0, 2, 0);
        // @ts-ignore
        this.baseCameraPos = new THREE.Vector3(0, 5, 12);


        // Tone Mapping
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2; // Balanced Exposure for White

        // Post-Processing
        // @ts-ignore
        this.composer = new EffectComposer(this.renderer);

        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);

        // Bloom - Subtle Glow
        // @ts-ignore
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.3,
            0.4,
            0.9
        );
        this.composer.addPass(bloomPass);

        // Glitch Pass Removed
        // const rgbShiftPass = new ShaderPass(RGBShiftShader);
        // rgbShiftPass.uniforms['amount'].value = 0.0025; 
        // this.composer.addPass(rgbShiftPass);
        // this.rgbShiftPass = rgbShiftPass; 

        // Vignette - REMOVED for brightness

        // Lighting - Bright Day Setup

        // 1. Hemisphere Light (Bright Ambient)
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 3.5); // White Sky, Light Blue Ground
        this.scene.add(hemiLight);

        // 2. Main Key Light - SUN
        const sunLight = new THREE.DirectionalLight(0xffffff, 4.0);
        sunLight.position.set(-15, 30, 20);
        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = 4096;
        sunLight.shadow.mapSize.height = 4096;
        sunLight.shadow.bias = -0.0001;
        this.scene.add(sunLight);

        // 3. Fill Light
        const fillLight = new THREE.DirectionalLight(0xffeecc, 2.0); // Warm fill
        fillLight.position.set(20, 10, 10);
        this.scene.add(fillLight);

        // Environment
        this.createLushEnvironment();
        // 5. IMPACT FRAME PLANE (Attached to Camera)
        // 5. IMPACT FRAME PLANE (Attached to Camera)
        const impactGeo = new THREE.PlaneGeometry(20, 20);
        const impactMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 1.0, depthTest: false, depthWrite: false });
        this.impactPlane = new THREE.Mesh(impactGeo, impactMat);
        this.impactPlane.position.set(0, 0, -10); // Position in front of camera
        this.impactPlane.visible = false;
        this.camera.add(this.impactPlane);
        this.scene.add(this.camera); // Ensure camera is in scene for children

        // FIGHTERS
        this.p1 = new Fighter(true, p1Char, 0xff0000); // Dynamic Char P1
        this.p2 = new Fighter(false, p2Char, 0x0000ff); // Dynamic Char P2

        // Wiring up Hit Effects
        const onHitEffect = (pos: THREE.Vector3, type: 'light' | 'heavy' | 'block' | 'electric' | 'cinematic') => {
            if (type === 'block') {
                this.createHitParticles(pos, false, true);
                SoundManager.getInstance().playSFX('block');
            } else if (type === 'electric') {
                this.createHitParticles(pos, false, false, true);
                this.createBurst(pos, 0x00FFFF, 20);
                SoundManager.getInstance().playSFX('hit_heavy'); // Ideally thunder
                this.triggerCameraShake(0.8);
                this.triggerImpactFrame(true);
            } else if (type === 'cinematic') {
                const attacker = (this.p1.state === FighterState.RAGE_ART) ? this.p1 : this.p2;
                this.triggerCinematicSequence(attacker);
            } else {
                this.createBurst(pos, type === 'heavy' ? 0xFF4400 : 0xFFAA00, type === 'heavy' ? 15 : 8);
                this.createHitParticles(pos, type === 'heavy', false);
                SoundManager.getInstance().playSFX(type === 'heavy' ? 'hit_heavy' : 'hit_light');
                this.triggerCameraShake(type === 'heavy' ? 0.6 : 0.2);
                if (type === 'heavy') this.triggerImpactFrame(true);
            }
        };

        this.p1.onHit = onHitEffect;
        this.p2.onHit = onHitEffect;

        this.scene.add(this.p1.mesh);
        this.scene.add(this.p2.mesh);

        // Initial P2 orientation handled in Fighter class now, but ensure clean state
        // this.p2.mesh.rotation.y = -Math.PI; 


        // Start Timer loop
        this.timerInterval = setInterval(() => {
            if (this.p1.hp > 0 && this.p2.hp > 0 && this.timeLeft > 0) {
                this.timeLeft--;
                this.broadcastState();
            }
        }, 1000);

        // Start Animation Loop
        this.animate(0);

        // Resize
        window.addEventListener('resize', this.handleResize);
    }

    createLushEnvironment() {
        // 0. FLOOR
        const floorGeo = new THREE.PlaneGeometry(300, 300);
        const floorMat = new THREE.MeshStandardMaterial({
            color: 0xeeeeff, // White/Blue tint
            roughness: 0.1,
            metalness: 0.1,
            envMapIntensity: 0.8
        });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        this.scene.add(floor);

        // 1. PILLARS (Instanced) - Greco-Roman / Sci-Fi white
        const pillarCount = 40;
        const pillarGeo = new THREE.CylinderGeometry(0.8, 0.8, 12, 16);
        const pillarMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.1, metalness: 0.2 });
        const pillars = new THREE.InstancedMesh(pillarGeo, pillarMat, pillarCount);

        const dummy = new THREE.Object3D();
        for (let i = 0; i < pillarCount; i++) {
            const angle = (i / pillarCount) * Math.PI * 2;
            const dist = 35 + Math.random() * 5; // Ring at distance
            const x = Math.cos(angle) * dist;
            const z = Math.sin(angle) * dist;

            dummy.position.set(x, 6, z); // Lifted up
            dummy.rotation.set(0, 0, 0);
            dummy.scale.set(1, 1, 1);
            dummy.updateMatrix();
            pillars.setMatrixAt(i, dummy.matrix);
        }
        pillars.castShadow = true;
        pillars.receiveShadow = true;
        this.scene.add(pillars);

        // 2. CHERRY BLOSSOMS (Pink Contrast)
        const particleCount = 2000;
        const pGeo = new THREE.BufferGeometry();
        const pPos = new Float32Array(particleCount * 3);
        const pVel = [];

        for (let i = 0; i < particleCount; i++) {
            pPos[i * 3] = (Math.random() - 0.5) * 100;
            pPos[i * 3 + 1] = Math.random() * 40;
            pPos[i * 3 + 2] = (Math.random() - 0.5) * 60;
            pVel.push({
                x: (Math.random() - 0.5) * 0.1,
                y: -Math.random() * 0.1 - 0.05,
                z: (Math.random() - 0.5) * 0.1
            });
        }
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        const pMat = new THREE.PointsMaterial({
            color: 0xffaacc, // Pink
            size: 0.4,
            transparent: true,
            opacity: 0.8,
            map: this.createStarTexture(), // Reuse star texture or default circle
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        const particles = new THREE.Points(pGeo, pMat);
        this.scene.add(particles);

        // Store for animation
        // @ts-ignore
        this.envParticles = { mesh: particles, vels: pVel };

        // 3. FLOATING GEOMETRY (Ethereal feel)
        const cubeCount = 50;
        const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
        const cubeMat = new THREE.MeshStandardMaterial({ color: 0xccffff, emissive: 0x112233, transparent: true, opacity: 0.6 });
        const cubes = new THREE.InstancedMesh(cubeGeo, cubeMat, cubeCount);

        for (let i = 0; i < cubeCount; i++) {
            const x = (Math.random() - 0.5) * 80;
            const y = 10 + Math.random() * 20;
            const z = (Math.random() - 0.5) * 50;
            dummy.position.set(x, y, z);
            dummy.rotation.set(Math.random(), Math.random(), Math.random());
            dummy.scale.setScalar(Math.random() * 2 + 0.5);
            dummy.updateMatrix();
            cubes.setMatrixAt(i, dummy.matrix);
        }
        this.scene.add(cubes);

        // 4. LOW POLY TREES/BUSHES (Simple Cones)
        const treeCount = 20;
        const treeGeo = new THREE.ConeGeometry(2, 6, 8);
        const treeMat = new THREE.MeshStandardMaterial({ color: 0x88cc88, roughness: 0.8 }); // Muted Green
        const trees = new THREE.InstancedMesh(treeGeo, treeMat, treeCount);

        for (let i = 0; i < treeCount; i++) {
            const dist = 20 + Math.random() * 40;
            const angle = Math.random() * Math.PI * 2;
            dummy.position.set(Math.cos(angle) * dist, 3, Math.sin(angle) * dist);
            dummy.scale.setScalar(1 + Math.random());
            dummy.updateMatrix();
            trees.setMatrixAt(i, dummy.matrix);
        }
        this.scene.add(trees);
    }




    createSkybox() {
        // Procedural Starfield
        const starGeo = new THREE.BufferGeometry();
        const starCount = 3000;
        const posArray = new Float32Array(starCount * 3);
        const colArray = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            const x = (Math.random() - 0.5) * 400;
            const y = Math.random() * 200 + 10; // Only sky
            const z = (Math.random() - 0.5) * 400;
            posArray[i * 3] = x;
            posArray[i * 3 + 1] = y;
            posArray[i * 3 + 2] = z;

            // Twinkle Colors
            const starType = Math.random();
            let color = new THREE.Color(0xFFFFFF);
            if (starType > 0.9) color.setHex(0xaaaaFF); // Blueish
            else if (starType > 0.8) color.setHex(0xFFaa88); // Reddish

            colArray[i * 3] = color.r;
            colArray[i * 3 + 1] = color.g;
            colArray[i * 3 + 2] = color.b;
        }

        starGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        starGeo.setAttribute('color', new THREE.BufferAttribute(colArray, 3));

        const starMat = new THREE.PointsMaterial({
            size: 0.3,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            map: this.createStarTexture(), // Procedural texture
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const starSystem = new THREE.Points(starGeo, starMat);
        this.scene.add(starSystem);

        // Add a Horizon Glow (Fog-like plane)
        const glowGeo = new THREE.CylinderGeometry(100, 100, 40, 32, 1, true);
        glowGeo.translate(0, 10, 0); // Lift up
        const glowMat = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(0x221144) }, // Deep Purple/Blue Reflection Match
                topColor: { value: new THREE.Color(0x000000) }
            },
            vertexShader: `
                varying vec3 vWorldPosition;
                void main() {
                    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
                    vWorldPosition = worldPosition.xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
                }
            `,
            fragmentShader: `
                uniform vec3 color;
                uniform vec3 topColor;
                varying vec3 vWorldPosition;
                void main() {
                    float h = normalize( vWorldPosition + vec3(0, 10.0, 0) ).y;
                    gl_FragColor = vec4( mix( color, topColor, max( h, 0.0 ) ), 0.5 );
                }
            `,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            transparent: true
        });
        const horizon = new THREE.Mesh(glowGeo, glowMat);
        this.scene.add(horizon);
    }

    createStarTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;

        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(0.2, 'rgba(255,255,255,0.8)');
        grad.addColorStop(0.5, 'rgba(255,255,255,0.2)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 32, 32);

        const tex = new THREE.CanvasTexture(canvas);
        return tex;
    }

    createElectricParticle(pos: THREE.Vector3) {
        // ... unused
    }

    spawnProjectile(owner: Fighter, type: 'SWORD' | 'CHAIN' | 'ARROW' | 'SWORD_HEAVY' | 'SWORD_RAIN') {
        const isP1 = owner.isPlayer1;
        const opponent = isP1 ? this.p2 : this.p1;
        const targetPos = opponent.mesh.position.clone().add(new THREE.Vector3(0, 1.0, 0));

        let startPos = owner.mesh.position.clone();
        let velocity = new THREE.Vector3();
        let mesh: THREE.Mesh;
        let speed = 25;
        let life = 100;

        if (type === 'SWORD_RAIN') {
            startPos = opponent.mesh.position.clone();
            startPos.x += (Math.random() - 0.5) * 6;
            startPos.z += (Math.random() - 0.5) * 4;
            startPos.y = 12;
            velocity = new THREE.Vector3(0, -25, 0);

            const geo = new THREE.BoxGeometry(0.1, 0.5, 0.1);
            const mat = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
            mesh = new THREE.Mesh(geo, mat);
            mesh.position.copy(startPos);
            life = 60;
        } else {
            // Standard Launch
            startPos.y += 1.5;

            // Spawn Offset
            if (owner.characterType === 'GILGAMESH') {
                startPos.add(new THREE.Vector3((Math.random() - 0.5) * 4, 1.0 + Math.random() * 2, -1.5));
            } else {
                startPos.add(new THREE.Vector3(0, 0, 0.5));
            }

            // Visuals & Stats
            let geo: THREE.BufferGeometry;
            let mat: THREE.Material;

            if (type === 'CHAIN') {
                geo = new THREE.CylinderGeometry(0.1, 0.1, 2, 8);
                geo.rotateX(Math.PI / 2);
                mat = new THREE.MeshStandardMaterial({ color: 0xAAAAAA });
                speed = 35;
            } else if (type === 'ARROW') { // Caladbolg
                geo = new THREE.CylinderGeometry(0.05, 0.2, 3, 8);
                geo.rotateX(Math.PI / 2);
                mat = new THREE.MeshBasicMaterial({ color: 0x00FFFF, blending: THREE.AdditiveBlending });
                speed = 50;
                life = 60;
            } else if (owner.characterType === 'ARCHER') { // Normal Archer Shots (Twin Throw)
                const isKanshou = Math.random() > 0.5;
                geo = new THREE.BoxGeometry(0.6, 0.05, 0.15);
                mat = new THREE.MeshStandardMaterial({ color: isKanshou ? 0x222222 : 0xEEEEEE });
                speed = 30;
            } else { // Gilgamesh Swords / Default
                geo = new THREE.BoxGeometry(0.08, 0.08, 1.2);
                mat = new THREE.MeshStandardMaterial({ color: 0xFFD700, emissive: 0xFFAA00, emissiveIntensity: 0.4 });
                speed = 30;
            }

            mesh = new THREE.Mesh(geo, mat);
            mesh.position.copy(startPos);
            mesh.lookAt(targetPos);

            if (owner.characterType === 'ARCHER' && type !== 'ARROW') {
                mesh.rotateX(Math.PI / 2); // Flat spin tweak
            }

            velocity = new THREE.Vector3(0, 0, 1).applyQuaternion(mesh.quaternion).multiplyScalar(speed);
        }

        // Stats Logic
        let damage = 10;
        let stun = 20;
        let isHeavy = false;
        let isBind = false;
        let isExplosive = false;

        if (type === 'SWORD_HEAVY') {
            damage = 50;
            stun = 60;
            isHeavy = true;
        } else if (type === 'ARROW') { // Caladbolg
            damage = 40;
            stun = 40;
            isHeavy = true;
            isExplosive = true;
        } else if (type === 'CHAIN') { // Enkidu
            damage = 15;
            stun = 120;
            isBind = true;
        } else if (type === 'SWORD') { // Gate of Babylon / Normal
            damage = 12;
        } else if (type === 'SWORD_RAIN') { // UBW
            damage = 5;
            stun = 10;
        }

        this.scene.add(mesh);

        // DYNAMIC LIGHT
        const lightColor = (type === 'ARROW' || type === 'SWORD_RAIN') ? 0x00FFFF : (type === 'SWORD_HEAVY' ? 0xFF0000 : 0xFFAA00);
        const light = new THREE.PointLight(lightColor, 2.0, 5.0); // Bright, short range
        mesh.add(light); // Attach to mesh, moves automatically!

        this.projectiles.push({ mesh, velocity, owner, active: true, life, damage, stun, isHeavy, isBind, isExplosive });
    }
    updateProjectiles(dt: number) {
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const p = this.projectiles[i];
            p.mesh.position.add(p.velocity.clone().multiplyScalar(dt));
            p.life--;

            // TRAIL EFFECT
            if (p.life % 2 === 0) {
                const mesh = p.mesh as THREE.Mesh;
                if (mesh.geometry && mesh.material) {
                    const trailGeo = (mesh.geometry as THREE.BufferGeometry).clone();
                    const trailMat = (mesh.material as THREE.Material).clone();
                    // @ts-ignore
                    trailMat.transparent = true;
                    // @ts-ignore
                    trailMat.opacity = 0.4;

                    const trailMesh = new THREE.Mesh(trailGeo, trailMat);
                    trailMesh.position.copy(p.mesh.position);
                    trailMesh.quaternion.copy(p.mesh.quaternion);
                    trailMesh.scale.copy(p.mesh.scale).multiplyScalar(0.9);

                    this.scene.add(trailMesh);
                    // Add to particles (updateParticles will handle fade/removal)
                    this.particles.push({ mesh: trailMesh, life: 10, velocity: new THREE.Vector3(0, 0, 0) });
                }
            }

            if (p.owner.characterType === 'ARCHER') {
                // Spin Archer's blades
                p.mesh.rotation.y += 15.0 * dt;
            }

            if (p.active && p.life <= 0) {
                p.active = false;
                this.scene.remove(p.mesh);
                const mesh = p.mesh as THREE.Mesh;
                if (mesh.geometry) mesh.geometry.dispose();
                if (mesh.material) (mesh.material as THREE.Material).dispose();
            }    // Collision
            const opponent = p.owner.isPlayer1 ? this.p2 : this.p1;
            const dist = p.mesh.position.distanceTo(opponent.mesh.position);

            // Hitbox
            if (dist < 1.5 && p.active && opponent.state !== FighterState.DEAD) {
                p.active = false;
                this.scene.remove(p.mesh);
                const mesh = p.mesh as THREE.Mesh;
                if (mesh.geometry) mesh.geometry.dispose();
                if (mesh.material) (mesh.material as THREE.Material).dispose();
                this.projectiles.splice(i, 1);

                // Effect - Specific Logic moved below to handle Block/Hit

                // Hit Logic
                // Hit Logic
                // Simplified: Unblockable for demo? Or standard?
                const isBlocking = opponent.state === FighterState.BLOCK || opponent.state === FighterState.BLOCK_LOW;

                // Different properties based on projectile type?
                // For now generic hit unless specific type handled in spawn
                // Since we don't store type on projectile instance easily without refactor, we can infer or add prop
                // Actually, let's look at taking damage parameter

                // Hack: We can customize damage based on active skill of owner? 
                // That's tricky if they switched state.
                // Better: Add `data` payload to projectile struct.
                // But for now, let's just do generic high damage for SPECIAL, huge for SPECIAL_3.

                // check


                // We can't easily know WHICH projectile type hit without storing it.
                // BUT, we can make `damage` a property of projectile. 
                // Since I can't change interface here easily without full file read, I'll stick to a generic logic OR
                // Update interface in memory? No.
                // I will assume standard damage for now, or maybe check owner state? No reliable.
                // Let's just use 10 for everything for now, 20 if it looks big (scale check?).

                // check2

                if (isBlocking) {
                    SoundManager.getInstance().playSFX('block');
                    opponent.takeDamage(p.damage * 0.2, p.mesh.position, true, false, false, undefined);
                    this.createBurst(p.mesh.position, 0x0088FF, 5); // Blue sparks
                    this.createDamageNumber(p.mesh.position, p.damage * 0.2, false, true);
                } else {
                    // HIT!
                    // Trigger Effects
                    this.createBurst(p.mesh.position, 0xFF4400, 15); // Orange/Fire blood sparks
                    this.hitStopFrames = p.isHeavy ? 6 : 3; // FREEZE!
                    this.triggerCameraShake(p.isHeavy ? 0.6 : 0.2);

                    if (p.isHeavy || p.isExplosive) {
                        // RGB Glitch Removed
                    }

                    // Check Special Effects
                    if (p.isExplosive) {
                        // Explosion: Massive Particles!
                        SoundManager.getInstance().playSFX('explosion');
                        this.createHitParticles(p.mesh.position, true, false);
                        this.createHitParticles(p.mesh.position, true, false);
                        this.createHitParticles(p.mesh.position, true, false);
                    } else if (p.isHeavy) {
                        SoundManager.getInstance().playSFX('hit_heavy');
                    } else {
                        SoundManager.getInstance().playSFX('hit_light');
                    }

                    opponent.takeDamage(p.damage, p.mesh.position, false, p.isHeavy, false, {
                        damage: p.damage, stun: p.stun, blockStun: 15, knockback: p.isHeavy ? 8 : 4, startup: 0, active: 0, recovery: 0, hitLevel: 'mid'
                    });
                    this.createDamageNumber(p.mesh.position, p.damage, p.isHeavy, false);

                    // Add Combo
                    this.addCombo(p.owner.isPlayer1);

                    // Impact Frame for heavy hits
                    if (p.isHeavy) {
                        this.triggerImpactFrame(true);
                        this.triggerCameraShake(1.0);
                    }
                    if (p.isBind) {
                        // Bind logic if separate from stun
                    }
                }
            }
            if (p.mesh.position.y < 0) { // Projectile falls off stage
                this.scene.remove(p.mesh);
                const mesh = p.mesh as THREE.Mesh;
                if (mesh.geometry) mesh.geometry.dispose();
                if (mesh.material) (mesh.material as THREE.Material).dispose();
                this.projectiles.splice(i, 1);
                continue;
            }
        }
    }

    createHitParticles(position: THREE.Vector3, isGold: boolean = false, isBlock: boolean = false, isElectric: boolean = false) {
        const count = isBlock ? 8 : 15;

        // Electric: Blue Lightning Sparks
        if (isElectric) {
            // Intense Blue Sparks
            for (let i = 0; i < 25; i++) {
                const geo = new THREE.BoxGeometry(0.05, 0.05, 1.0 + Math.random());
                const mat = new THREE.MeshBasicMaterial({
                    color: 0x00FFFF, // Cyan
                    blending: THREE.AdditiveBlending
                });
                const mesh = new THREE.Mesh(geo, mat);
                mesh.position.copy(position);
                mesh.lookAt(new THREE.Vector3(position.x + (Math.random() - 0.5), position.y + (Math.random() - 0.5), position.z + (Math.random() - 0.5)));

                const velocity = new THREE.Vector3(
                    (Math.random() - 0.5) * 15,
                    (Math.random() * 12),
                    (Math.random() - 0.5) * 15
                );
                this.scene.add(mesh);
                this.particles.push({ mesh, life: 40, velocity });
            }

            // Blue Shockwave
            const shockGeo = new THREE.TorusGeometry(1.5, 0.2, 6, 20);
            const shockMat = new THREE.MeshBasicMaterial({ color: 0x0088FF, transparent: true, opacity: 1.0, blending: THREE.AdditiveBlending });
            const shock = new THREE.Mesh(shockGeo, shockMat);
            shock.position.copy(position);
            shock.lookAt(this.camera.position);
            this.scene.add(shock);
            // @ts-ignore
            shock.isShockwave = true;
            this.particles.push({ mesh: shock, life: 15, velocity: new THREE.Vector3(0, 0, 0) });
            return;
        }

        // Block: Blue Rings
        if (isBlock) {
            const ringGeo = new THREE.TorusGeometry(0.5, 0.05, 8, 16);
            const ringMat = new THREE.MeshBasicMaterial({
                color: 0x00FFFF,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending // Glow
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.position.copy(position);
            ring.lookAt(this.camera.position);
            this.scene.add(ring);
            // @ts-ignore
            ring.isShockwave = true;
            this.particles.push({ mesh: ring, life: 15, velocity: new THREE.Vector3() });

            // Blue Sparks
            for (let i = 0; i < 5; i++) {
                const geo = new THREE.BoxGeometry(0.1, 0.1, 0.2);
                const mat = new THREE.MeshBasicMaterial({
                    color: 0x0088FF,
                    blending: THREE.AdditiveBlending
                });
                const mesh = new THREE.Mesh(geo, mat);
                mesh.position.copy(position);
                const velocity = new THREE.Vector3((Math.random() - 0.5) * 5, (Math.random() * 5), (Math.random() - 0.5) * 5);
                this.scene.add(mesh);
                this.particles.push({ mesh, life: 20, velocity });
            }
            return;
        }

        // Hit: Gold/Red Explosive Sparks (BLOOM READY)
        for (let i = 0; i < count; i++) {
            const geo = new THREE.BoxGeometry(0.1, 0.1, 0.6 + Math.random() * 0.4);
            // Randomly Gold or Red or White
            const r = Math.random();
            const color = r > 0.6 ? 0xFFD700 : (r > 0.3 ? 0xFF4400 : 0xFFFFFF); // More Orange/Red

            const mat = new THREE.MeshBasicMaterial({
                color: color,
                blending: THREE.AdditiveBlending // Critical for Bloom
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.copy(position);
            mesh.lookAt(new THREE.Vector3(position.x + (Math.random() - 0.5), position.y + (Math.random() - 0.5), position.z + (Math.random() - 0.5)));

            const velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 12, // Faster explosion
                (Math.random() * 10),
                (Math.random() - 0.5) * 12
            );

            this.scene.add(mesh);
            this.particles.push({ mesh, life: 30, velocity });
        }

        // IMPACT SHOCKWAVE (Ring)
        const shockGeo = new THREE.TorusGeometry(1.0, 0.1, 6, 20); // Hexagonal jagged ring
        const shockMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 1.0, blending: THREE.AdditiveBlending });
        const shock = new THREE.Mesh(shockGeo, shockMat);
        shock.position.copy(position);
        shock.rotation.x = Math.PI / 2; // Flat on ground-ish (or perpendicular to camera?) 
        // Let's make it billboard or just flat? Flat looks good on ground.
        // If mid-air hit? Random rotation? 
        shock.lookAt(this.camera.position); // Billboard
        this.scene.add(shock);
        // @ts-ignore
        shock.isShockwave = true;
        this.particles.push({ mesh: shock, life: 10, velocity: new THREE.Vector3(0, 0, 0) });

        //        // 1. FLOOR (Wet Asphalt Reflection)
        const floorGeo = new THREE.PlaneGeometry(100, 100);
        const floorMat = new THREE.MeshStandardMaterial({
            color: 0x111111,
            roughness: 0.1, // Very smooth for "Wet" look
            metalness: 0.8, // Reflective
            envMapIntensity: 1.0  // Need env map for real reflection, but bloom + point lights helps
        });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        this.scene.add(floor);
        // Add a flash sphere
        const flashGeo = new THREE.SphereGeometry(1, 8, 8);
        const flashMat = new THREE.MeshBasicMaterial({ color: 0xFFAA00, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending });
        const flash = new THREE.Mesh(flashGeo, flashMat);
        flash.position.copy(position);
        this.scene.add(flash);
        // @ts-ignore
        flash.isExplosion = true;
        this.particles.push({ mesh: flash, life: 5, velocity: new THREE.Vector3() });
    }

    updateParticles(dt: number) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.life--;

            // @ts-ignore
            if (p.mesh.userData && p.mesh.userData.isPortal) {
                // Portal Animation
                // @ts-ignore
                const age = 60 - p.life;
                // Fade in
                const mat = (p.mesh as THREE.Mesh).material as THREE.MeshBasicMaterial;
                if (age < 10) mat.opacity = age / 10;
                else if (p.life < 10) mat.opacity = p.life / 10; // Fade out
                else mat.opacity = 1.0;

                // Rotate
                p.mesh.rotation.z += 0.1;
                // Scale pulse
                const s = 1.0 + Math.sin(age * 0.2) * 0.1;
                p.mesh.scale.set(s, s, s);

                // No movement
            }
            // @ts-ignore
            else if (p.mesh.isExplosion) {
                // Expand explosion sphere
                p.mesh.scale.multiplyScalar(1.1);
                if (p.life < 10) {
                    const mesh = p.mesh as THREE.Mesh;
                    if (mesh.material) {
                        // @ts-ignore
                        mesh.material.opacity = p.life / 10;
                    }
                }
            }
            // @ts-ignore
            else if (p.mesh.isShockwave) {
                // Expand ring rapidly
                p.mesh.scale.multiplyScalar(1.15);
                const mat = (p.mesh as THREE.Mesh).material as THREE.MeshBasicMaterial;
                mat.opacity = p.life / 20;
            }
            else {
                // Standard Gravity Particle
                p.mesh.position.add(p.velocity.clone().multiplyScalar(dt));
                // p.velocity.y -= 0.05; // Gravity - removed gravity for charge particles?
                // Actually let's keep gravity for sparks but check if it's a charge particle?
                // For now, simple sparks have gravity.
                if (p.velocity.length() > 0.5) p.velocity.y -= 15 * dt; // Only apply gravity to fast moving things (sparks), not slow floating dust

                p.mesh.rotation.x += 0.4;
                p.mesh.rotation.y += 0.4;
            }

            if (p.life <= 0) {
                this.scene.remove(p.mesh);
                this.particles.splice(i, 1);
            }
        }
    }

    // Removed updateSakura logic

    handleSkillTrigger(fighter: Fighter, dt: number) {
        const frame = Math.floor(fighter.stateTimer);
        const prevFrame = Math.floor(fighter.stateTimer - dt * 60);

        switch (fighter.characterType) {
            case 'GILGAMESH':
                // E: Gate of Babylon (Barrage) - 5 shots (Buffed from 3)
                if (fighter.state === FighterState.ATTACK_SPECIAL) {
                    // Portal Spawns
                    if (frame === 10) this.createPortal(fighter.mesh.position.clone().add(new THREE.Vector3(0, 2, -1)));
                    if (frame === 15) this.createPortal(fighter.mesh.position.clone().add(new THREE.Vector3(0, 3, 0)));
                    if (frame === 20) this.createPortal(fighter.mesh.position.clone().add(new THREE.Vector3(0, 2, 1)));
                    if (frame === 25) this.createPortal(fighter.mesh.position.clone().add(new THREE.Vector3(1, 2.5, -0.5))); // New
                    if (frame === 30) this.createPortal(fighter.mesh.position.clone().add(new THREE.Vector3(-1, 2.5, 0.5))); // New

                    // Shoot 5 projectiles
                    const shotFrames = [20, 25, 30, 35, 40];
                    if (shotFrames.includes(frame) && !shotFrames.includes(prevFrame)) {
                        this.spawnProjectile(fighter, 'SWORD');
                        if (frame === 40) this.triggerImpactFrame(false); // Dark flash on LAST shot
                        this.triggerCameraShake(0.2); // Small shake per shot
                    }
                }
                // Q: Enkidu (Chain)
                if (fighter.state === FighterState.ATTACK_SPECIAL_2) {
                    if (frame >= 25 && prevFrame < 25) {
                        this.createPortal(fighter.mesh.position.clone().add(new THREE.Vector3(1, 1, 0)), 0xCCCCCC); // Silver Portal
                        this.spawnProjectile(fighter, 'CHAIN');
                    }
                }
                // U: Merodach (Heavy Sword)
                if (fighter.state === FighterState.ATTACK_SPECIAL_3) {
                    if (frame === 20) this.triggerCameraShake(1.0); // Charge Up Shake

                    if (frame >= 40 && prevFrame < 40) {
                        this.createPortal(fighter.mesh.position.clone().add(new THREE.Vector3(0, 5, 0)), 0xFF0000, 3.0); // MASSIVE Red Portal
                        this.spawnProjectile(fighter, 'SWORD_HEAVY');
                        this.triggerImpactFrame(true); // FLASH ON SPAWN
                        this.triggerCameraShake(2.0); // MASSIVE SHAKE
                    }
                }
                break;
            case 'ARCHER':
                // E: Twin Throw
                if (fighter.state === FighterState.ATTACK_SPECIAL) {
                    if (frame >= 25 && prevFrame < 25) {
                        this.spawnProjectile(fighter, 'SWORD'); // Logic handles dual spawn? Check spawnProjectile
                        // Actually let's manually spawn 2 here if not handled
                        // ... looking at spawnProjectile it handles 'ARCHER' random? 
                        // Let's spawn twice to ensure both Kanshou and Bakuya
                        this.spawnProjectile(fighter, 'SWORD');
                        this.spawnProjectile(fighter, 'SWORD');
                    }
                }
                // Q: Caladbolg (Arrow) - THE NUKE
                if (fighter.state === FighterState.ATTACK_SPECIAL_2) {
                    // Charge effect
                    if (frame === 10) this.createChargeEffect(fighter.mesh.position);

                    const target = 30; // Release
                    if (frame >= target && prevFrame < target) {
                        this.spawnProjectile(fighter, 'ARROW');
                        // Camera Shake on release
                        this.triggerCameraShake(0.8);
                        this.triggerImpactFrame(true); // FLASH
                    }
                }
                // U: Sword Rain - DENSITY BUFF
                // frame 30 to 80.
                if (fighter.state === FighterState.ATTACK_SPECIAL_3) {
                    // Spawn every 2 frames instead of 4 (Double Density)
                    if (frame > 30 && frame < 90 && frame % 2 === 0) {
                        this.spawnProjectile(fighter, 'SWORD_RAIN');
                    }
                }
                break;
        }
    }

    createPortal(pos: THREE.Vector3, color: number = 0xFFD700, scale: number = 1.0) {
        // Golden Ripple Portal
        const geo = new THREE.TorusGeometry(0.5 * scale, 0.05 * scale, 8, 16);
        const mat = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.0, // Start invisible, fade in
            blending: THREE.AdditiveBlending
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.copy(pos);
        mesh.lookAt(this.p2.mesh.position); // Face opponent
        this.scene.add(mesh);

        // Animate opacity and scale
        // Simple manual animation tracking
        const anim = { mesh, life: 60, maxLife: 60 };
        // @ts-ignore
        mesh.userData = { isPortal: true, age: 0 };
        this.particles.push({ mesh, life: 60, velocity: new THREE.Vector3() });
    }

    createChargeEffect(pos: THREE.Vector3) {
        // Gather particles
        for (let i = 0; i < 10; i++) {
            const p = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0x00FFFF }));
            p.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2));
            this.scene.add(p);
            // Velocity towards center
            const vel = pos.clone().sub(p.position).normalize().multiplyScalar(0.2);
            this.particles.push({ mesh: p, life: 20, velocity: vel });
        }
    }

    createDashDust(pos: THREE.Vector3) {
        // Spawn 5-8 small dust particles at feet
        for (let i = 0; i < 6; i++) {
            const size = 0.3 + Math.random() * 0.4;
            const geo = new THREE.BoxGeometry(size, size, size);
            const mat = new THREE.MeshBasicMaterial({
                color: 0x8B4513, // Brown/Dust
                transparent: true,
                opacity: 0.6
            });
            const mesh = new THREE.Mesh(geo, mat);
            // Random pos near feet
            mesh.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * 1.5, 0.5 + Math.random() * 0.5, (Math.random() - 0.5) * 1.5));
            this.scene.add(mesh);

            // Velocity: Up and Random Out
            const vel = new THREE.Vector3((Math.random() - 0.5) * 0.1, 0.05 + Math.random() * 0.1, (Math.random() - 0.5) * 0.1);

            // @ts-ignore
            mesh.userData = { isDust: true }; // Mark as dust for update logic if needed
            this.particles.push({ mesh, life: 30, velocity: vel });
        }
    }

    // Helper to track prev state for simple frame triggers
    p1PrevState: string = '';
    p2PrevState: string = '';
    p1PrevGrounded: boolean = true;
    p2PrevGrounded: boolean = true;

    handleMovementFX() {
        // P1
        if ((this.p1.state === FighterState.DASH_FORWARD || this.p1.state === FighterState.DASH_BACK) && this.p1.stateTimer === 1) {
            SoundManager.getInstance().playSFX('dash');
            this.createDashDust(this.p1.mesh.position);
        }
        // Landing P1
        if (this.p1.isGrounded && !this.p1PrevGrounded) {
            SoundManager.getInstance().playSFX('land');
            this.createDashDust(this.p1.mesh.position);
        }
        this.p1PrevGrounded = this.p1.isGrounded;

        // P2
        if ((this.p2.state === FighterState.DASH_FORWARD || this.p2.state === FighterState.DASH_BACK) && this.p2.stateTimer === 1) {
            SoundManager.getInstance().playSFX('dash');
            this.createDashDust(this.p2.mesh.position);
        }
        // Landing P2
        if (this.p2.isGrounded && !this.p2PrevGrounded) {
            SoundManager.getInstance().playSFX('land');
            this.createDashDust(this.p2.mesh.position);
        }
        this.p2PrevGrounded = this.p2.isGrounded;
    }

    // PARTICLE SYSTEM
    createBurst(pos: THREE.Vector3, color: number = 0xFFFFFF, count: number = 10) {
        const geo = new THREE.PlaneGeometry(0.1, 0.1);
        for (let i = 0; i < count; i++) {
            const mat = new THREE.MeshBasicMaterial({
                color: color,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
                transparent: true
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.copy(pos);
            mesh.position.add(new THREE.Vector3((Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5)).multiplyScalar(0.5));
            const vel = new THREE.Vector3((Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5)).normalize().multiplyScalar(5 + Math.random() * 5);
            this.scene.add(mesh);
            this.particles.push({ mesh, life: 30 + Math.random() * 20, velocity: vel });
        }
    }

    addCombo(isP1: boolean) {
        if (isP1) {
            this.comboP1++;
            this.comboTimerP1 = 120; // 2 seconds at 60fps
        } else {
            this.comboP2++;
            this.comboTimerP2 = 120;
        }
    }

    resetCombo(isP1: boolean) {
        if (isP1) this.comboP1 = 0;
        else this.comboP2 = 0;
    }

    triggerImpactFrame(isWhite: boolean) {
        // Toggle impact plane
        // @ts-ignore
        this.impactPlane.material.color.setHex(isWhite ? 0xFFFFFF : 0x000000);
        this.impactPlane.visible = true;
        setTimeout(() => { this.impactPlane.visible = false; }, 50);
    }

    handleGameOver() {
        if (this.gameOverTriggered) return;
        this.gameOverTriggered = true;

        // Determine Winner
        let winnerName = "Draw";
        if (this.p1.hp <= 0 && this.p2.hp > 0) winnerName = "Player 2";
        else if (this.p2.hp <= 0 && this.p1.hp > 0) winnerName = "Player 1";

        // Timer Logic can lead here too if timeLeft == 0.
        if (this.timeLeft <= 0) {
            if (this.p1.hp > this.p2.hp) winnerName = "Player 1";
            else if (this.p2.hp > this.p1.hp) winnerName = "Player 2";
        }

        // Logic
        if (winnerName === "Player 1") this.p1Wins++;
        if (winnerName === "Player 2") this.p2Wins++;

        // Effects
        SoundManager.getInstance().playSFX('hit_heavy'); // Final hit
        this.triggerSlowMo(2000); // 2s Slow Mo finish

        // Check Match Over
        const winsNeeded = Math.ceil(this.maxRounds / 2);
        if (this.p1Wins >= winsNeeded || this.p2Wins >= winsNeeded) {
            // MATCH OVER
            SoundManager.getInstance().playSFX('win');
            this.broadcastState(); // Show K.O. / Winner
        } else {
            // NEXT ROUND PREP
            setTimeout(() => {
                this.nextRound();
            }, 3000); // 3 seconds delay before next round
        }
    }

    nextRound() {
        this.currentRound++;
        this.gameOverTriggered = false;
        this.gameSpeed = 1.0;
        this.timeLeft = GAME_CONFIG.ROUND_TIME;
        this.introTimer = 180; // "ROUND X... FIGHT"

        this.resetPositions();

        // Reset HP
        this.p1.hp = this.p1.maxHp;
        this.p2.hp = this.p2.maxHp;
        this.p1.state = FighterState.IDLE;
        this.p2.state = FighterState.IDLE;
        this.p1.velocity.set(0, 0, 0);
        this.p2.velocity.set(0, 0, 0);

        this.broadcastState();
    }

    resetPositions() {
        this.p1.mesh.position.set(-2, GAME_CONFIG.GROUND_Y, 0);
        this.p2.mesh.position.set(2, GAME_CONFIG.GROUND_Y, 0);
        this.p1.facing = 1;
        this.p2.facing = -1;

        // Reset Camera
        this.camera.position.set(0, 5, 12);
    }

    triggerSlowMo(duration: number) {
        this.gameSpeed = 0.1;
        setTimeout(() => { this.gameSpeed = 1.0; }, duration);
    }

    animate = (time: number) => {
        this.animationId = requestAnimationFrame(this.animate);

        // Timer Logic
        let dt = (1 / 60) * this.gameSpeed; // Scaled Timestep

        // HIT STOP LOGIC
        if (this.hitStopFrames > 0) {
            this.hitStopFrames--;
            const shake = (Math.random() - 0.5) * 0.5;
            this.camera.position.add(new THREE.Vector3(shake, shake, 0));
            this.renderer.render(this.scene, this.camera);
            return;
        }

        // CINEMATIC PAUSE
        if (this.isCinematicMode) {
            // Render but DO NOT UPDATE PHYSICS
            this.renderer.render(this.scene, this.camera);
            // Maybe shake camera if needed
            return;
        }

        if (this.p1.hp <= 0 || this.p2.hp <= 0 || this.timeLeft <= 0) {
            if (!this.gameOverTriggered) {
                this.handleGameOver();
            }
        }

        // Camera Logic
        this.updateCamera();

        // Trauma Decay
        this.trauma = Math.max(0, this.trauma - dt * 1.5);

        // Glitch Decay Removed

        // Combo Decay
        if (this.comboTimerP1 > 0) {
            this.comboTimerP1--;
            if (this.comboTimerP1 <= 0) this.resetCombo(true);
        }
        if (this.comboTimerP2 > 0) {
            this.comboTimerP2--;
            if (this.comboTimerP2 <= 0) this.resetCombo(false);
        }

        // Intro
        if (this.introTimer > 0) {
            this.introTimer--;
            // Update models for idle animation only (no input)
            const dummyInput = new InputHandler();
            this.p1.update(dt, dummyInput, this.p2, time);
            this.p2.update(dt, dummyInput, this.p1, time);
        } else {
            this.updateFighters(dt, time);
        }

        this.updateProjectiles(dt);
        this.updateParticles(dt);
        this.updateCherryBlossoms();
        this.updateDamageNumbers(dt);
        this.updateEnvironmentAnim(dt);

        // Render
        this.composer.render();
        this.broadcastState();
    };

    updateFighters(dt: number, time: number) {
        this.p1.update(dt, this.input, this.p2, time);
        this.p2.update(dt, this.input, this.p1, time);
    }

    // Cinematic Camera State (Trauma based)
    isCinematicMode: boolean = false;

    triggerCinematicSequence(attacker: Fighter) {
        if (this.isCinematicMode) return;
        this.isCinematicMode = true;
        const victim = (attacker === this.p1) ? this.p2 : this.p1;

        // CAM 1: Attacker Close Up
        const facePos = attacker.mesh.position.clone().add(new THREE.Vector3(0, 1.7, 0));
        // Position camera in front of face
        const offset = new THREE.Vector3(0, 0, 1.5).applyAxisAngle(new THREE.Vector3(0, 1, 0), attacker.mesh.rotation.y);
        const camPos1 = facePos.clone().add(offset).add(new THREE.Vector3(0, 0, 0)); // Close

        this.camera.position.copy(camPos1);
        this.camera.lookAt(facePos);

        // FX
        this.createBurst(facePos, 0xFF0000, 50);
        SoundManager.getInstance().playSFX('hit_heavy'); // ACTIVATE Sound

        setTimeout(() => {
            // CAM 2: Wide Impact
            const impactPos = victim.mesh.position.clone().add(new THREE.Vector3(0, 1.5, 0));
            const camPos2 = impactPos.clone().add(new THREE.Vector3(3, 2, 3));
            this.camera.position.copy(camPos2);
            this.camera.lookAt(impactPos);

            // Explosion
            this.createHitParticles(impactPos, false, false, true); // Electric
            this.createBurst(impactPos, 0xFF0000, 100);
            SoundManager.getInstance().playSFX('hit_heavy');
            this.triggerCameraShake(1.0);
            this.triggerImpactFrame(true);

            // Move victim away visually
            victim.mesh.position.add(new THREE.Vector3(0, 0, -5)); // Knockback visual
        }, 1200);

        setTimeout(() => {
            // END
            this.isCinematicMode = false;

            attacker.state = FighterState.IDLE;
            victim.state = FighterState.GROUNDED;
            victim.velocity.set(0, 0, 0);
            victim.velocity.y = 5.0; // Bounce on resume

        }, 2500);
    }

    cameraShake: THREE.Vector3 = new THREE.Vector3();
    cameraZoom: number = 0;

    triggerCameraShake(amount: number) {
        this.trauma = Math.min(this.trauma + amount, 1.0);
    }

    // Floating Damage Numbers
    createDamageNumber(pos: THREE.Vector3, damage: number, isCrit: boolean, isBlock: boolean) {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.font = isCrit ? 'Bold 80px Arial' : 'Bold 60px Arial';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'black';
        ctx.shadowBlur = 4;
        ctx.fillStyle = isCrit ? '#FF0000' : (isBlock ? '#0088FF' : '#FFFFFF');
        ctx.fillText(Math.floor(damage).toString(), 128, 100);

        const tex = new THREE.CanvasTexture(canvas);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
        const sprite = new THREE.Sprite(mat);

        sprite.position.copy(pos).add(new THREE.Vector3(0, 1.5, 0)); // Above head
        const scale = isCrit ? 2.5 : 1.5;
        sprite.scale.set(scale, scale * 0.5, 1);

        this.scene.add(sprite);

        // Random drift
        const vx = (Math.random() - 0.5) * 5;
        const vy = 5 + Math.random() * 5;

        this.damageNumbers.push({ sprite, life: 40, velocity: new THREE.Vector3(vx, vy, 0) });
    }

    updateDamageNumbers(dt: number) {
        for (let i = this.damageNumbers.length - 1; i >= 0; i--) {
            const dn = this.damageNumbers[i];
            dn.life -= dt * 60;

            dn.sprite.position.addScaledVector(dn.velocity, dt);
            dn.velocity.y -= 15 * dt; // Gravity
            dn.velocity.x *= 0.95; // Drag

            // Fade out
            if (dn.life < 10) {
                dn.sprite.material.opacity = dn.life / 10;
            }

            if (dn.life <= 0) {
                this.scene.remove(dn.sprite);
                this.damageNumbers.splice(i, 1);
            }
        }
    }

    updateEnvironmentAnim(dt: number) {
        // Rotate Gears
        this.particles.forEach(p => {
            if (p.isGear && p.rotSpeed) {
                p.mesh.rotation.z += p.rotSpeed;
            }
        });
    }

    updateCamera() {
        // Decay Trauma
        if (this.trauma > 0) {
            this.trauma -= 0.05 * (16 / 1000) * 60; // Approx decay
            if (this.trauma < 0) this.trauma = 0;
        }

        // Shake = Trauma^2
        const shake = this.trauma * this.trauma;
        const maxOffset = 1.0;
        const angle = maxOffset * shake * (Math.random() * 2 - 1);
        const offsetX = maxOffset * shake * (Math.random() * 2 - 1);
        const offsetY = maxOffset * shake * (Math.random() * 2 - 1);

        this.camera.rotation.z = angle * 0.1; // Slight rotation shake
        this.cameraShake.set(offsetX, offsetY, 0);

        // VICTORY ZOOM
        if (this.p1.hp <= 0 || this.p2.hp <= 0) {
            const winner = (this.p1.hp > 0) ? this.p1 : ((this.p2.hp > 0) ? this.p2 : null);
            if (winner) {
                // Smooth pan to winner
                const targetPos = winner.mesh.position.clone().add(new THREE.Vector3(0, 1.2, 3.5)); // Close up
                this.camera.position.lerp(targetPos, 0.02);

                const lookPos = winner.mesh.position.clone().add(new THREE.Vector3(0, 1.5, 0)); // Look at head
                this.camera.lookAt(lookPos);
                return;
            }
        }

        // Center point
        const midpoint = new THREE.Vector3()
            .addVectors(this.p1.mesh.position, this.p2.mesh.position)
            .multiplyScalar(0.5);

        if (this.introTimer > 0) {
            // CINEMATIC SWOOP (Intro)
            const t = this.introTimer / 240;
            const radius = 12;
            const angle = t * Math.PI * 0.5;
            const camX = Math.cos(angle) * radius;
            const camZ = Math.sin(angle) * radius + 5;
            const targetPos = new THREE.Vector3(midpoint.x + camX, 4, camZ);
            this.camera.position.lerp(targetPos, 0.05);
            this.camera.lookAt(midpoint.x, 2.0, 0);
            return;
        }

        // Damping shake
        this.cameraShake.multiplyScalar(0.85);

        // TEKKEN STYLE CAMERA LOGIC
        // CINEMATIC SUPER CHECK
        const usingSuper = (this.p1.state === FighterState.ATTACK_SPECIAL_3) ? this.p1 : ((this.p2.state === FighterState.ATTACK_SPECIAL_3) ? this.p2 : null);

        if (usingSuper && usingSuper.stateTimer < 50) {
            const targetPos = usingSuper.mesh.position.clone().add(new THREE.Vector3(0, 2, 4));
            const lookPos = usingSuper.mesh.position.clone().add(new THREE.Vector3(0, 1.5, 0));
            this.camera.position.lerp(targetPos, 0.1);
            this.camera.lookAt(lookPos);
            this.camera.position.add(this.cameraShake);
            return;
        }

        // Standard Dynamic Cam
        const dist = this.p1.mesh.position.distanceTo(this.p2.mesh.position);
        const baseDist = 5.5;
        const zoomFactor = Math.min(10, Math.max(0, dist - 1.5) * 0.6);
        const targetZ = baseDist + zoomFactor;
        const targetY = 2.5 + (zoomFactor * 0.1);

        // Action Zoom (Impact emphasis)
        let actionZoom = 0;
        // Check for Hit Stop (Freeze frame) via global hitStopFrames
        if (this.hitStopFrames > 0) {
            actionZoom = -2.5; // DRAMATIC ZOOM IN
        }

        const targetPos = new THREE.Vector3(midpoint.x, targetY, targetZ + actionZoom);
        const lerpSpeed = (actionZoom !== 0) ? 0.2 : 0.08;
        this.camera.position.lerp(targetPos, lerpSpeed);
        this.camera.position.add(this.cameraShake);

        const lookTarget = new THREE.Vector3(midpoint.x, 1.8, midpoint.z); // Look at actual midpoint (including Z)
        this.camera.lookAt(lookTarget);
    }

    // Dust Helper (Called once)
    createDust() {
        const count = 200;
        const geo = new THREE.BufferGeometry();
        const pos = [];
        for (let i = 0; i < count; i++) {
            pos.push((Math.random() - 0.5) * 50);
            pos.push(Math.random() * 20);
            pos.push((Math.random() - 0.5) * 30);
        }
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
        const mat = new THREE.PointsMaterial({
            color: 0xFFFFFF,
            size: 0.1,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const dustSystem = new THREE.Points(geo, mat);
        this.scene.add(dustSystem);
        // @ts-ignore
        dustSystem.userData = { isDust: true };
        this.particles.push({ mesh: dustSystem as unknown as THREE.Mesh, life: 99999, velocity: new THREE.Vector3(0, 0.02, 0) });
    }

    // STATE BROADCAST
    notificationState: string | null = null;

    broadcastState() {
        let winner = null;
        if (this.p1.hp <= 0) winner = "Player 2";
        else if (this.p2.hp <= 0) winner = "Player 1";
        else if (this.timeLeft === 0) {
            winner = this.p1.hp > this.p2.hp ? "Player 1" : (this.p2.hp > this.p1.hp ? "Player 2" : "Draw");
        }

        // Notification Logic
        // Notification Logic
        if (this.introTimer > 180) this.notificationState = "ROUND " + this.currentRound;
        else if (this.introTimer > 60 && this.introTimer < 120) this.notificationState = "FIGHT";
        else if (winner) this.notificationState = "K.O.";
        else this.notificationState = null;

        this.onStateChange({
            p1Health: this.p1.hp,
            p2Health: this.p2.hp,
            timeLeft: this.timeLeft,
            gameOver: winner !== null,
            winner: winner,
            isIntro: this.introTimer > 0,
            comboP1: this.comboP1,
            comboP2: this.comboP2,
            notification: this.notificationState,
            p1Wins: this.p1Wins,
            p2Wins: this.p2Wins,
            currentRound: this.currentRound
        });
    }

    handleResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.composer.setSize(window.innerWidth, window.innerHeight);
    }

    cleanup() {
        this.input.cleanup();
        window.removeEventListener('resize', this.handleResize);
        cancelAnimationFrame(this.animationId);
        clearInterval(this.timerInterval as number);
    }

    cherryBlossoms: { mesh: THREE.InstancedMesh, data: { velocity: THREE.Vector3, life: number }[] } | null = null;

    createCherryBlossoms() {
        // Cherry Blossoms
        const count = 1000;
        const geo = new THREE.PlaneGeometry(0.08, 0.08); // Tiny petals
        const mat = new THREE.MeshBasicMaterial({
            color: 0xffadc6, // Pink
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.8
        });
        const mesh = new THREE.InstancedMesh(geo, mat, count);
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

        const data = [];
        const dummy = new THREE.Object3D();

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 80;
            const y = Math.random() * 25;
            const z = (Math.random() - 0.5) * 80;
            dummy.position.set(x, y, z);
            dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);

            data.push({
                velocity: new THREE.Vector3((Math.random() - 0.5) * 0.05, -0.01 - Math.random() * 0.04, (Math.random() - 0.5) * 0.05),
                life: Math.random() * 100
            });
        }

        this.scene.add(mesh);
        this.cherryBlossoms = { mesh, data };
    }

    updateCherryBlossoms() {
        if (!this.cherryBlossoms) return;
        const { mesh, data } = this.cherryBlossoms;
        const dummy = new THREE.Object3D();

        for (let i = 0; i < data.length; i++) {
            mesh.getMatrixAt(i, dummy.matrix);
            dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);

            // Update Position
            dummy.position.add(data[i].velocity);

            // Wind Simulation: Sine wave drift + slight global x
            const wind = Math.sin(Date.now() * 0.001 + dummy.position.y) * 0.01;
            dummy.position.x += 0.02 + wind;

            // Boundary Wrap (Infinite Loop)
            if (dummy.position.y < 0) dummy.position.y = 25;
            if (dummy.position.x > 40) dummy.position.x = -40;

            // Rotate (Flutter)
            dummy.rotation.x += 0.02;
            dummy.rotation.z += 0.01;
            dummy.rotation.y += 0.01;

            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
        }
        mesh.instanceMatrix.needsUpdate = true;
    }
    createGodRays() {
        // Create 2-3 massive cones pointing down from the moon direction
        const rayGeo = new THREE.ConeGeometry(8, 60, 32, 1, true); // Openended
        rayGeo.translate(0, 30, 0); // Pivot at top
        const rayMat = new THREE.MeshBasicMaterial({
            color: 0xaaaaff,
            transparent: true,
            opacity: 0.03, // Very subtle opacity
            side: THREE.DoubleSide,
            depthWrite: false, // Don't block other translucents
            blending: THREE.AdditiveBlending // Glow type blending
        });

        // Ray 1
        const ray1 = new THREE.Mesh(rayGeo, rayMat);
        ray1.position.set(-15, 0, -20);
        ray1.lookAt(-10, 0, 0); // Point roughly down-ish
        ray1.rotation.x = Math.PI / 6; // Tilt
        this.scene.add(ray1);

        // Ray 2
        const ray2 = new THREE.Mesh(rayGeo, rayMat);
        ray2.position.set(-5, 0, -25);
        ray2.scale.set(0.7, 1.2, 0.7);
        ray2.rotation.z = -0.2;
        this.scene.add(ray2);
    }

    createGroundFog() {
        // Generate procedural fog texture
        const texture = this.createCloudTexture();
        const fogGeo = new THREE.PlaneGeometry(60, 60);
        const fogMat = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 0.15,
            color: 0x4466aa, // Cool Blue Mist
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            side: THREE.DoubleSide
        });

        // Layered Fog
        for (let i = 0; i < 8; i++) {
            const fog = new THREE.Mesh(fogGeo, fogMat);
            fog.rotation.x = -Math.PI / 2;
            fog.position.set(
                (Math.random() - 0.5) * 80,
                0.2 + i * 0.1, // Slight layers
                (Math.random() - 0.5) * 60
            );
            fog.rotation.z = Math.random() * Math.PI;
            fog.userData = { rotSpeed: (Math.random() - 0.5) * 0.001 }; // Slow drift
            this.scene.add(fog);
            this.particles.push({ mesh: fog, life: 999, velocity: new THREE.Vector3(), rotSpeed: fog.userData.rotSpeed });
        }
    }

    createCloudTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;

        // Simple "Cloud" Gradient Blob
        const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        grad.addColorStop(0, 'rgba(255,255,255,0.8)');
        grad.addColorStop(0.4, 'rgba(255,255,255,0.2)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 128, 128);

        const tex = new THREE.CanvasTexture(canvas);
        tex.needsUpdate = true;
        return tex;
    }

    createFireflies() {
        const geometry = new THREE.BufferGeometry();
        const count = 300;
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 80;
            positions[i * 3 + 1] = Math.random() * 15 + 2;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
            sizes[i] = Math.random() * 2;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            color: 0xffff88, // Firefly Yellow
            size: 0.15,
            transparent: true,
            opacity: 0.8,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        const fireflies = new THREE.Points(geometry, material);
        this.scene.add(fireflies);
        // Add to particles for simple drift animation if supported, else static for now
        this.particles.push({ mesh: fireflies as unknown as THREE.Mesh, life: 99999, velocity: new THREE.Vector3(0.01, 0.01, 0) });
    }
}