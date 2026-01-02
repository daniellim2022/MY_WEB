import * as THREE from 'three';
import { FighterState, GAME_CONFIG, FrameData, CharacterType } from '../types';
import { InputHandler } from './InputHandler';
import { SoundManager } from './SoundManager';

import { MOVE_LIST } from './data/MoveList';
import { StateMachine } from './fsm/StateMachine';
import { InputBuffer } from './fsm/InputBuffer';
import { InputManager } from './fsm/InputManager';
import { IdleState } from './fsm/states/IdleState';
import { HitState } from './fsm/states/HitState';
import { AirborneState } from './fsm/states/AirborneState'; // Ensure this exists or is imported if needed


export class Fighter {
  mesh: THREE.Group;
  projectiles: { mesh: THREE.Mesh, velocity: THREE.Vector3, owner: Fighter, active: boolean, damage: number, lifetime: number }[] = [];
  characterType: CharacterType;
  bodyParts: {
    head: THREE.Group;
    torso: THREE.Group;
    hips: THREE.Group;

    // Arms
    armL: THREE.Group;
    armR: THREE.Group;
    elbowL: THREE.Group;
    elbowR: THREE.Group;

    // Legs
    legL: THREE.Group;
    legR: THREE.Group;
    kneeL: THREE.Group;
    kneeR: THREE.Group;

    // Direct Mesh Access for Visuals
    meshHead: THREE.Mesh;
    meshTorso: THREE.Mesh;
    meshHips: THREE.Mesh;
    meshArmL: THREE.Mesh;
    meshForearmL: THREE.Mesh;
    meshArmR: THREE.Mesh;
    meshForearmR: THREE.Mesh;
    meshThighL: THREE.Mesh;
    meshShinL: THREE.Mesh;
    meshThighR: THREE.Mesh;
    meshShinR: THREE.Mesh;

    fistL: THREE.Mesh;
    fistR: THREE.Mesh;
    bootL: THREE.Mesh;
    bootR: THREE.Mesh;
  };

  isPlayer1: boolean;
  state: FighterState = FighterState.IDLE;
  // Physics
  velocity: THREE.Vector3 = new THREE.Vector3();
  isGrounded: boolean = true;
  facing: number = 1; // 1 for right, -1 for left

  // Config (Units: Meters per Second)
  gravity: number = 35.0; // High for snappy fall
  WALK_SPEED: number = 6.0;
  RUN_SPEED: number = 10.0;
  DASH_SPEED: number = 18.0;
  BACK_DASH_SPEED: number = 14.0;

  // Jump: v = sqrt(2 * g * h). 
  // To jump 2m high with g=35: v = sqrt(2 * 35 * 2) = sqrt(140) ~= 11.8
  JUMP_FORCE: number = 12.0;

  // Stats
  hp: number = 100;
  maxHp: number = 100;

  // Timers
  stateTimer: number = 0; // Frames in current state
  attackCooldown: number = 0;
  specialCooldown: number = 0;
  flashTimer: number = 0;
  stunDuration: number = 0;
  hitStopTimer: number = 0;

  // Input Handling
  lastTapTime: number = 0;
  lastKey: string = '';
  dashTimer: number = 0;
  dashVariant: number = 0;
  sidestepTimer: number = 0; // For cool down or duration
  comboWindow: boolean = false; // Input buffer window

  // AI State
  aiTimer: number = 0;
  aiAction: 'IDLE' | 'MOVE_FORWARD' | 'MOVE_BACK' | 'ALIGN_Z' | 'ATTACK' | 'BLOCK' = 'IDLE';

  // Input State for Just Pressed Logic
  prevKeys: Record<string, boolean> = {};

  // FX State
  isElectric: boolean = false;
  isLowParrying: boolean = false; // Input state
  legacyInputState: FighterState | null = null; // Renamed to avoid collision
  inputBufferTimer: number = 0;
  onHit: ((position: THREE.Vector3, type: 'light' | 'heavy' | 'block' | 'electric' | 'cinematic') => void) | null = null;

  // Elasticity (Visual Juice)
  elasticScale: THREE.Vector3 = new THREE.Vector3(1, 1, 1);
  elasticVelocity: THREE.Vector3 = new THREE.Vector3(0, 0, 0);

  // HFSM & Physics Overhaul
  stateMachine: StateMachine;
  inputBuffer: InputBuffer;
  inputManager: InputManager; // Soft deprecated
  gravityScale: number = 1.0;
  public static readonly HIT_STOP_FRAMES = 8;


