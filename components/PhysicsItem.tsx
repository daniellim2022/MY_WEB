import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { usePhysics } from './PhysicsWorld';

interface PhysicsItemProps {
    children: React.ReactNode;
    id: string; // Unique ID for tracking
    x: number;
    y: number;
    width?: number; // Optional: if not provided, we try to measure ref
    height?: number;
    isStatic?: boolean;
    className?: string;
    restitution?: number; // Bounciness
    friction?: number;
    density?: number;
    // If true, the body shape is a circle
    isCircle?: boolean;
    // Elastic String Interaction
    isElastic?: boolean;
    initialX?: number;
    initialY?: number;
    frictionAir?: number;
    cracks?: Array<{ x: number; y: number; rotation: number; scale: number; variant: number }>;
}

const CRACK_VARIANTS = [
    "M10,10 L30,30 L50,20 L70,40 L90,30",
    "M20,10 L40,40 L20,70 M40,40 L60,30",
    "M50,50 L20,20 M50,50 L80,20 M50,50 L20,80 M50,50 L80,80",
];

export const PhysicsItem: React.FC<PhysicsItemProps> = ({
    children,
    id,
    x,
    y,
    width: initialWidth,
    height: initialHeight,
    isStatic = false,
    className = '',
    restitution = 0.5,
    friction = 0.1,
    density = 0.001,
    isCircle = false,
    isElastic = false,
    frictionAir = 0.01, // Matter js default
    cracks = []
}) => {
    const { engine } = usePhysics() || {};
    const elementRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<Matter.Body | null>(null);
    const constraintRef = useRef<Matter.Constraint | null>(null);
    const [dimensions, setDimensions] = useState({ width: initialWidth || 0, height: initialHeight || 0 });

    // Measure dimensions if not provided
    useEffect(() => {
        if (elementRef.current && (dimensions.width === 0 || dimensions.height === 0)) {
            const rect = elementRef.current.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                setDimensions({ width: rect.width, height: rect.height });
            }
        }
    }, [children]);

    useEffect(() => {
        if (!engine || dimensions.width === 0) return;

        const commonOptions = {
            isStatic: isStatic && !isElastic,
            restitution,
            friction,
            frictionAir,
            density,
            label: id,
            render: { visible: false } // Hide Matter.js debug body
        };

        let body: Matter.Body;
        if (isCircle) {
            body = Matter.Bodies.circle(x, y, dimensions.width / 2, commonOptions);
        } else {
            body = Matter.Bodies.rectangle(x, y, dimensions.width, dimensions.height, commonOptions);
        }

        bodyRef.current = body;
        Matter.Composite.add(engine.world, body);

        // Add Elastic Constraint
        if (isElastic) {
            const constraint = Matter.Constraint.create({
                pointA: { x: x, y: y },
                bodyB: body,
                pointB: { x: 0, y: 0 },
                stiffness: 0.1,
                damping: 0.05,
                length: 0,
                render: { visible: false }
            });
            Matter.Composite.add(engine.world, constraint);
            constraintRef.current = constraint;
        }

        const handleAfterUpdate = () => {
            // Sync DOM to Physics
            if (elementRef.current && bodyRef.current) {
                const { position, angle } = bodyRef.current;
                const xPos = position.x - dimensions.width / 2;
                const yPos = position.y - dimensions.height / 2;

                elementRef.current.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}rad)`;
            }
        };

        Matter.Events.on(engine, 'afterUpdate', handleAfterUpdate);

        return () => {
            Matter.Events.off(engine, 'afterUpdate', handleAfterUpdate);
            if (bodyRef.current) Matter.Composite.remove(engine.world, bodyRef.current);
            if (constraintRef.current) Matter.Composite.remove(engine.world, constraintRef.current);
            bodyRef.current = null;
            constraintRef.current = null;
        };
    }, [engine, dimensions.width, dimensions.height, isStatic, id, x, y, isElastic]);

    return (
        <div
            ref={elementRef}
            className={`absolute top-0 left-0 pointer-events-auto touch-none select-none ${className}`}
            style={{
                width: dimensions.width ? dimensions.width : 'auto',
                height: dimensions.height ? dimensions.height : 'auto',
                visibility: dimensions.width ? 'visible' : 'hidden'
            }}
        >
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, {
                        ref: (node: HTMLDivElement) => {
                            if (node && dimensions.width === 0) {
                                const rect = node.getBoundingClientRect();
                                setDimensions({ width: rect.width, height: rect.height });
                            }
                        }
                    });
                }
                return child;
            })}
            {dimensions.width === 0 && (
                <div className="absolute inset-0 pointer-events-none opacity-0" />
            )}

            {/* Cracks Overlay */}
            {cracks.map((crack, i) => (
                <div
                    key={i}
                    className="absolute pointer-events-none z-50 opacity-90 mix-blend-screen"
                    style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(${crack.x}px, ${crack.y}px) rotate(${crack.rotation}deg) scale(${crack.scale}) translate(-50%, -50%)`,
                        width: 100,
                        height: 100
                    }}
                >
                    <svg viewBox="0 0 100 100" fill="none" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                        <path d={CRACK_VARIANTS[crack.variant % CRACK_VARIANTS.length]} />
                    </svg>
                </div>
            ))}
        </div>
    );
};
