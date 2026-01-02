import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { PhysicsItem } from './PhysicsItem';
import { Portal } from './Portal';
// Removed unused icons

// --- Constants & Config ---
// Gate of Babylon Config
const GATE_CONFIG = {
    PROJECTILE_SPEED: 25,
    PROJECTILE_SPREAD: 150,
};

// --- Types ---
interface PhysicsContextType {
    engine: Matter.Engine | null;
}

const PhysicsContext = createContext<PhysicsContextType>({ engine: null });

export const usePhysics = () => useContext(PhysicsContext);

interface PhysicsWorldProps {
    children?: React.ReactNode;
    gravity?: { x: number; y: number };
    debug?: boolean;
    isRoomActive: boolean; // Controlled by App.tsx
    height?: number;
}

export const PhysicsWorld: React.FC<PhysicsWorldProps> = ({ children, gravity = { x: 0, y: 1 }, debug = false, isRoomActive, height: propHeight }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);

    // Refs for physics loop
    const activeRef = useRef(isRoomActive);
    const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const framesRef = useRef(0);
    const portalsRef = useRef<{ id: string; x: number; y: number; hasFired?: boolean; createdAt?: number }[]>([]); // Ref to track portals for physics loop access

    // Visual State
    // Visual State
    const [portals, setPortals] = useState<{ id: string; x: number; y: number; delay: number; scale: number; hasFired?: boolean; createdAt?: number }[]>([]);
    const [cracks, setCracks] = useState<Record<string, Array<{ x: number; y: number; rotation: number; scale: number; variant: number }>>>({});
    const [brokenItems, setBrokenItems] = useState<Set<string>>(new Set());

    // Refs for physics loop (Avoid State Closures)
    const cracksRef = useRef<Record<string, Array<{ x: number; y: number; rotation: number; scale: number; variant: number }>>>({});
    const brokenItemsRef = useRef<Set<string>>(new Set());

    // VFX Refs
    const trailsRef = useRef<{ id: string; positions: { x: number; y: number }[] }[]>([]);
    const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; life: number; color: string }[]>([]);

    // Screen Shake State
    const [shake, setShake] = useState({ x: 0, y: 0 });

    // Portal Logic: Initialize & Staggered Update
    useEffect(() => {
        activeRef.current = isRoomActive;
        let updateInterval: NodeJS.Timeout;

        if (isRoomActive) {
            // 1. Initialize Portals
            const initialPortals = Array.from({ length: 15 }).map((_, i) => ({
                id: Math.random().toString(36),
                x: Math.random() * (window.innerWidth * 0.9) + window.innerWidth * 0.05,
                y: Math.random() * 150 + 200,
                delay: 0,
                scale: 1,
                hasFired: false,
                createdAt: Date.now()
            }));
            setPortals(initialPortals);
            portalsRef.current = initialPortals;

            // 2. Cycle One Portal (Non-Overlapping Logic)
            updateInterval = setInterval(() => {
                setPortals(prev => {
                    const next = [...prev];
                    const idx = Math.floor(Math.random() * next.length);

                    // Attempt to find non-overlapping position
                    let newX = 0, newY = 0;
                    let valid = false;
                    let attempts = 0;

                    while (!valid && attempts < 10) {
                        newX = Math.random() * (window.innerWidth * 0.9) + window.innerWidth * 0.05;
                        newY = Math.random() * 150 + 200;
                        valid = true;

                        // Check collision with others
                        for (let i = 0; i < next.length; i++) {
                            if (i !== idx) {
                                const dx = next[i].x - newX;
                                const dy = next[i].y - newY;
                                const dist = Math.sqrt(dx * dx + dy * dy);
                                if (dist < 80) { // 80px min distance
                                    valid = false;
                                    break;
                                }
                            }
                        }
                        attempts++;
                    }

                    next[idx] = {
                        id: Math.random().toString(36),
                        x: newX,
                        y: newY,
                        delay: 0,
                        scale: Math.random() * 0.5 + 0.8,
                        hasFired: false, // Reset fire state
                        createdAt: Date.now() // Reset timestamp
                    };
                    portalsRef.current = next;
                    return next;
                });
            }, 100); // Slower cycle 100ms (Reduced from 50ms)

        } else {
            setPortals([]);
            portalsRef.current = [];
        }
        return () => clearInterval(updateInterval);
    }, [isRoomActive]);

    useEffect(() => {
        if (!containerRef.current || !canvasRef.current) return;

        // 1. Setup Matter.js Engine
        const engine = Matter.Engine.create({
            gravity: { x: gravity.x, y: gravity.y, scale: 0.001 },
        });
        engineRef.current = engine;

        const containerParams = containerRef.current.getBoundingClientRect();
        // Use provided height or fallback to clientHeight
        const worldHeight = propHeight || containerParams.height;
        const worldWidth = containerParams.width;

        const render = Matter.Render.create({
            element: containerRef.current,
            canvas: canvasRef.current,
            engine: engine,
            options: {
                width: worldWidth,
                height: worldHeight,
                wireframes: false,
                background: 'transparent',
            },
        });
        renderRef.current = render;

        // 2. Boundaries
        const ground = Matter.Bodies.rectangle(worldWidth / 2, worldHeight + 50, worldWidth, 100, { isStatic: true, label: 'ground', render: { fillStyle: 'transparent' } });
        const wallLeft = Matter.Bodies.rectangle(-50, worldHeight / 2, 100, worldHeight, { isStatic: true, label: 'wall' });
        const wallRight = Matter.Bodies.rectangle(worldWidth + 50, worldHeight / 2, 100, worldHeight, { isStatic: true, label: 'wall' });

        Matter.Composite.add(engine.world, [ground, wallLeft, wallRight]);

        // 3. Input Handling
        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.1,
                render: { visible: false },
            }
        });
        Matter.Composite.add(engine.world, mouseConstraint);

        // Track mouse globally
        const handleMouseMove = (e: MouseEvent) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (rect) {
                mouseRef.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                };
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        // 4. Game Loop (Trigger Firing from Portals)
        Matter.Events.on(engine, 'beforeUpdate', () => {
            if (activeRef.current) {
                const now = Date.now();
                // Iterate through portals to check if they should fire
                portalsRef.current.forEach((portal: any) => {
                    // Fire delay: 300ms after spawn (allow animation to open)
                    if (!portal.hasFired && now - portal.createdAt > 300) {
                        spawnProjectileFromPortal(engine, portal);
                        portal.hasFired = true; // Mutate Ref directly for performance
                    }
                });
            }
        });

        // 5. Collision Events (Sticking Weapons)
        Matter.Events.on(engine, 'collisionStart', (event) => {
            event.pairs.forEach((pair) => {
                const { bodyA, bodyB } = pair;

                // Check if one is a projectile (handle compound bodies via parent)
                const isProjectileA = bodyA.label.startsWith('projectile_') || (bodyA.parent && bodyA.parent.label.startsWith('projectile_'));
                const isProjectileB = bodyB.label.startsWith('projectile_') || (bodyB.parent && bodyB.parent.label.startsWith('projectile_'));

                const projectile = isProjectileA ? (bodyA.parent || bodyA) : (isProjectileB ? (bodyB.parent || bodyB) : null);
                const other = isProjectileA ? (bodyB.parent || bodyB) : (bodyA.parent || bodyA);

                if (projectile && !projectile.isStatic) {
                    // Stick to walls/ground or other static objects
                    const isStaticTarget = other.isStatic || other.label === 'ground' || other.label === 'wall' ||
                        other.label.startsWith('link-') || other.label.startsWith('cat-') ||
                        other.label === 'search-bar' || other.label === 'navbar' || other.label === 'footer' ||
                        other.label === 'main-title' || other.label === 'add-button';

                    if (isStaticTarget) {
                        // Trigger Screen Shake on heavy impact
                        if (Math.random() > 0.7) {
                            const intensity = 4;
                            setShake({
                                x: (Math.random() - 0.5) * intensity,
                                y: (Math.random() - 0.5) * intensity
                            });
                            setTimeout(() => setShake({ x: 0, y: 0 }), 50);
                        }

                        // FORCE ANGLE ALIGNMENT
                        // Must match the Visual Offset used in spawn (Math.PI / 4 + Math.PI)
                        const velocityAngle = Math.atan2(projectile.velocity.y, projectile.velocity.x);
                        Matter.Body.setAngle(projectile, velocityAngle + (Math.PI / 4 + Math.PI));

                        // FORCE STOP & STICK
                        Matter.Body.setVelocity(projectile, { x: 0, y: 0 });
                        Matter.Body.setAngularVelocity(projectile, 0);
                        Matter.Body.setStatic(projectile, true);

                        // Disable further collisions for this stuck projectile to prevent piling
                        projectile.collisionFilter = { ...projectile.collisionFilter, mask: 0 };

                        // Spawn Impact Sparks
                        const contact = pair.collision.supports[0] || projectile.position;
                        for (let i = 0; i < 8; i++) {
                            particlesRef.current.push({
                                x: contact.x,
                                y: contact.y,
                                vx: (Math.random() - 0.5) * 10,
                                vy: (Math.random() - 0.5) * 10,
                                life: 1.0,
                                color: '#FCD34D'
                            });
                        }

                        // Add Battle Damage (Crack)
                        // Only crack if we hit a "box" or "item" (not walls/ground) (Checked by 'other' var above)
                        if (!other.isStatic || other.label.startsWith('link-') || other.label.startsWith('cat-') ||
                            other.label === 'search-bar' || other.label === 'navbar' || other.label === 'footer' ||
                            other.label === 'main-title' || other.label === 'add-button') {
                            // Don't crack if already broken
                            if (brokenItemsRef.current.has(other.label)) return;

                            const relative = Matter.Vector.rotate(
                                Matter.Vector.sub(contact, other.position),
                                -other.angle
                            );

                            // Calculate new crack list using REF
                            const currentCracks = cracksRef.current[other.label] || [];
                            const newCracks = [
                                ...currentCracks,
                                {
                                    x: relative.x,
                                    y: relative.y,
                                    rotation: Math.random() * 360,
                                    scale: Math.random() * 0.5 + 0.5,
                                    variant: Math.floor(Math.random() * 3)
                                }
                            ];

                            // Update REF
                            cracksRef.current[other.label] = newCracks;

                            // Check Break Threshold (e.g., 50 Cracks)
                            if (newCracks.length >= 50) {
                                // DESTROY
                                brokenItemsRef.current.add(other.label);
                                setBrokenItems(new Set(brokenItemsRef.current));

                                // Spawn Debris
                                spawnDebris(other.position.x, other.position.y);

                                // Remove physics body from world
                                // The React component will unmount based on brokenItems state check
                            } else {
                                // Just add crack - Update State for Render
                                setCracks(prev => ({
                                    ...prev,
                                    [other.label]: newCracks
                                }));
                            }
                        }
                    }
                }
            });
        });

        const spawnDebris = (x: number, y: number) => {
            if (!engineRef.current) return;
            const debrisCount = 6;
            const shards: Matter.Body[] = [];

            for (let i = 0; i < debrisCount; i++) {
                const shard = Matter.Bodies.polygon(x, y, 3, Math.random() * 20 + 10, {
                    render: { fillStyle: '#334155' }, // Slate-700 color for generic debris
                    collisionFilter: { category: 0x0001 }, // Collide with default
                    restitution: 0.5
                });
                Matter.Body.setVelocity(shard, {
                    x: (Math.random() - 0.5) * 15,
                    y: (Math.random() - 0.5) * 15 - 5 // Slight upward pop
                });
                Matter.Body.setAngularVelocity(shard, Math.random() * 0.5);
                shards.push(shard);
            }

            Matter.Composite.add(engineRef.current.world, shards);

            // Remove debris after 3 seconds
            setTimeout(() => {
                if (engineRef.current) Matter.Composite.remove(engineRef.current.world, shards);
            }, 3000);
        };


        // 6. Custom VFX Render Loop
        Matter.Events.on(render, 'afterRender', () => {
            const ctx = render.context;

            // Draw Trails
            ctx.globalCompositeOperation = 'lighter'; // Additive blending for glow
            trailsRef.current.forEach(trail => {
                // Update positions: Find body
                const body = Matter.Composite.allBodies(engine.world).find(b => b.label === trail.id);
                if (body && !body.isStatic) {
                    trail.positions.unshift({ ...body.position });
                    if (trail.positions.length > 20) trail.positions.pop();
                } else if (body && body.isStatic) {
                    // Fade out trail if static
                    trail.positions.pop();
                }

                // Render Trail
                if (trail.positions.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(trail.positions[0].x, trail.positions[0].y);
                    for (let i = 1; i < trail.positions.length; i++) {
                        ctx.lineTo(trail.positions[i].x, trail.positions[i].y);
                    }
                    ctx.strokeStyle = `rgba(251, 191, 36, 0.4)`;
                    ctx.lineWidth = 4;
                    ctx.lineCap = 'round';
                    ctx.stroke();
                }
            });

            // Draw Particles
            particlesRef.current.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.05;
                p.vy += 0.5; // Gravity

                if (p.life > 0) {
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = p.life;
                    ctx.fillRect(p.x, p.y, 4, 4);
                    ctx.globalAlpha = 1;
                }
            });
            // Cleanup dead particles
            particlesRef.current = particlesRef.current.filter(p => p.life > 0);

            ctx.globalCompositeOperation = 'source-over';
        });

        // Run interactively
        const runner = Matter.Runner.create();
        runnerRef.current = runner;
        Matter.Runner.run(runner, engine);
        Matter.Render.run(render);

        return () => {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
            if (engineRef.current) Matter.Engine.clear(engineRef.current);
        };
    }, [propHeight]);


    // --- Interaction Handlers ---

    const spawnProjectileFromPortal = (engine: Matter.Engine, source: any) => {
        const target = mouseRef.current;
        const startX = source.x;
        const startY = source.y;

        // Calculate angle with SPREAD for organic distribution
        const baseAngle = Math.atan2(target.y - startY, target.x - startX);
        const spread = (Math.random() - 0.5) * 0.1; // Reduced spread
        const angle = baseAngle + spread;
        const speed = 40;

        // Helper to get correct path with base url
        const getAssetPath = (path: string) => {
            const base = import.meta.env.BASE_URL;
            const activeBase = base === '/' ? '' : base;
            return `${activeBase}${path}`;
        };

        // --- Weapon Variety (SINGLE SWORD MODE) ---
        let w = 30, h = 8; // Halved size (was 60, 15)
        let spriteScale = { x: 0.125, y: 0.125 }; // Halved scale (was 0.25)
        let texture = getAssetPath('/gate_of_babylon_sword.png');
        let weaponOptions: any = { density: 0.8, frictionAir: 0.001 };
        let visualOffset = Math.PI / 4 + Math.PI; // Rotated 180 degrees per request

        const commonOptions = {
            label: `projectile_${Date.now()}_${Math.random()}`,
            restitution: 0.1,
            collisionFilter: { category: 0x0002, mask: 0x0001 },
            render: {
                sprite: {
                    texture: texture,
                    xScale: spriteScale.x,
                    yScale: spriteScale.y
                }
            },
            ...weaponOptions
        };

        const weapon = Matter.Bodies.rectangle(startX, startY, w, h, commonOptions);

        // Align Angle
        let connectionAngle = angle;
        Matter.Body.setAngle(weapon, connectionAngle + visualOffset);

        Matter.Body.setVelocity(weapon, {
            x: Math.cos(angle) * 50, // High velocity
            y: Math.sin(angle) * 50
        });

        Matter.Composite.add(engine.world, weapon);

        // Register trail
        trailsRef.current.push({ id: weapon.label, positions: [] });

        // Trigger small shake on spawn
        if (Math.random() > 0.8) {
            setShake({
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2
            });
            setTimeout(() => setShake({ x: 0, y: 0 }), 30);
        }

        setTimeout(() => {
            if (engine.world) {
                Matter.Composite.remove(engine.world, weapon);
                trailsRef.current = trailsRef.current.filter(t => t.id !== weapon.label);
            }
        }, 5000);
    };


    return (
        <PhysicsContext.Provider value={{ engine: engineRef.current }}>
            <div
                ref={containerRef}
                className="relative w-full overflow-hidden select-none transition-all duration-100"
                style={{
                    height: propHeight || '100%',
                    transform: `translate(${shake.x}px, ${shake.y}px)` // Apply Screen Shake
                }}
            >
                <canvas ref={canvasRef} className="absolute inset-0 z-[25] pointer-events-none" />

                {/* VISUALS: Gate of Babylon Portals */}
                {portals.map((portal) => (
                    <Portal key={portal.id} x={portal.x} y={portal.y} scale={portal.scale || 1} />
                ))}

                {/* Children (Physics Items) */}
                <div className="relative z-30 pointer-events-auto">
                    {React.Children.map(children, (child) => {
                        if (React.isValidElement(child)) {
                            // @ts-ignore - Check if it has an id prop
                            const childId = child.props.id;
                            if (childId) {
                                if (brokenItems.has(childId)) return null; // Don't render broken items
                                // @ts-ignore
                                return React.cloneElement(child, { cracks: cracks[childId] || [] });
                            }
                        }
                        return child;
                    })}
                </div>
            </div>
        </PhysicsContext.Provider >
    );
};