  constructor(isPlayer1: boolean, characterType: CharacterType, color: number) {
    this.isPlayer1 = isPlayer1;
    this.characterType = characterType;
    this.mesh = new THREE.Group();
    // @ts-ignore
    this.bodyParts = {};

    // Used for materials logic if checking opponent, but cleaner to use properties
    const isGilgamesh = this.characterType === 'GILGAMESH';

    // --- MATERIALS (AAA High-Fidelity PBR) ---

    // GOLD (Gilgamesh Armor) - Divine Alloy
    const goldMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFD700,
      roughness: 0.15, // Polished
      metalness: 1.0,
      emissive: 0xFFAA00,
      emissiveIntensity: 0.4,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      sheen: 0xFFDD00,
      sheenRoughness: 0.3,
      iridescence: 0.3,
      iridescenceIOR: 1.5
    });

    // RED CLOTH (Gilgamesh Waist / Archer Coat) - Velvet/Silk
    const redClothMat = new THREE.MeshPhysicalMaterial({
      color: 0xaa0000, // Deeper red
      roughness: 0.7, // Fabric
      metalness: 0.1,
      side: THREE.DoubleSide,
      clearcoat: 0.1,
      sheen: 0xff0000,
      sheenRoughness: 0.5
    });

    // BLACK ARMOR (Archer Body) - Carbon/Leather
    const blackArmorMat = new THREE.MeshPhysicalMaterial({
      color: 0x050505,
      roughness: 0.4,
      metalness: 0.6,
      clearcoat: 1.0,
      clearcoatRoughness: 0.4, // Leather sheen
      sheen: 0x222244 // Blueish tint on edges
    });

    // SKIN (Subsurface Scattering - Fake SSS)
    const skinMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFDDBB,
      roughness: 0.4,
      metalness: 0.0,
      transmission: 0.15, // Light passing through
      thickness: 0.5 // SSS Thickness
    });

    // HAIR
    const hairGoldMat = new THREE.MeshStandardMaterial({ color: 0xFFDD00, roughness: 0.2, metalness: 0.4, emissive: 0x332200 });
    const hairWhiteMat = new THREE.MeshStandardMaterial({ color: 0xDDDDDD, roughness: 0.3, metalness: 0.1, emissive: 0x111111 });

    // WEAPONS - Kanshou (Black Hex) & Bakuya (White)
    const kanshouMat = new THREE.MeshPhysicalMaterial({
      color: 0x111111, roughness: 0.3, metalness: 1.0,
      emissive: 0x330000, clearcoat: 1.0, iridescence: 0.5
    });
    const bakuyaMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF, roughness: 0.3, metalness: 1.0,
      emissive: 0x000033, clearcoat: 1.0, iridescence: 0.5
    });

    const globalScale = 1.3;
    this.mesh.scale.set(globalScale, globalScale, globalScale);

    // HELPER
    const createPart = (geo: THREE.BufferGeometry, mat: THREE.Material) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      // OUTLINE (Inverted Hull)
      const outlineGeo = geo.clone();
      const outlineMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
      const outlineMesh = new THREE.Mesh(outlineGeo, outlineMat);
      outlineMesh.scale.multiplyScalar(1.05); // Thin outline
      mesh.add(outlineMesh);

      return mesh;
    };

    // 1. HIPS
    this.bodyParts.hips = new THREE.Group();
    this.bodyParts.hips.position.y = 0.9;
    this.mesh.add(this.bodyParts.hips);

    // Hips visual
    const hipsGeo = new THREE.BoxGeometry(0.32, 0.22, 0.24);
    let hipsMat = skinMat;

    if (isGilgamesh) {
      // Gilgamesh Gold Armor Hips
      hipsMat = goldMat;
    } else {
      // Archer Black Pants Top
      hipsMat = new THREE.MeshPhysicalMaterial({ color: 0x111111, roughness: 0.9, metalness: 0.5, clearcoat: 0.2 });
    }

    this.bodyParts.meshHips = createPart(hipsGeo, hipsMat);
    this.bodyParts.hips.add(this.bodyParts.meshHips);

    // WAIST CLOTH / COAT TAILS
    if (isGilgamesh) {
      // GILGAMESH: Red Waist Cloth (Front/Back/Sides)
      // Back Flap
      const backFlap = createPart(new THREE.BoxGeometry(0.3, 0.5, 0.05), redClothMat);
      backFlap.position.set(0, -0.2, -0.15);
      backFlap.rotation.x = 0.2;
      this.bodyParts.hips.add(backFlap);

      // Side Flaps (Gold Tassets?) No, usually just red cloth under gold armor
      // Let's add Gold Tassets
      const tassetGeo = new THREE.BoxGeometry(0.1, 0.3, 0.2);
      const tassetL = createPart(tassetGeo, goldMat);
      tassetL.position.set(0.2, -0.1, 0);
      tassetL.rotation.z = -0.2;
      this.bodyParts.hips.add(tassetL);

      const tassetR = createPart(tassetGeo, goldMat);
      tassetR.position.set(-0.2, -0.1, 0);
      tassetR.rotation.z = 0.2;
      this.bodyParts.hips.add(tassetR);

    } else {
      // ARCHER: Red Coat Tails
      const tailGeo = new THREE.BoxGeometry(0.5, 0.8, 0.05);

      // Back Tail
      const tailBack = createPart(tailGeo, redClothMat);
      tailBack.position.set(0, -0.3, -0.15);
      tailBack.rotation.x = 0.15;
      this.bodyParts.hips.add(tailBack);

      // Side Tail L
      const tailL = createPart(new THREE.BoxGeometry(0.25, 0.8, 0.05), redClothMat);
      tailL.position.set(0.25, -0.3, 0);
      tailL.rotation.z = -0.1;
      tailL.rotation.y = -1.57;
      this.bodyParts.hips.add(tailL);

      // Side Tail R
      const tailR = createPart(new THREE.BoxGeometry(0.25, 0.8, 0.05), redClothMat);
      tailR.position.set(-0.25, -0.3, 0);
      tailR.rotation.z = 0.1;
      tailR.rotation.y = 1.57;
      this.bodyParts.hips.add(tailR);
    }

    // 2. TORSO
    this.bodyParts.torso = new THREE.Group();
    this.bodyParts.torso.position.set(0, 0.15, 0);
    this.bodyParts.hips.add(this.bodyParts.torso);

    // Heroic V-Taper
    const torsoGeo = new THREE.CylinderGeometry(0.38, 0.24, 0.55, 8);
    let torsoMat = isGilgamesh ? goldMat : blackArmorMat; // Archer has black body armor

    this.bodyParts.meshTorso = createPart(torsoGeo, torsoMat);
    this.bodyParts.meshTorso.position.y = 0.28;
    this.bodyParts.torso.add(this.bodyParts.meshTorso);

    // TORSO DETAILS
    if (isGilgamesh) {
      // Gilgamesh: Blue tattoo marks? Or just armor details.
      // Let's add a "necklace" or collar
      const collar = createPart(new THREE.TorusGeometry(0.18, 0.04, 8, 16), goldMat);
      collar.rotation.x = Math.PI / 2;
      collar.position.set(0, 0.5, 0);
      this.bodyParts.torso.add(collar);
    } else {
      // Archer: White straps / lines on black armor
      // Simple cross strap geometry
      const strap = createPart(new THREE.BoxGeometry(0.4, 0.4, 0.27), blackArmorMat);
      strap.position.y = 0.3;
      this.bodyParts.torso.add(strap);
    }

    // 3. HEAD
    this.bodyParts.head = new THREE.Group();
    this.bodyParts.head.position.set(0, 0.60, 0);
    this.bodyParts.torso.add(this.bodyParts.head);

    const headGeo = new THREE.BoxGeometry(0.24, 0.28, 0.26);
    this.bodyParts.meshHead = createPart(headGeo, skinMat);
    this.bodyParts.head.add(this.bodyParts.meshHead);

    // Face
    const eyeGeo = new THREE.PlaneGeometry(0.06, 0.025);
    const eyeMat = new THREE.MeshBasicMaterial({ color: isGilgamesh ? 0xFF0000 : 0xAAAAAA }); // Red vs Grey Eyes

    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(0.06, 0.05, 0.135);
    this.bodyParts.head.add(eyeL);

    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(-0.06, 0.05, 0.135);
    this.bodyParts.head.add(eyeR);

    // HAIR
    const hairGroup = new THREE.Group();
    hairGroup.position.set(0, 0.15, 0);
    this.bodyParts.head.add(hairGroup);

    if (isGilgamesh) {
      // GILGAMESH: Standing Spikes (Super Saiyan style almost)
      const hColor = hairGoldMat;
      const spikeGeo = new THREE.ConeGeometry(0.06, 0.35, 4);
      for (let i = 0; i < 7; i++) {
        const s = createPart(spikeGeo, hColor);
        // Fan out
        const angle = (i - 3) * 0.3;
        s.position.x = Math.sin(angle) * 0.1;
        s.position.y = Math.cos(angle) * 0.05;
        s.rotation.z = -angle;
        s.rotation.x = -0.2;
        hairGroup.add(s);
      }
    } else {
      // ARCHER: Swept Back White
      const hColor = hairWhiteMat;
      const spikeGeo = new THREE.ConeGeometry(0.05, 0.3, 4);
      for (let i = 0; i < 9; i++) {
        const s = createPart(spikeGeo, hColor);
        s.position.x = (i - 4) * 0.05;
        s.position.z = -0.05 - Math.abs(i - 4) * 0.02;
        s.rotation.x = -0.6; // Swept back
        hairGroup.add(s);
      }
    }

    // 4. LIMBS
    const createLimb = (side: 'L' | 'R', isLeg: boolean) => {
      const sign = side === 'L' ? -1 : 1;
      const radius = 0.085;

      const parent = isLeg ? this.bodyParts.hips : this.bodyParts.torso;
      let rootPos = isLeg
        ? new THREE.Vector3(sign * 0.18, -0.1, 0)
        : new THREE.Vector3(sign * 0.42, 0.45, 0);

      const limbGroup = new THREE.Group();
      limbGroup.position.copy(rootPos);
      parent.add(limbGroup);

      // Materials
      let limbMat = skinMat;
      let lowerLimbMat = skinMat;

      if (isGilgamesh) {
        // Gilgamesh: Gold Gauntlets and Greaves
        // Upper Arm: Skin (or Plate if full armor). Let's do Full Armor for consistency.
        limbMat = goldMat;
        lowerLimbMat = goldMat;
      } else {
        // Archer:
        // Legs: Black Pants
        if (isLeg) {
          limbMat = new THREE.MeshPhysicalMaterial({ color: 0x111111, roughness: 0.8, metalness: 0.5, clearcoat: 0.2 }); // Black Pants
          lowerLimbMat = limbMat;
        } else {
          // Arms: Red Sleeve (Upper), Red Sleeve (Lower)
          limbMat = redClothMat;
          lowerLimbMat = redClothMat;
        }
      }

      // Upper Limb
      const upperLength = isLeg ? 0.5 : 0.4;
      const upperGeo = new THREE.CapsuleGeometry(radius, upperLength, 4, 8);
      const upperMesh = createPart(upperGeo, limbMat);
      upperMesh.position.y = -upperLength / 2;
      limbGroup.add(upperMesh);

      // Shoulder Armor (Pauldrons)
      if (!isLeg) {
        if (isGilgamesh) {
          // Gilgamesh Large Gold Pauldron
          const pauldronGeo = new THREE.SphereGeometry(0.18, 8, 8, 0, Math.PI);
          const pauldron = createPart(pauldronGeo, goldMat);
          pauldron.rotation.x = -Math.PI / 2;
          pauldron.scale.set(1, 1, 0.6);
          pauldron.position.y = 0.05;
          limbGroup.add(pauldron);
        } else {
          // Archer Shoulder pad? No, just cloth.
        }
      }

      // Elbow/Knee Joint
      const jointGroup = new THREE.Group();
      jointGroup.position.y = -upperLength;
      limbGroup.add(jointGroup);

      // Lower Limb
      const lowerLength = isLeg ? 0.5 : 0.4;
      // Archer's boots are metal, Gilgamesh greaves are metal
      const lowerVisualMat = isLeg && !isGilgamesh ? new THREE.MeshPhysicalMaterial({ color: 0x666666, metalness: 0.8, roughness: 0.4 }) : lowerLimbMat;

      const lowerGeo = new THREE.CapsuleGeometry(radius * 0.85, lowerLength, 4, 8);
      const lowerMesh = createPart(lowerGeo, lowerVisualMat);
      lowerMesh.position.y = -lowerLength / 2;
      jointGroup.add(lowerMesh);

      // Hand/Foot
      const endMat = isGilgamesh ? goldMat : (isLeg ? new THREE.MeshPhysicalMaterial({ color: 0x222222, roughness: 0.9 }) : new THREE.MeshPhysicalMaterial({ color: 0x222222, roughness: 0.9 })); // Black gloves/boots
      const endGeo = isLeg
        ? new THREE.BoxGeometry(0.15, 0.12, 0.26)
        : new THREE.BoxGeometry(0.12, 0.12, 0.12);
      const endMesh = createPart(endGeo, endMat);
      endMesh.position.y = -lowerLength;
      if (isLeg) endMesh.position.z = 0.05; // Feet forward
      jointGroup.add(endMesh);

      // WEAPONS (Archer Only)
      if (!isGilgamesh && !isLeg) {
        const isLeft = side === 'L';
        const bladeColor = isLeft ? kanshouMat : bakuyaMat;
        // Kanshou (Black) Left, Bakuya (White) Right? Or Vice Versa.
        // Usually Kanshou (Black) in Right, Bakuya (White) in Left? 
        // Actually it varies, but let's stick to: Left=Black, Right=White for contrast.
        // Wait, Kanshou (Black) is Hexagon pattern, Bakuya (White).

        // Blade Geometry (Yin Yang Swords)
        const bladeGeo = new THREE.BoxGeometry(0.12, 0.6, 0.04);
        const blade = createPart(bladeGeo, bladeColor);
        blade.position.set(0, -0.25, 0.25);
        blade.rotation.x = Math.PI / 2; // Point forward
        blade.rotation.z = isLeft ? 0.3 : -0.3; // Curve inward
        endMesh.add(blade);

        // Handle
        const hilt = createPart(new THREE.CylinderGeometry(0.02, 0.02, 0.2), new THREE.MeshStandardMaterial({ color: 0x333333 }));
        hilt.rotation.x = Math.PI / 2;
        endMesh.add(hilt);
      }

      // Assign Ref
      if (!isLeg) {
        if (side === 'L') {
          this.bodyParts.armL = limbGroup;
          this.bodyParts.elbowL = jointGroup;
          this.bodyParts.meshArmL = upperMesh;
          this.bodyParts.meshForearmL = lowerMesh;
          this.bodyParts.fistL = endMesh;
        } else {
          this.bodyParts.armR = limbGroup;
          this.bodyParts.elbowR = jointGroup;
          this.bodyParts.meshArmR = upperMesh;
          this.bodyParts.meshForearmR = lowerMesh;
          this.bodyParts.fistR = endMesh;
        }
      } else {
        if (side === 'L') {
          this.bodyParts.legL = limbGroup;
          this.bodyParts.kneeL = jointGroup;
          this.bodyParts.meshThighL = upperMesh;
          this.bodyParts.meshShinL = lowerMesh;
          this.bodyParts.bootL = endMesh;
        } else {
          this.bodyParts.legR = limbGroup;
          this.bodyParts.kneeR = jointGroup;
          this.bodyParts.meshThighR = upperMesh;
          this.bodyParts.meshShinR = lowerMesh;
          this.bodyParts.bootR = endMesh;
        }
      }
    };

    createLimb('L', false);
    createLimb('R', false);
    createLimb('L', true);
    createLimb('R', true);

    this.mesh.position.set(isPlayer1 ? -6 : 6, GAME_CONFIG.GROUND_Y, 0);

    // --- HFSM INIT ---
    this.stateMachine = new StateMachine();
    this.inputManager = new InputManager(); // Initialize Legacy
    this.inputBuffer = new InputBuffer(); // Initialize New Buffer
    this.stateMachine.changeState(new IdleState(this));
  }

  // TEKKEN COMMAND PARSER
  getCommand(input: InputHandler): FighterState | null {
    const isForward = (this.facing === 1 && input.keys['KeyD']) || (this.facing === -1 && input.keys['KeyA']);
    const isBack = (this.facing === 1 && input.keys['KeyA']) || (this.facing === -1 && input.keys['KeyD']);
    const isDown = input.keys['KeyS'];
    const isUp = input.keys['KeyW'];

    // 1. Check Limbs (Just Pressed)
    const lp = input.keys['KeyU'] && !this.prevKeys['KeyU'];
    const rp = input.keys['KeyI'] && !this.prevKeys['KeyI'];
    const lk = input.keys['KeyJ'] && !this.prevKeys['KeyJ'];
    const rk = input.keys['KeyK'] && !this.prevKeys['KeyK'];

    // 2. Map to States
    if (lp) {
      if (isForward) return FighterState.FORWARD_LP;
      if (isDown) return FighterState.DOWN_LP;
      return FighterState.ATTACK_LP;
    }
    if (rp) {
      if (isForward) return FighterState.FORWARD_RP;
      if (isDown) return FighterState.DOWN_RP;
      return FighterState.ATTACK_RP;
    }
    if (lk) {
      if (isForward) return FighterState.FORWARD_LK;
      if (isDown) return FighterState.DOWN_LK;
      return FighterState.ATTACK_LK;
    }
    if (rk) {
      if (isForward) return FighterState.FORWARD_RK;
      if (isDown) return FighterState.DOWN_RK;
      return FighterState.ATTACK_RK;
    }

    // 3. Specials
    if (input.keys['KeyE'] && !this.prevKeys['KeyE']) return FighterState.ATTACK_SPECIAL;
    if (input.keys['KeyQ'] && !this.prevKeys['KeyQ']) return FighterState.ATTACK_SPECIAL_2;
    if (input.keys['KeyO'] && !this.prevKeys['KeyO']) return FighterState.ATTACK_SPECIAL_3;

    return null;
  }

  // Legacy buffer removed




  update(dt: number, input: InputHandler, opponent: Fighter, time: number) {
    this.stateTimer++;

    // Global Physics Update
    this.handlePhysics(opponent, dt);
    this.updateProjectiles(dt, opponent);

    // AI or Input update
    this.currentOpponent = opponent; // Reference for attemptHit
    if (this.isPlayer1) {
      // Collect Input
      const justPressed = input.getJustPressed(); // Assuming InputHandler has this, if not we need to fix

      // DIAGNOSTIC LOG (Requested by User)
      const hasInput = input.keys['KeyW'] || input.keys['KeyA'] || input.keys['KeyS'] || input.keys['KeyD'];
      if (hasInput) {
        // console.log(`Input Detected: [${Object.keys(input.keys).filter(k => input.keys[k]).join(',')}]`);
      }

      // --- NEW INPUT SYSTEM INTEGRATION ---
      // 1. Bridge InputHandler (OS) -> InputBuffer (Game) with Edge Trigger
      const command = this.getCommand(input);
      if (command && this.inputBuffer) {
        this.inputBuffer.add(command, this.stateTimer);
      }

      // 2. Legacy Support (for InputHandler internal logic if any)
      if (justPressed && this.inputManager) {
        this.inputManager.queueInput(justPressed, this.stateTimer);
      }
      if (this.inputManager) this.inputManager.update(this.stateTimer);
      if (this.inputBuffer) this.inputBuffer.update(this.stateTimer); // Prune old

      this.stateMachine.handleInput(this.inputBuffer); // Pass BUFFER NOT RAW INPUT?
      // Wait, handleInput usually expects InputHandler in current code. 
      // We should update StateMachine to pass InputHandler AND InputBuffer or just Buffer?
      // For now, let's keep passing `input` (raw) to existing states to avoid breaking everything immediately,
      // but States should prefer consuming from buffer.
      this.stateMachine.handleInput(input);
      this.stateMachine.update(dt);
    } else {
      // AI Update
      this.handleAI(opponent, dt);
      this.stateMachine.update(dt);
    }

    this.updateAnimations(dt);
    this.updateRotation(); // FORCE LOOK AT TARGET
    this.handleVisuals();

    if (this.isPlayer1) {
      this.prevKeys = { ...input.keys };
    }
  }

  // Legacy Input / State Handler Wrappers (To prevent build errors if needed)
  handleInputEvent(code: string) {
    if (this.inputManager) {
      this.inputManager.queueInput(code, this.stateTimer);
    }
  }







  handleAI(opponent: Fighter, dt: number) {
    if (this.state === FighterState.HIT || this.state === FighterState.STUNNED || this.state === FighterState.VICTORY || this.state === FighterState.DEAD) return;

    // Tech Throws
    if (this.state === FighterState.GRABBED) {
      if (Math.random() < 0.05) {
        this.state = FighterState.IDLE;
        this.stunDuration = 0;
        this.velocity.add(new THREE.Vector3(0, 0, -10).applyQuaternion(this.mesh.quaternion));
        SoundManager.getInstance().playSFX('block');
      }
      return;
    }

    if (this.isAttacking()) return;

    if (this.attackCooldown > 0) this.attackCooldown -= dt * 60;

    this.aiTimer++;
    const dist = this.mesh.position.distanceTo(opponent.mesh.position);
    const isFacing = (opponent.mesh.position.x - this.mesh.position.x) * this.facing > 0;

    if (this.aiTimer > 20) {
      this.aiTimer = 0;

      // 1. RAGE ART
      if (this.hp < 30 && Math.random() > 0.7 && dist < 4.0) {
        this.attack(FighterState.RAGE_ART);
        return;
      }

      // 2. PUNISH
      if ((opponent.state === FighterState.ATTACK_SPECIAL_3 || opponent.state === FighterState.ATTACK_THROW) && opponent.attackCooldown > 10) {
        this.attack(FighterState.ATTACK_SPECIAL_3);
        return;
      }

      // 3. COMBO
      if (!opponent.isGrounded && dist < 4.0) {
        this.attack(FighterState.ATTACK_SPECIAL);
        return;
      }

      // Simplified AI Attack
      if (Math.random() > 0.5) this.attack(FighterState.ATTACK_LP);
      else this.attack(FighterState.ATTACK_RK);
      if (Math.random() > 0.8) this.attack(FighterState.ATTACK_THROW);
      else if (Math.random() > 0.9) this.state = FighterState.BLOCK_LOW;
    } else {
      if (isFacing) this.state = FighterState.WALK_FORWARD;
      else this.state = FighterState.WALK_BACK;
      this.velocity.x += this.facing * GAME_CONFIG.ACCELERATION * dt * 5;
    }
  }


  updateRotation() {
    if (!this.currentOpponent) return;

    const target = this.currentOpponent.mesh.position.clone();
    target.y = this.mesh.position.y; // Lock Y to prevent tilting
    this.mesh.lookAt(target);
  }

  attack(type: FighterState) {
    this.state = type;
    this.stateTimer = 0;
    this.velocity.set(0, 0, 0); // Stop on attack

    if (type === FighterState.ATTACK_SPECIAL || type === FighterState.ATTACK_SPECIAL_2 || type === FighterState.ATTACK_SPECIAL_3) {
      this.specialCooldown = 300; // 5 Seconds Cooldown (60fps * 5)
    }
  }




  attemptHit(moveData: FrameData) {
    // Find opponent via GameEngine or assume opponent is processed in update
    // For now, we need ref to opponent. 
    // StateMachine or Fighter needs access to 'opponent'.
    // Update method has opponent, but States don't naturally store it unless passed.
    // AttackState update can't access opponent directly unless Fighter stores it.
    // NOTE: We need to store 'opponent' reference in Fighter update loop to be accessible here.
    if (!this.currentOpponent) return;
    this.checkHit(this.currentOpponent, moveData);
  }

  currentOpponent: Fighter | null = null;

  checkHit(opponent: Fighter, move: FrameData) {

    const range = (this.state === FighterState.ATTACK_RK) ? 2.8 : 2.2;
    const rangeSq = range * range;
    const distSq = this.mesh.position.distanceToSquared(opponent.mesh.position);

    if (distSq < rangeSq) {
      let blocked = false;
      let whiff = false;

      const isBlockingHigh = opponent.state === FighterState.BLOCK || opponent.state === FighterState.WALK_BACK;
      const isBlockingLow = opponent.state === FighterState.BLOCK_LOW;
      const isCrouching = opponent.state === FighterState.DUCK || opponent.state === FighterState.BLOCK_LOW;
      const isHelpless = opponent.state === FighterState.WALL_SPLAT || opponent.state === FighterState.GROUNDED || opponent.state === FighterState.STUNNED;

      // 1. LOW PARRY LOGIC
      if (opponent.isLowParrying && move.hitLevel === 'low' && !isHelpless && this.state !== FighterState.ATTACK_THROW) {
        // Trigger Low Parry event
        this.state = FighterState.THROWN; // Attacker gets "Thrown" (balance broken)
        this.velocity.set(0, 5.0, 0); // Mini launch
        this.stunDuration = 45;
        SoundManager.getInstance().playSFX('block'); // Parry sound?
        // TODO: Parry Visual
        opponent.state = FighterState.ATTACK_SPECIAL; // Play some animation? default to idle? 
        // Actually just frame advantage.
        return;
      }

      // 2. POWER CRUSH (ARMOR) LOGIC
      // If opponent is attacking with Armor Move and hit is NOT Low/Throw
      if (opponent.isAttacking() && !isHelpless) {
        // Check Hit Level
        let isLow = move.hitLevel === 'low' ||
          this.state === FighterState.DOWN_LP ||
          this.state === FighterState.DOWN_RP ||
          this.state === FighterState.DOWN_LK ||
          this.state === FighterState.DOWN_RK;

        const opMove = MOVE_LIST[opponent.state];
        if (opMove && opMove.isArmor && !isLow && this.state !== FighterState.ATTACK_THROW) {
          // ABSORED!
          // Opponent takes damage but NO STUN, NO INTERRUPT
          opponent.takeDamage(move.damage, this.mesh.position, false, false, false, move);
          // Visual Warning (White Flash)
          // Sound
          SoundManager.getInstance().playSFX('block');
          if (this.onHit) this.onHit(opponent.mesh.position.add(new THREE.Vector3(0, 1, 0)), 'block'); // Gray sparks

          return; // Exit, do not apply stun/knockback to armor user
        }
      }

      // THROW LOGIC
      if (this.state === FighterState.ATTACK_THROW) {
        if (opponent.isGrounded && opponent.state !== FighterState.THROWN && opponent.state !== FighterState.GRABBED && distSq < 2.0 * 2.0) {
          // Throw Connects -> Enter GRABBED (Tech Window)
          opponent.state = FighterState.GRABBED;
          opponent.stunDuration = 15; // 15 frames to break (0.25s)
          opponent.velocity.set(0, 0, 0);

          // Link to attacker so we know who to push back on break
          // We don't have a direct 'grappler' ref, but we can assume opponent passed in update is the one?
          // Actually let's just make attacker wait.
          this.stunDuration = 40; // Wait for result

          return;
        }
        whiff = true; // Missed throw
      }

      if (!isHelpless && this.state !== FighterState.ATTACK_THROW) {
        if (move.hitLevel === 'high') {
          if (isCrouching) whiff = true;
          else if (isBlockingHigh) blocked = true;
        }
        else if (move.hitLevel === 'mid') {
          if (isBlockingHigh) blocked = true;
          if (isBlockingLow) blocked = false;
        }
        else if (move.hitLevel === 'low') {
          if (isBlockingLow) blocked = true;
          else blocked = false;
        }
      } else if (opponent.state === FighterState.THROWN) {
        return; // Can't hit them while being thrown (invuln frame?)
      } else {
        // Can't block if helpless
        blocked = false;
      }

      if (whiff) return;

      this.hitStopTimer = 6;
      opponent.hitStopTimer = 6;

      if (blocked) {
        opponent.takeDamage(move.damage * 0.1, this.mesh.position, true, false, false, move);
        if (this.onHit) this.onHit(this.mesh.position.clone().add(opponent.mesh.position).multiplyScalar(0.5).add(new THREE.Vector3(0, 1.5, 0)), 'block');
        return;
      }

      const isCounter = opponent.isAttacking();
      // Launch Logic: Explicit property OR Hardcoded defaults (Legacy)
      let launchForce = move.launch || 0;
      if (!launchForce) {
        if (this.state === FighterState.ATTACK_RK) launchForce = 12.0;
        else if (isCounter && move.hitLevel === 'mid') launchForce = 10.0;
      }

      // Auto-SlowMo on KO or Big Counter
      if (isCounter && opponent.hp < 20) {
        // This requires access to GameEngine? 
        // For now, we rely on GameEngine KO logic. 
        // But "Counter SlowMo" on non-KO is cool. 
        // We can emit event? "onHit" has callbacks.
        // Let's assume GameEngine handles KO slow mo. 
      }

      opponent.takeDamage(move.damage, this.mesh.position, false, launchForce > 0, isCounter, move);
      opponent.takeDamage(move.damage, this.mesh.position, false, launchForce > 0, isCounter, move);

      const isElectric = move.isElectric || false;
      const isCinematic = move.isCinematic || false;

      let hitType: 'light' | 'heavy' | 'block' | 'electric' | 'cinematic' = (launchForce > 0 || move.damage > 12) ? 'heavy' : 'light';
      if (isElectric) hitType = 'electric';
      if (isCinematic) hitType = 'cinematic';

      if (this.onHit) this.onHit(this.mesh.position.clone().add(opponent.mesh.position).multiplyScalar(0.5).add(new THREE.Vector3(0, 1.5, 0)), hitType);
    }
  }

  takeDamage(amount: number, attackerPos: THREE.Vector3, blocked: boolean, launch: boolean, counter: boolean, move?: FrameData) {
    let finalDamage = amount; // CHIP DAMAGE ALLOWED

    // TORNADO / SREW CHECK
    // If airborne and hit by screw, enter Tornado state
    // We do this BEFORE damage/state transition so we can set state
    if (!this.isGrounded && move?.isScrew && this.state !== FighterState.TORNADO) {
      this.state = FighterState.TORNADO;
      this.velocity.y = 5.0; // Mild bounce
      this.stunDuration = 60; // Long stun
      SoundManager.getInstance().playSFX('hit_heavy');
      return; // Skip standard hit transition, but take damage?
    }

    // GUTS (Defense Buff at Low HP)
    if (this.hp < 30) finalDamage *= 0.9;

    // Counter Bonus
    if (counter) finalDamage *= 1.25;

    // GROUND/WALL SCALING
    const isGroundedHit = this.state === FighterState.GROUNDED;
    const isWallHit = this.state === FighterState.WALL_SPLAT;
    if (isGroundedHit) finalDamage *= 0.6; // 60% damage on ground
    if (isWallHit) finalDamage *= 0.8; // 80% damage for wall combo

    this.hp = Math.max(0, this.hp - finalDamage);

    if (this.hp <= 0) {
      this.state = FighterState.DEAD;
      return;
    }

    // STATE TRANSITION
    if (blocked) {
      this.state = (move?.hitLevel === 'low' ? FighterState.BLOCK_LOW : FighterState.BLOCK);
    } else {
      // If hit while Grounded, stay Grounded unless launched?
      // Tekken: Getting hit on ground usually keeps you on ground or floats you slightly.
      if (isGroundedHit) {
        // Mini Float (Reset state to HIT so they can be juggled again?)
        // Or keep GROUNDED state but play hit reaction?
        // Let's float them slightly to allow pickup
        if (launch) {
          this.state = FighterState.HIT;
          this.velocity.y = 8.0; // Re-launch
          this.isGrounded = false;
        }
        // Else just take damage and stay grounded?
        // For now, let's force them into HIT state briefly to show impact?
        // Actually, staying GROUNDED is safer for now unless launched.
        // Let's add small pop-up implies "pickup" logic
        this.state = FighterState.HIT;
        this.velocity.y = 4.0;
        this.isGrounded = false;
      } else if (isWallHit) {
        this.state = FighterState.HIT; // Wall slump to HIT (fall down) or re-splat?
        // Let standard knockback handle it -> if they hit wall again, checkHit loop handles it?
        // For now, simple transition to HIT
      } else {
        this.state = FighterState.HIT;
      }
    }

    let stun = move ? (blocked ? move.blockStun : move.stun) : 20;
    if (counter && !blocked) stun += 10;
    this.stunDuration = stun;
    this.flashTimer = 8; // Visual flash

    // Standard Knockback Physics
    const dir = new THREE.Vector3().subVectors(this.mesh.position, attackerPos).normalize();
    dir.y = 0; dir.normalize();

    // Knockback magnitude
    let kb = move?.knockback || 1.0;
    if (blocked) kb *= 0.5;
    if (launch) kb *= 1.2;

    // Apply knockback
    // Ensure we don't just add velocity on top of existing crazy values
    // But usually we add.
    const kbVec = dir.multiplyScalar(kb * 8.0);
    this.velocity.add(kbVec);

    if (!blocked && launch) {
      // Dynamic Launch Velocity
      const force = move?.launch || 12.0; // Default if boolean true passed but no prop
      this.velocity.y = force;
      this.isGrounded = false;
    }
  }

  handlePhysics(opponent: Fighter, dt: number) {
    // 1. Position Integration: pos += vel * dt
    this.mesh.position.add(this.velocity.clone().multiplyScalar(dt));

    // 2. Gravity Integration: vel.y -= g * dt
    if (this.mesh.position.y > GAME_CONFIG.GROUND_Y) {
      this.velocity.y -= this.gravity * dt;
      this.isGrounded = false;
    } else {
      // Ground Collision
      if (this.velocity.y < 0) this.velocity.y = 0;
      this.mesh.position.y = GAME_CONFIG.GROUND_Y;

      // LANDING LOGIC
      if (!this.isGrounded && (this.state === FighterState.HIT || this.state === FighterState.STUNNED)) {
        // Hard Knockdown if falling fast or low health
        this.state = FighterState.GROUNDED;
        this.stunDuration = 60; // Stay down
        SoundManager.getInstance().playSFX('land'); // Thud
        this.velocity.set(0, 0, 0);
        if (this.onHit) this.onHit(this.mesh.position, 'heavy'); // Dust effect
      }

      this.isGrounded = true;
    }

    // 3. Ground Friction
    if (this.isGrounded) {


      // Apply simple friction when not voluntarily moving
      const isMoving = (this.state === FighterState.WALK ||
        this.state === FighterState.WALK_FORWARD ||
        this.state === FighterState.WALK_BACK ||
        this.state === FighterState.DASH_FORWARD ||
        this.state === FighterState.DASH_BACK ||
        this.state === FighterState.SIDESTEP_LEFT ||
        this.state === FighterState.SIDESTEP_RIGHT);

      if (!isMoving) {
        // Friction: Decelerate X/Z
        const friction = 10.0 * dt;
        this.velocity.x = THREE.MathUtils.damp(this.velocity.x, 0, 10, dt);
        this.velocity.z = THREE.MathUtils.damp(this.velocity.z, 0, 10, dt);
      }
    }

    // Bounds
    // BOUNDS & WALL SPLAT
    const wallX = 15;
    const wallZ = 8;

    // TORNADO PHYSICS
    if (this.state === FighterState.TORNADO) {
      // Spin
      this.mesh.rotation.x += 0.5; // Tumble
      this.mesh.rotation.y += 0.5;

      // If landed, transition to Grounded
      // (Handled by LANDING LOGIC below automatically if we don't return)
    }

    this.mesh.position.x = Math.max(-wallX, Math.min(wallX, this.mesh.position.x));
    this.mesh.position.z = Math.max(-wallZ, Math.min(wallZ, this.mesh.position.z));

    // WALL SPLAT CHECK
    if ((Math.abs(this.mesh.position.x) >= wallX || Math.abs(this.mesh.position.z) >= wallZ) &&
      (this.state === FighterState.HIT || this.state === FighterState.STUNNED) &&
      this.stunDuration > 10 && !this.isGrounded) {

      // Only if hit hard enough? For now, any air hit at wall
      this.state = FighterState.WALL_SPLAT;
      this.stunDuration = 45; // Stick to wall
      this.velocity.set(0, 0, 0); // Stop momentum
      SoundManager.getInstance().playSFX('hit_heavy'); // Wall slam sound
    }

    // Pushbox Collision
    const diff = new THREE.Vector3().subVectors(this.mesh.position, opponent.mesh.position);
    diff.y = 0;
    const dist = diff.length();
    const minDist = 1.0;

    if (dist < minDist && dist > 0.001) {
      const overlap = minDist - dist;
      const pushDir = diff.normalize();
      this.mesh.position.add(pushDir.multiplyScalar(overlap * 0.5));
    }
  }

  // DEBUG: Force Execution Method


  isAttacking() {
    return this.state === FighterState.ATTACK_LP || this.state === FighterState.ATTACK_RP ||
      this.state === FighterState.ATTACK_LK || this.state === FighterState.ATTACK_RK ||
      this.state === FighterState.FORWARD_LP || this.state === FighterState.FORWARD_RP ||
      this.state === FighterState.FORWARD_LK || this.state === FighterState.FORWARD_RK ||
      this.state === FighterState.DOWN_LP || this.state === FighterState.DOWN_RP ||
      this.state === FighterState.DOWN_LK || this.state === FighterState.DOWN_RK ||
      this.state === FighterState.BACK_LP || this.state === FighterState.BACK_RP ||
      this.state === FighterState.BACK_LK || this.state === FighterState.BACK_RK ||
      this.state === FighterState.ATTACK_SPECIAL || this.state === FighterState.ATTACK_SPECIAL_2 || this.state === FighterState.ATTACK_SPECIAL_3 ||
      this.state === FighterState.ATTACK_THROW || this.state === FighterState.RAGE_ART ||
      this.state === FighterState.GOB_FIRE || this.state === FighterState.GOB_FINISH ||
      this.state === FighterState.UBW_TRACE || this.state === FighterState.UBW_RUSH_1 || this.state === FighterState.UBW_RUSH_2 || this.state === FighterState.UBW_RUSH_3 || this.state === FighterState.UBW_THROW;
  }

  handleVisuals() {
    // ... same ...
    const isHit = this.state === FighterState.HIT;
    const isRage = this.hp < 30; // RAGE MODE

    if (this.bodyParts.meshTorso) {
      const mat = this.bodyParts.meshTorso.material as THREE.MeshStandardMaterial;
      if (mat.emissive) {
        if (isHit && this.flashTimer > 0) mat.emissive.setHex(0xFF0000);
        else if (this.state === FighterState.GOB_STANCE) mat.emissive.setHex(0xFFD700).multiplyScalar(0.5); // Gold
        else if (this.state === FighterState.UBW_TRACE || this.state === FighterState.UBW_RUSH_3) mat.emissive.setHex(0x00FFFF).multiplyScalar(0.5); // Cyan
        else if (isRage) mat.emissive.setHex(0xFF0000).multiplyScalar(0.5); // Red Aura
        else mat.emissive.setHex(this.characterType === 'GILGAMESH' ? 0x332200 : 0x000000);
      }
    }
    if (this.flashTimer > 0) this.flashTimer--;
  }

  // --- PROJECTILE SYSTEM ---
  spawnProjectile(opponent: Fighter, type: 'GOB_SWORD' | 'UBW_SWORD') {
    const origin = this.mesh.position.clone().add(new THREE.Vector3(0, 3, 0)); // Start high
    const target = opponent.mesh.position.clone().add(new THREE.Vector3(0, 2, 0)); // Aim at chest
    const dir = new THREE.Vector3().subVectors(target, origin).normalize();

    // Create Mesh
    let geo, mat;
    if (type === 'GOB_SWORD') {
      geo = new THREE.ConeGeometry(0.2, 2, 8);
      geo.rotateX(-Math.PI / 2); // Point forward
      mat = new THREE.MeshStandardMaterial({ color: 0xFFD700, emissive: 0xFFAA00, metalness: 1.0, roughness: 0.2 });
    } else {
      geo = new THREE.BoxGeometry(0.2, 0.1, 2);
      mat = new THREE.MeshStandardMaterial({ color: 0x00FFFF, emissive: 0x0088FF, metalness: 0.8, roughness: 0.2 });
    }

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(origin);
    mesh.lookAt(target); // Point at target

    if (this.mesh.parent) {
      this.mesh.parent.add(mesh);
    }

    const velocity = dir.multiplyScalar(40.0); // Fast projectile check unit? 40 m/s?

    this.projectiles.push({
      mesh,
      velocity,
      owner: this,
      active: true,
      damage: 15,
      lifetime: 3.0 // 3 seconds
    });

    SoundManager.getInstance().playSFX('woosh');
  }

  updateProjectiles(dt: number, opponent: Fighter) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      if (!p.active) continue;

      // Move
      p.mesh.position.add(p.velocity.clone().multiplyScalar(dt));
      p.lifetime -= dt;

      // Collision Check
      const distSq = p.mesh.position.distanceToSquared(opponent.mesh.position);
      if (distSq < 2.0 * 2.0) { // Hitbox size
        // Hit!
        const projMove: any = {
          startup: 0, active: 1, recovery: 0,
          damage: p.damage, stun: 20, knockback: 1.0, blockStun: 10, hitLevel: 'mid'
        };

        // Check if blocked
        const isBlocking = opponent.state === FighterState.BLOCK || opponent.state === FighterState.WALK_BACK;

        if (isBlocking) {
          opponent.state = FighterState.BLOCK;
          opponent.stunDuration = projMove.blockStun;
          SoundManager.getInstance().playSFX('block');
          opponent.hp -= p.damage * 0.2;
        } else {
          opponent.state = FighterState.HIT;
          opponent.stunDuration = projMove.stun;
          opponent.hp -= p.damage;
          SoundManager.getInstance().playSFX('hit_light');
          const push = p.velocity.clone().normalize().multiplyScalar(projMove.knockback);
          push.y = 0;
          opponent.velocity.add(push);
        }

        // Destroy
        this.destroyProjectile(i);
        continue;
      }

      // Ground/Wall/Timeout
      if (p.lifetime <= 0 || p.mesh.position.y < 0) {
        this.destroyProjectile(i);
      }
    }
  }

  destroyProjectile(index: number) {
    const p = this.projectiles[index];
    if (p.mesh.parent) p.mesh.parent.remove(p.mesh);
    this.projectiles.splice(index, 1);
  }

  handleSkills(input: InputHandler): boolean {
    if (this.specialCooldown > 0) return false;

    // GILGAMESH: KEY E -> GOB MODE
    if (this.characterType === 'GILGAMESH') {
      if (input.keys['KeyE'] && !this.prevKeys['KeyE']) {
        if (this.state === FighterState.GOB_STANCE) {
          this.attack(FighterState.GOB_FINISH); // Trigger Finisher
        } else {
          this.attack(FighterState.GOB_STANCE); // Enter Stance
        }
        return true;
      }

      // Inside Stance: Fire
      if (this.state === FighterState.GOB_STANCE) {
        if ((input.keys['KeyF'] && !this.prevKeys['KeyF']) ||
          (input.keys['KeyJ'] && !this.prevKeys['KeyJ']) ||
          input.mouseLeft) {
          this.attack(FighterState.GOB_FIRE);
          return true;
        }
      }
    }

    // ARCHER: KEY E -> UBW TRACE
    if (this.characterType === 'ARCHER') {
      if (input.keys['KeyE'] && !this.prevKeys['KeyE']) {
        this.attack(FighterState.UBW_TRACE);
        return true;
      }

      // UBW COMBO CHAIN (Simple Cancel Logic)
      if (this.isAttacking()) {
        const move = MOVE_LIST[this.state];
        // If in recovery or active, allow chain
        if (move && move.nextMoves && input.keys['KeyE'] && !this.prevKeys['KeyE']) {
          if (move.nextMoves['KeyE']) {
            this.attack(move.nextMoves['KeyE']);
            return true;
          }
        }
      }
    }

    // GENERIC FALLBACK (Q / U)
    if (input.keys['KeyQ'] && !this.prevKeys['KeyQ']) {
      this.attack(FighterState.ATTACK_SPECIAL_2);
      return true;
    }
    if (input.keys['KeyU'] && !this.prevKeys['KeyU']) {
      this.attack(FighterState.ATTACK_SPECIAL_3);
      return true;
    }

    return false;
  }


  updateAnimations(dt: number) {
    // Procedural Animation System with Phases
    // Dynamic Lerp Speed: Slow for Windup/Recovery, Fast for Strike
    let lerpSpeed = 10.0 * dt;

    // Reset Targets (Neutral Pose)
    const t = {
      hipsPos: { y: 0.85 },
      torsoRot: { x: 0, y: 0, z: 0 },
      headRot: { x: 0, y: 0 },
      armL: { x: 0, z: 0.3 },
      armR: { x: 0, z: -0.3 },
      elbowL: { x: 0 },
      elbowR: { x: 0 },
      legL: { x: 0, z: 0 },
      legR: { x: 0, z: 0 },
      kneeL: { x: 0 },
      kneeR: { x: 0 },
    };

    // --- IDLE / MOVEMENT (Secondary Motion) ---
    if (this.state === FighterState.IDLE || this.state === FighterState.WALK) {
      lerpSpeed = 8.0 * dt; // Smooth subtle movement

      // Breathing / Bobbing
      const breath = Math.sin(Date.now() / 300) * 0.015;
      const sway = Math.sin(Date.now() / 600) * 0.015;
      t.torsoRot.x = breath;
      t.hipsPos.y += sway;

      if (this.characterType === 'GILGAMESH') {
        // GILGAMESH: ARMS CROSSED (Haughty)
        t.torsoRot.y = -0.6 * this.facing;
        t.headRot.y = 0.6 * this.facing;
        t.headRot.x = -0.3 + breath; // Chin up

        // Arms Crossed
        t.armL.x = -0.9; t.armL.z = 0.8; t.elbowL.x = -1.9;
        t.armR.x = -0.9; t.armR.z = -0.8; t.elbowR.x = -1.9;

        // Slight Float
        t.hipsPos.y = 0.92 + Math.sin(Date.now() / 800) * 0.02;
      } else {
        // ARCHER: DUAL WIELD STANCE
        t.hipsPos.y = 0.80 + sway;
        t.torsoRot.y = 0.5 * this.facing;
        t.headRot.y = -0.5 * this.facing;

        // Legs wide
        t.legL.z = -0.3; t.legL.x = -0.2;
        t.legR.z = 0.3; t.legR.x = 0.2;

        // Arms (Kanshou Front, Bakuya Back)
        t.armL.x = -0.6; t.armL.z = 0.6; t.elbowL.x = -1.5;
        t.armR.x = -0.3; t.armR.z = -0.4; t.elbowR.x = -1.8;
      }
    }
    // STANCE POSE (Gilgamesh)
    else if (this.state === FighterState.GOB_STANCE) {
      lerpSpeed = 15.0 * dt;
      t.armR.z = -2.5; // Hand Up High
      t.armR.x = 0.5;
      t.torsoRot.y = -0.5 * this.facing; // Slight turn
      t.headRot.x = -0.2; // Look up arrogance
    }
    else if (this.state === FighterState.STANCE_HEAVEN) {
      lerpSpeed = 10.0 * dt;
      if (this.characterType === 'GILGAMESH') {
        t.hipsPos.y = 0.9;
        t.torsoRot.x = -0.5; // Lean back
        t.headRot.x = 0.8; // Look up
        t.armL.x = -0.5; t.armL.z = 1.5; t.elbowL.x = -0.5; // Arms wide
        t.armR.x = -0.5; t.armR.z = -1.5; t.elbowR.x = -0.5;
      } else {
        t.hipsPos.y = 0.8;
        t.torsoRot.x = 0.2;
        t.headRot.x = -0.2;
        t.armL.x = -1.0; t.armL.z = 0.8; t.elbowL.x = -1.0; // Arms crossed
        t.armR.x = -1.0; t.armR.z = -0.8; t.elbowR.x = -1.0;
      }
    }
    else if (this.state === FighterState.WALK_FORWARD) {
      lerpSpeed = 12.0 * dt;
      if (this.characterType === 'GILGAMESH') {
        // Gilgamesh Walk (Crossed Arms)
        const w = Date.now() / 200;
        t.torsoRot.y = -0.5 * this.facing;
        t.headRot.y = 0.5 * this.facing;
        t.headRot.x = -0.15;
        t.armL.x = -0.9; t.armL.z = 0.8; t.elbowL.x = -1.9;
        t.armR.x = -0.9; t.armR.z = -0.8; t.elbowR.x = -1.9;
        t.legL.x = Math.sin(w) * 0.3;
        t.legR.x = Math.sin(w + Math.PI) * 0.3;
        t.kneeL.x = (Math.sin(w) > 0) ? -0.3 : 0;
        t.kneeR.x = (Math.sin(w + Math.PI) > 0) ? -0.3 : 0;
        t.hipsPos.y = 0.9 + Math.abs(Math.cos(w)) * 0.02;
      } else {
        // Archer Run
        const w = Date.now() / 120;
        t.torsoRot.x = 0.4;
        t.headRot.x = -0.4;
        t.legL.x = Math.sin(w) * 0.8;
        t.legR.x = Math.sin(w + Math.PI) * 0.8;
        t.kneeL.x = Math.abs(Math.sin(w)) * -1.2;
        t.kneeR.x = Math.abs(Math.sin(w + Math.PI)) * -1.2;
        t.armL.x = -0.5; t.armL.z = 0.5; t.elbowL.x = -1.5;
        t.armR.x = -1.0; t.armR.z = -0.5; t.elbowR.x = -1.5;
      }
    }
    else if (this.state === FighterState.WALK_BACK) {
      if (this.characterType === 'GILGAMESH') {
        t.torsoRot.y = -0.6 * this.facing;
        t.headRot.y = 0.6 * this.facing;
        t.armL.x = -0.9; t.armL.z = 0.8; t.elbowL.x = -1.9;
        t.armR.x = -0.9; t.armR.z = -0.8; t.elbowR.x = -1.9;
        const w = Date.now() / 250;
        t.legL.x = Math.sin(w) * 0.2;
        t.legR.x = Math.sin(w + Math.PI) * 0.2;
        t.hipsPos.y = 0.9;
      } else {
        t.torsoRot.y = 0.5 * this.facing;
        const w = Date.now() / 200;
        t.legL.x = Math.sin(w) * 0.3;
        t.legR.x = Math.sin(w + Math.PI) * 0.3;
        t.armL.x = -0.6; t.armL.z = 0.6; t.elbowL.x = -1.5;
        t.armR.x = -0.3; t.armR.z = -0.4; t.elbowR.x = -1.8;
      }
    }
    else if (this.state === FighterState.SIDESTEP_LEFT) {
      lerpSpeed = 15.0 * dt;
      t.torsoRot.z = 0.3;
      t.legL.z = -0.5; t.legL.x = 0.3;
      t.legR.z = 0.2;
      t.hipsPos.y = 0.8;
      t.armL.x = -0.8; t.armR.x = -0.8;
    }
    else if (this.state === FighterState.SIDESTEP_RIGHT) {
      lerpSpeed = 15.0 * dt;
      t.torsoRot.z = -0.3;
      t.legR.z = 0.5; t.legR.x = 0.3;
      t.legL.z = -0.2;
      t.hipsPos.y = 0.8;
      t.armL.x = -0.8; t.armR.x = -0.8;
    }

    // --- PHASED ATTACK LOGIC ---
    else if (this.isAttacking()) {
      const move = MOVE_LIST[this.state];
      if (move) {
        const startup = move.startup;
        const active = move.active;
        const timer = this.stateTimer;

        // PHASE DETERMINATION
        let phase: 'windup' | 'active' | 'recovery' = 'recovery';
        if (timer < startup) phase = 'windup';
        else if (timer < startup + active) phase = 'active';

        // DYNAMIC LERP SPEEDS
        if (phase === 'windup') lerpSpeed = 12.0 * dt; // Anticipation
        else if (phase === 'active') lerpSpeed = 35.0 * dt; // SNAP (Smoother)
        else lerpSpeed = 6.0 * dt; // Recovery

        // --- ATTACK: PUNCH ---
        if (this.state === FighterState.ATTACK_LP || this.state === FighterState.ATTACK_RP) {
          if (phase === 'windup') {
            t.torsoRot.y = 0.5 * this.facing; // Windup twist
            if (this.characterType === 'GILGAMESH') {
              t.armR.x = -0.5; // Slight raise
            } else {
              t.armL.x = -0.5; t.armL.z = 1.0; t.elbowL.x = -2.0; // Pull back
            }
          } else {
            // ACTIVE & RECOVERY (Hold the pose, let lerp settle it back during recovery)
            if (this.characterType === 'GILGAMESH') {
              t.torsoRot.y = -0.3 * this.facing;
              t.armR.x = -1.6; t.armR.z = 0.0; t.elbowR.x = 0; // Point
              t.armL.x = -0.9; t.armL.z = 0.8; t.elbowL.x = -1.9; // Other arm calm
            } else {
              t.torsoRot.y = -0.8 * this.facing;
              t.armL.x = -1.5; t.armL.z = 0.8; t.elbowL.x = -0.5; // Slash
              t.armR.x = -0.5; t.armR.z = -0.5; // Guard
            }
          }
        }
        // --- ATTACK: KICK ---
        else if (this.state === FighterState.ATTACK_LK || this.state === FighterState.ATTACK_RK) {
          if (phase === 'windup') {
            t.torsoRot.y = -0.2 * this.facing;
            t.legR.x = -1.0; t.kneeR.x = -2.0; // High Chamber
          } else {
            t.torsoRot.y = -0.8 * this.facing;
            t.legR.x = -1.6; t.legR.z = 0.0; t.kneeR.x = -0.1; // Extend
            t.armL.x = -0.8; t.armR.x = -0.8; // Guard
          }
        }
        // --- ATTACK: SPECIAL (E) ---
        else if (this.state === FighterState.ATTACK_SPECIAL) {
          if (this.characterType === 'GILGAMESH') {
            // Gate Barrage
            if (phase === 'windup') {
              t.torsoRot.y = 0;
              t.armR.x = -0.8; t.armR.z = 0.5; // Prepare
            } else {
              t.torsoRot.y = -0.3 * this.facing;
              t.armR.x = -1.6; t.armR.z = 0.0; t.elbowR.x = -0.1; // Command
            }
          } else {
            // Twin Throw
            if (phase === 'windup') {
              t.torsoRot.y = -0.5 * this.facing; // Windup back
              t.armL.x = -1.0; t.armR.x = -1.0;
            } else {
              t.torsoRot.y = 1.5 * this.facing; // Big spin throw
              t.armL.x = -1.8; t.armL.z = 1.0;
              t.armR.x = -1.8; t.armR.z = -1.0;
            }
          }
        }
        // --- ATTACK: SPECIAL 2 (Q) ---
        else if (this.state === FighterState.ATTACK_SPECIAL_2) {
          if (this.characterType === 'GILGAMESH') {
            t.torsoRot.y = -0.5 * this.facing;
            t.armR.x = -1.7; t.armR.z = 0.2; t.elbowR.x = 0;
            t.armL.x = -0.5; t.armL.z = 0.5;
          } else {
            // Bow Aim
            t.torsoRot.y = -1.0 * this.facing;
            t.armL.x = -1.8; t.armL.z = 0;
            t.armR.x = -1.0; t.armR.z = 0.5; t.elbowR.x = -2.5; // Draw
            t.headRot.y = 1.0;
          }
        }
        // --- ATTACK: SPECIAL 3 (U) ---
        else if (this.state === FighterState.ATTACK_SPECIAL_3) {
          if (phase === 'windup') {
            t.hipsPos.y = 0.8;
            t.torsoRot.x = 0.2; // Crouch slightly
          } else {
            t.hipsPos.y = 0.95; // Rise
            t.torsoRot.y = 0;
            if (this.characterType === 'GILGAMESH') {
              t.armR.x = -3.0; t.armR.z = 0; t.headRot.x = -0.5; // Raise High
            } else {
              t.armR.x = -2.8; t.headRot.x = -0.3; // Snap
            }
          }
        }
        // --- THROW ---
        else if (this.state === FighterState.ATTACK_THROW) {
          if (phase === 'windup') {
            t.armL.x = -0.5; t.armR.x = -0.5; // Prepare
          } else {
            t.armL.x = -1.5; t.armR.x = -1.5; // Grab
            t.torsoRot.x = 0.3; // Lean In
          }
        }
        // --- RAGE ART ---
        else if (this.state === FighterState.RAGE_ART) {
          // Cinematic pose
          t.hipsPos.y = 0.5;
          t.torsoRot.x = 0.5;
          t.armL.x = -2.0; t.armR.x = -2.0; // Power up
          t.headRot.x = 0.5; // Look down
        }
        // --- ATTACK: LOW ---
        else if (this.state === FighterState.DOWN_RK || this.state === FighterState.DOWN_LP || this.state === FighterState.DOWN_LK || this.state === FighterState.DOWN_RP) {
          t.hipsPos.y = 0.55;
          t.torsoRot.x = 0.5;
          t.torsoRot.y = 0.5 * this.facing;
          t.armL.x = -0.6; t.armL.z = 0.8; t.elbowL.x = -2.2;
          t.armR.x = -0.6; t.armR.z = -0.5; t.elbowR.x = -2.0;
          t.legL.x = 1.0; t.legR.x = 1.0;
          t.kneeL.x = -2.0; t.kneeR.x = -2.0;
          // Sweep
          t.legR.x = 1.5;
          t.legR.z = 0.5;
        }
      }
    }
    // --- HIT RELACTIONS ---
    else if (this.state === FighterState.HIT) {
      lerpSpeed = 20.0 * dt;
      t.torsoRot.x = 0.5; // Reel back
      t.headRot.x = -0.5;
      t.armL.x = -1.5; t.armR.x = -1.5; // Arms flail
    }
    else if (this.state === FighterState.BLOCK) {
      t.torsoRot.y = 0.5 * this.facing;
      t.armL.x = -0.8; t.armL.z = 0.8; t.elbowL.x = -2.2;
      t.armR.x = -0.9; t.armR.z = -0.5; t.elbowR.x = -1.5;
    }
    else if (this.state === FighterState.BLOCK_LOW || this.state === FighterState.DUCK) {
      t.hipsPos.y = 0.55;
      t.torsoRot.x = 0.5;
      t.torsoRot.y = 0.5 * this.facing;
      t.armL.x = -0.6; t.armL.z = 0.8; t.elbowL.x = -2.2;
      t.armR.x = -0.6; t.armR.z = -0.5; t.elbowR.x = -2.0;
      t.legL.x = 1.0; t.legR.x = 1.0;
      t.kneeL.x = -2.0; t.kneeR.x = -2.0;
    }
    else if (this.state === FighterState.DEAD) {
      t.armL.x = -2.5; t.armR.x = -2.5;
    }

    // Apply
    const lerpRot = (o: THREE.Object3D, tx: number, ty: number, tz: number) => {
      o.rotation.x += (tx - o.rotation.x) * lerpSpeed;
      o.rotation.y += (ty - o.rotation.y) * lerpSpeed;
      o.rotation.z += (tz - o.rotation.z) * lerpSpeed;
    };

    lerpRot(this.bodyParts.torso, t.torsoRot.x, t.torsoRot.y, t.torsoRot.z);
    lerpRot(this.bodyParts.head, t.headRot.x, t.headRot.y, 0);
    lerpRot(this.bodyParts.armL, t.armL.x, 0, t.armL.z);
    lerpRot(this.bodyParts.armR, t.armR.x, 0, t.armR.z);
    lerpRot(this.bodyParts.elbowL, t.elbowL.x, 0, 0);
    lerpRot(this.bodyParts.elbowR, t.elbowR.x, 0, 0);
    lerpRot(this.bodyParts.legL, t.legL.x, 0, t.legL.z);
    lerpRot(this.bodyParts.legR, t.legR.x, 0, t.legR.z);
    lerpRot(this.bodyParts.kneeL, t.kneeL.x, 0, 0);
    lerpRot(this.bodyParts.kneeR, t.kneeR.x, 0, 0);

    this.bodyParts.hips.position.y += (t.hipsPos.y - this.bodyParts.hips.position.y) * lerpSpeed;
  }

  animateDead() {
    this.mesh.rotation.z = Math.PI / 2;
    this.mesh.position.y = 0.5;
  }

  setBuffer(move: FighterState) {
    this.inputBuffer = move;
    this.inputBufferTimer = 12; // 12 frames buffer window (generous)
  }
}