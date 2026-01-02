
import React, { useRef, useEffect, useState } from 'react';
import {
  Entity, EntityType, Particle, LevelConfig, CharacterType
} from '../types';
import {
  CANVAS_WIDTH, CANVAS_HEIGHT, GROUND_Y, GRAVITY,
  PLAYER_SPEED, JUMP_FORCE, SKILLS, CHARACTERS
} from '../constants';
import { audioService } from '../services/audio';
import HUD from './HUD';

interface EnhancedParticle extends Particle {
  type?: 'normal' | 'slash' | 'lava_drop' | 'lightning' | 'fire_arrow';
  angle?: number;
  length?: number;
}

// Fix for Error: Cannot find name 'GameProps'
interface GameProps {
  characterType: CharacterType;
  level: LevelConfig;
  onWin: () => void;
  onLose: (score: number) => void;
  onUpdateScore: (score: number) => void;
}

const Game: React.FC<GameProps> = ({ characterType, level, onWin, onLose, onUpdateScore }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(null);
  const charConfig = CHARACTERS[characterType];

  const playerRef = useRef<Entity>({
    id: 'player',
    type: EntityType.PLAYER,
    x: 150,
    y: GROUND_Y - 70,
    vx: 0,
    vy: 0,
    width: 45,
    height: 70,
    hp: 100,
    maxHp: 100,
    color: charConfig.color,
    active: true,
    facing: 1,
    cooldowns: {
      '1': 0, '2': 0, '3': 0, '4': 0, '5': 0,
      attack: 0, roll: 0
    },
    timer: 0
  });

  const soulEnergyRef = useRef(100);
  const [displayEnergy, setDisplayEnergy] = useState(100);
  const [activeSkillCallout, setActiveSkillCallout] = useState<string | null>(null);

  const entitiesRef = useRef<Entity[]>([]);
  const particlesRef = useRef<EnhancedParticle[]>([]);
  const keysRef = useRef<Record<string, boolean>>({});
  const scoreRef = useRef(0);
  const timeRef = useRef(0);
  const comboRef = useRef(1);
  const comboTimeoutRef = useRef(0);

  const cameraRef = useRef({
    x: 0,
    shake: 0,
    flash: 0,
    domainActive: 0,
    explosionEffect: 0,
    cinematicActive: 0,
    vignetteOpacity: 0,
    summonActive: 0,
    domainCenter: { x: 0, y: 0 },
    domainType: '' as string
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => keysRef.current[e.code] = true;
    const handleKeyUp = (e: KeyboardEvent) => keysRef.current[e.code] = false;
    const handleMouseDown = (e: MouseEvent) => {
      if (playerRef.current.active && playerRef.current.cooldowns!.attack <= 0 && !cameraRef.current.cinematicActive) {
        spawnPlayerProjectile();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousedown', handleMouseDown);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const spawnPlayerProjectile = () => {
    const p = playerRef.current;
    p.cooldowns!.attack = 160;
    entitiesRef.current.push({
      id: Math.random().toString(),
      type: EntityType.PROJECTILE_PLAYER,
      x: p.x + (p.facing * 30),
      y: p.y + 30,
      vx: p.facing * 18,
      vy: 0,
      width: 35,
      height: 6,
      hp: 1,
      maxHp: 1,
      color: charConfig.color,
      active: true,
      facing: p.facing
    });
    audioService.playJump();
  };

  const spawnParticles = (x: number, y: number, color: string, count: number = 10, speedMul: number = 1) => {
    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        id: Math.random().toString(),
        x, y,
        vx: (Math.random() - 0.5) * 18 * speedMul,
        vy: (Math.random() - 0.5) * 18 * speedMul,
        color, life: 1, maxLife: 1, size: Math.random() * 8 + 2,
        type: 'normal'
      });
    }
  };

  const spawnSlash = (x: number, y: number, color: string = '#ffffff') => {
    particlesRef.current.push({
      id: Math.random().toString(),
      x, y,
      vx: (Math.random() - 0.5) * 5,
      vy: (Math.random() - 0.5) * 5,
      color, life: 0.35, maxLife: 0.35,
      size: Math.random() * 100 + 60,
      type: 'slash',
      angle: Math.random() * Math.PI * 2
    });
  };

  const spawnLavaDrop = (x: number, y: number, isMeteor = true) => {
    particlesRef.current.push({
      id: Math.random().toString(),
      x, y,
      vx: isMeteor ? (Math.random() - 0.5) * 25 : (Math.random() - 0.5) * 15,
      vy: isMeteor ? -25 : -15,
      color: '#ffcc00', life: 2.5, maxLife: 2.5,
      size: Math.random() * 20 + 10,
      type: 'lava_drop'
    });
  };

  const spawnLightning = (x: number) => {
    particlesRef.current.push({
      id: Math.random().toString(),
      x, y: 0, vx: 0, vy: 0, color: '#00ccff', life: 0.5, maxLife: 0.5, size: x, type: 'lightning'
    });
  };

  // Fix for Error: Cannot find name 'spawnEntity'
  const spawnEntity = (type: EntityType) => {
    const camX = cameraRef.current.x;
    const entity: Entity = {
      id: Math.random().toString(),
      type,
      x: camX + CANVAS_WIDTH + 100,
      y: GROUND_Y - 80,
      vx: -3,
      vy: 0,
      width: 50,
      height: 80,
      hp: 100,
      maxHp: 100,
      color: '#ff0000',
      active: true,
      facing: -1,
      scoreValue: 200,
    };

    if (type === EntityType.SPIRIT_SHARD) {
      entity.color = '#00f7ff';
      entity.hp = 1;
      entity.scoreValue = 300;
      entity.y = GROUND_Y - 200 - Math.random() * 150;
      entity.vx = -5;
    } else if (type === EntityType.SHADOW_SOUL) {
      entity.color = '#8a2be2';
      entity.hp = 250;
      entity.scoreValue = 700;
    } else if (type === EntityType.SUMMON_MAHERA) {
      entity.x = playerRef.current.x + 150;
      entity.y = playerRef.current.y - 100;
      entity.hp = 999999;
      entity.color = '#00ffaa';
      entity.vx = 0;
      entity.specialEffect = 0;
    }

    entitiesRef.current.push(entity);
  };

  const triggerSkillCallout = (name: string) => {
    setActiveSkillCallout(name);
    setTimeout(() => setActiveSkillCallout(null), 2000);
  };

  const update = () => {
    const player = playerRef.current;
    if (!player.active) return;

    const inDomain = cameraRef.current.domainActive > 0;
    const isKentaroDomain = inDomain && cameraRef.current.domainType === 'GEGWAN';
    const isRinDomain = inDomain && cameraRef.current.domainType === 'DOMAIN';
    const isCinematic = cameraRef.current.cinematicActive > 0;

    let timeScale = isCinematic ? 0.05 : 1.0; // Slightly faster cinematic
    if (inDomain) timeScale = isKentaroDomain ? 0.75 : 0.85; // Much faster domain speed (was 0.45, 0.75)

    timeRef.current++;
    if (timeRef.current % 12 === 0 && soulEnergyRef.current < 100) {
      soulEnergyRef.current = Math.min(100, soulEnergyRef.current + 1);
      setDisplayEnergy(soulEnergyRef.current);
    }

    if (player.cooldowns) {
      Object.keys(player.cooldowns).forEach(k => {
        if (player.cooldowns![k] > 0) player.cooldowns![k] -= 16;
      });
    }

    if (!isCinematic) {
      // Basic Movement
      let speed = PLAYER_SPEED;
      if (player.state === 'rolling') speed *= 1.8;
      if (keysRef.current['KeyA'] || keysRef.current['ArrowLeft']) { player.vx = -speed; player.facing = -1; }
      else if (keysRef.current['KeyD'] || keysRef.current['ArrowRight']) { player.vx = speed; player.facing = 1; }
      else { player.vx *= 0.82; }
      if ((keysRef.current['KeyW'] || keysRef.current['ArrowUp']) && player.y >= GROUND_Y - player.height - 1) {
        player.vy = JUMP_FORCE; audioService.playJump();
      }
      if (keysRef.current['ShiftLeft'] && player.cooldowns!.roll <= 0) {
        player.state = 'rolling'; player.cooldowns!.roll = 700;
        spawnParticles(player.x, player.y + player.height / 2, '#ffffff', 8, 0.3);
        setTimeout(() => player.state = 'idle', 350);
      }

      // --- SKILL 1 (PIERCE) ---
      if (keysRef.current['Digit1'] && player.cooldowns!['1'] <= 0) {
        player.cooldowns!['1'] = SKILLS.PIERCE.cd;
        triggerSkillCallout(SKILLS.PIERCE.name);
        audioService.playSkill();
        entitiesRef.current.forEach(e => {
          if (e.type !== EntityType.PLAYER && e.type !== EntityType.SUMMON_MAHERA && Math.abs(e.x - (player.x + player.facing * 160)) < 220) {
            e.hp -= (isKentaroDomain ? 240 : 140); e.vx += player.facing * 25;
            spawnParticles(e.x, e.y, charConfig.color, 15);
          }
        });
        cameraRef.current.shake = 15;
      }

      // --- SKILL 2 (UNIQUE) ---
      if (keysRef.current['Digit2'] && player.cooldowns!['2'] <= 0) {
        const skillConfig = (characterType === 'RIN' ? SKILLS.RIN_FIRE : (characterType === 'REIKA' ? SKILLS.REIKA_NUE : SKILLS.KENTARO_VOLC));
        if (soulEnergyRef.current >= skillConfig.energyCost) {
          player.cooldowns!['2'] = skillConfig.cd;
          soulEnergyRef.current -= skillConfig.energyCost;
          setDisplayEnergy(soulEnergyRef.current);
          triggerSkillCallout(skillConfig.name);
          audioService.playExplosion();

          if (characterType === 'RIN') {
            // Fire Arrow: Massive Beam
            cameraRef.current.shake = 40;
            particlesRef.current.push({
              id: Math.random().toString(), x: player.x, y: player.y + 35,
              vx: player.facing * 30, vy: 0, color: '#ff6600', life: 1.5, maxLife: 1.5, size: 80, type: 'fire_arrow', angle: player.facing
            });
            entitiesRef.current.forEach(e => {
              if (e.type !== EntityType.PLAYER && Math.abs(e.y - player.y) < 100) {
                if ((player.facing > 0 && e.x > player.x) || (player.facing < 0 && e.x < player.x)) {
                  e.hp -= 350; e.vx += player.facing * 40; spawnParticles(e.x, e.y, '#ff4400', 20);
                }
              }
            });
          } else if (characterType === 'REIKA') {
            // Nue: Screen Lightning
            cameraRef.current.flash = 0.5;
            entitiesRef.current.forEach(e => {
              if (e.type !== EntityType.PLAYER && e.x > cameraRef.current.x && e.x < cameraRef.current.x + CANVAS_WIDTH) {
                spawnLightning(e.x); e.hp -= 200; e.vx = 0; spawnParticles(e.x, e.y, '#00ccff', 25);
              }
            });
          } else if (characterType === 'KENTARO') {
            // Disaster Flames: Ground Eruptions
            for (let i = 0; i < 3; i++) {
              setTimeout(() => {
                const ex = player.x + (i + 1) * 200 * player.facing;
                spawnLavaDrop(ex, GROUND_Y, false);
                cameraRef.current.shake = 20;
                entitiesRef.current.forEach(e => {
                  if (Math.abs(e.x - ex) < 150) { e.hp -= 250; e.vy -= 20; spawnParticles(ex, GROUND_Y, '#ff6600', 30); }
                });
              }, i * 150);
            }
          }
        }
      }

      // --- SKILL 3/5 (DOMAIN) ---
      if (characterType === 'RIN' && keysRef.current['Digit3'] && player.cooldowns!['3'] <= 0 && soulEnergyRef.current >= 100) {
        player.cooldowns!['3'] = SKILLS.DOMAIN.cd; soulEnergyRef.current = 0; setDisplayEnergy(0);
        triggerSkillCallout(SKILLS.DOMAIN.name);
        cameraRef.current.cinematicActive = 100; cameraRef.current.domainCenter = { x: player.x, y: player.y }; cameraRef.current.domainType = 'DOMAIN';
      }
      if (characterType === 'KENTARO' && keysRef.current['Digit5'] && player.cooldowns!['5'] <= 0 && soulEnergyRef.current >= 100) {
        player.cooldowns!['5'] = SKILLS.GEGWAN.cd; soulEnergyRef.current = 0; setDisplayEnergy(0);
        triggerSkillCallout(SKILLS.GEGWAN.name);
        cameraRef.current.cinematicActive = 120; cameraRef.current.domainCenter = { x: player.x, y: player.y }; cameraRef.current.domainType = 'GEGWAN';
      }
      if (characterType === 'REIKA' && keysRef.current['Digit4'] && player.cooldowns!['4'] <= 0 && soulEnergyRef.current >= 100) {
        player.cooldowns!['4'] = SKILLS.SUMMON.cd; soulEnergyRef.current = 0; setDisplayEnergy(0);
        triggerSkillCallout(SKILLS.SUMMON.name); cameraRef.current.cinematicActive = 80;
      }
    }

    // World Logic
    player.vy += GRAVITY; player.x += player.vx; player.y += player.vy;
    if (player.y > GROUND_Y - player.height) { player.y = GROUND_Y - player.height; player.vy = 0; }
    cameraRef.current.x += (player.x - 400 - cameraRef.current.x) * 0.1;
    if (cameraRef.current.shake > 0) cameraRef.current.shake *= 0.92;
    if (cameraRef.current.flash > 0) cameraRef.current.flash -= 0.03;

    if (cameraRef.current.cinematicActive > 0) {
      cameraRef.current.cinematicActive--;
      if (cameraRef.current.cinematicActive === 0) {
        if (cameraRef.current.domainType === 'DOMAIN') cameraRef.current.domainActive = SKILLS.DOMAIN.duration;
        else if (cameraRef.current.domainType === 'GEGWAN') cameraRef.current.domainActive = SKILLS.GEGWAN.duration;
        else if (characterType === 'REIKA') { spawnEntity(EntityType.SUMMON_MAHERA); cameraRef.current.summonActive = SKILLS.SUMMON.duration; }
        cameraRef.current.flash = 1.0;
      }
    }

    if (cameraRef.current.domainActive > 0) {
      cameraRef.current.domainActive--;
      const dc = cameraRef.current.domainCenter;
      if (isRinDomain && timeRef.current % 2 === 0) {
        entitiesRef.current.forEach(e => {
          if (e.type !== EntityType.PLAYER && Math.abs(e.x - dc.x) < 900) {
            e.hp -= 22; spawnSlash(e.x + (Math.random() - 0.5) * e.width, e.y + Math.random() * e.height, '#ffffff');
            spawnSlash(e.x + (Math.random() - 0.5) * e.width, e.y + Math.random() * e.height, '#ff0033');
          }
        });
        cameraRef.current.shake = 15;
      }
      if (isKentaroDomain) {
        if (timeRef.current % 12 === 0) spawnLavaDrop(dc.x + (Math.random() - 0.5) * 150, GROUND_Y - 450);
        entitiesRef.current.forEach(e => {
          if (e.type !== EntityType.PLAYER && Math.abs(e.x - dc.x) < 900) {
            e.hp -= 18; e.vx += (dc.x - e.x) * 0.04; // Pull effect
            if (timeRef.current % 10 === 0) spawnParticles(e.x, e.y, '#ff4400', 3, 0.2);
          }
        });
        cameraRef.current.shake = 8;
      }
    }

    // Entity & Particle Update
    entitiesRef.current.forEach(e => {
      const moveScale = (e.type === EntityType.SUMMON_MAHERA) ? 1.0 : timeScale;
      e.x += e.vx * moveScale; e.y += e.vy * moveScale;

      // Mahera behavior: follow player and update special effect for rotation
      if (e.type === EntityType.SUMMON_MAHERA) {
        e.specialEffect = (e.specialEffect || 0) + 0.15; // Faster wheel spin
        e.x += (player.x + (player.facing * -100) - e.x) * 0.1; // Float behind player
        e.y += (player.y - 120 - e.y) * 0.1;

        // Adaptation Attack: Auto-slash nearby enemies (optimized frequency)
        if (timeRef.current % 45 === 0) {
          const target = entitiesRef.current.find(target =>
            target.active &&
            target.type !== EntityType.PLAYER &&
            target.type !== EntityType.SUMMON_MAHERA &&
            Math.abs(target.x - e.x) < 550
          );

          if (target) {
            target.hp -= 350;
            spawnSlash(target.x, target.y, '#ffffff');
            spawnSlash(target.x, target.y, '#d4af37');
            cameraRef.current.shake = 10;
          }
        }
      }

      if (e.type === EntityType.SHADOW_SOUL || e.type === EntityType.SOUL_LORD) {
        const dist = player.x - e.x; if (Math.abs(dist) < 1000) e.vx = (dist > 0 ? 1 : -1) * 2.5;
      }
      if (Math.abs(player.x - e.x) < (player.width + e.width) / 2 && Math.abs(player.y - e.y) < (player.height + e.height) / 2 && player.state !== 'rolling') {
        if (e.type === EntityType.ITEM_HEALTH) { player.hp = Math.min(100, player.hp + 40); e.active = false; }
        else if (e.type !== EntityType.PROJECTILE_PLAYER && e.type !== EntityType.SUMMON_MAHERA) {
          // Adaptation: No damage while Mahoraga is active
          const mahoragaActive = cameraRef.current.summonActive > 0;
          if (!mahoragaActive) {
            player.hp -= (inDomain ? 0.3 : 1.2);
            cameraRef.current.shake = 10;
            if (player.hp <= 0) onLose(scoreRef.current);
          } else {
            // Visual feedback for adaptation
            spawnParticles(player.x, player.y, '#d4af37', 2, 0.5);
          }
        }
      }
      if (e.hp <= 0 && e.active) {
        e.active = false; scoreRef.current += (e.scoreValue || 200) * comboRef.current;
        comboRef.current = Math.min(20, comboRef.current + 1); comboTimeoutRef.current = 200;
        onUpdateScore(scoreRef.current); spawnParticles(e.x, e.y, e.color, 25, 1.8); audioService.playExplosion();
      }
    });

    particlesRef.current.forEach(p => {
      if (p.type === 'lava_drop') {
        p.vy += GRAVITY; p.x += p.vx; p.y += p.vy;
        if (p.y >= GROUND_Y) { p.life = 0; spawnParticles(p.x, GROUND_Y, '#ff3300', 10); cameraRef.current.shake = 5; }
      } else if (p.type === 'fire_arrow') {
        p.x += p.vx; spawnParticles(p.x, p.y, '#ff6600', 2); p.life -= 0.02;
      } else {
        p.x += p.vx; p.y += p.vy; p.life -= 0.025;
      }
    });

    entitiesRef.current = entitiesRef.current.filter(e => e.active);
    particlesRef.current = particlesRef.current.filter(p => p.life > 0);
    if (timeRef.current % 90 === 0 && !isCinematic) spawnEntity(Math.random() < 0.7 ? EntityType.SPIRIT_SHARD : EntityType.SHADOW_SOUL);
    if (scoreRef.current >= level.targetScore) onWin();
  };

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    const camX = cameraRef.current.x; const shake = (Math.random() - 0.5) * cameraRef.current.shake;
    const inDomain = cameraRef.current.domainActive > 0; const isKentaro = inDomain && cameraRef.current.domainType === 'GEGWAN';
    const isRin = inDomain && cameraRef.current.domainType === 'DOMAIN';
    const isCinematic = cameraRef.current.cinematicActive > 0;

    ctx.save(); ctx.translate(-camX + shake, shake);
    if (isCinematic) { ctx.translate(playerRef.current.x, playerRef.current.y); ctx.scale(1.3, 1.3); ctx.translate(-playerRef.current.x, -playerRef.current.y); }

    // Background & Ground
    ctx.fillStyle = inDomain ? (isKentaro ? '#220800' : '#110000') : level.theme; ctx.fillRect(camX - 300, 0, CANVAS_WIDTH + 600, CANVAS_HEIGHT);
    ctx.fillStyle = isKentaro ? '#441100' : '#050505'; ctx.fillRect(camX - 300, GROUND_Y, CANVAS_WIDTH + 600, CANVAS_HEIGHT - GROUND_Y);
    ctx.strokeStyle = inDomain ? (isKentaro ? '#ff6600' : '#ff0000') : charConfig.color; ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(camX - 300, GROUND_Y); ctx.lineTo(camX + CANVAS_WIDTH + 300, GROUND_Y); ctx.stroke();

    // DOMAIN STRUCTURES
    if (inDomain) {
      const dc = cameraRef.current.domainCenter;
      if (isRin) {
        // BEAST SHRINE
        ctx.save(); ctx.shadowBlur = 60; ctx.shadowColor = '#f00'; ctx.fillStyle = '#0a0a0a'; ctx.strokeStyle = '#f00'; ctx.lineWidth = 5;
        ctx.beginPath(); ctx.moveTo(dc.x - 200, GROUND_Y); ctx.lineTo(dc.x - 180, GROUND_Y - 350);
        ctx.bezierCurveTo(dc.x - 180, GROUND_Y - 500, dc.x + 180, GROUND_Y - 500, dc.x + 180, GROUND_Y - 350); ctx.lineTo(dc.x + 200, GROUND_Y); ctx.closePath(); ctx.fill(); ctx.stroke();
        const eg = Math.abs(Math.sin(timeRef.current * 0.15)); ctx.fillStyle = `rgba(255, 0, 0, ${0.3 + eg * 0.7})`;
        ctx.beginPath(); ctx.arc(dc.x - 75, GROUND_Y - 340, 35, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(dc.x + 75, GROUND_Y - 340, 35, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#000'; ctx.fillRect(dc.x - 140, GROUND_Y - 260, 280, 220); ctx.strokeRect(dc.x - 140, GROUND_Y - 260, 280, 220);
        ctx.fillStyle = '#fff'; for (let t = 0; t < 9; t++) { ctx.beginPath(); ctx.moveTo(dc.x - 130 + t * 32, GROUND_Y - 260); ctx.lineTo(dc.x - 114 + t * 32, GROUND_Y - 210); ctx.lineTo(dc.x - 98 + t * 32, GROUND_Y - 260); ctx.fill(); }
        for (let t = 0; t < 9; t++) { ctx.beginPath(); ctx.moveTo(dc.x - 130 + t * 32, GROUND_Y - 40); ctx.lineTo(dc.x - 114 + t * 32, GROUND_Y - 90); ctx.lineTo(dc.x - 98 + t * 32, GROUND_Y - 40); ctx.fill(); }
        ctx.restore();
      } else if (isKentaro) {
        // VOLCANO
        ctx.save(); ctx.shadowBlur = 70; ctx.shadowColor = '#f60'; ctx.fillStyle = '#1a0d00'; ctx.strokeStyle = '#f60'; ctx.lineWidth = 6;
        ctx.beginPath(); ctx.moveTo(dc.x - 150, GROUND_Y); ctx.lineTo(dc.x - 90, GROUND_Y - 450); ctx.lineTo(dc.x + 90, GROUND_Y - 450); ctx.lineTo(dc.x + 150, GROUND_Y); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#ffcc00'; ctx.beginPath(); ctx.ellipse(dc.x, GROUND_Y - 450, 70, 20, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      }
    }

    // Entities & Particles
    entitiesRef.current.forEach(e => {
      ctx.save(); ctx.shadowBlur = 25; ctx.shadowColor = e.color; ctx.fillStyle = e.color;
      if (e.type === EntityType.SUMMON_MAHERA) {
        // MAHORA VISUALS
        ctx.globalAlpha = 0.9;

        // Aura
        const auraScale = 1 + Math.sin(timeRef.current * 0.1) * 0.1;
        ctx.shadowBlur = 50; ctx.shadowColor = '#d4af37';
        ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
        ctx.beginPath(); ctx.ellipse(e.x, e.y + e.height / 2, e.width * 2 * auraScale, e.height * 1.5 * auraScale, 0, 0, Math.PI * 2); ctx.fill();

        // body (Shadowy Titan)
        ctx.fillStyle = '#f5f5f5'; // Pale white body
        ctx.fillRect(e.x - e.width / 2, e.y, e.width, e.height);
        ctx.fillStyle = '#333'; // Details
        ctx.fillRect(e.x - e.width / 2 + 5, e.y + 10, e.width - 10, 5);
        ctx.fillRect(e.x - e.width / 2 + 10, e.y + 25, e.width - 20, 2);

        // DHARMACHAKRA (Wheel)
        ctx.save();
        ctx.translate(e.x, e.y - 40);
        ctx.rotate(e.specialEffect || 0);

        // Outer Ring
        ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 8;
        ctx.beginPath(); ctx.arc(0, 0, 70, 0, Math.PI * 2); ctx.stroke();

        // Handles (8 handles)
        for (let i = 0; i < 8; i++) {
          ctx.rotate(Math.PI / 4);
          ctx.fillStyle = '#d4af37';
          ctx.fillRect(60, -5, 30, 10); // Handle
          ctx.beginPath(); ctx.arc(90, 0, 8, 0, Math.PI * 2); ctx.fill(); // Tip
        }

        // Spokes
        ctx.lineWidth = 4;
        for (let i = 0; i < 8; i++) {
          ctx.rotate(Math.PI / 4);
          ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(70, 0); ctx.stroke();
        }

        // Center
        ctx.beginPath(); ctx.arc(0, 0, 15, 0, Math.PI * 2); ctx.fill();
        ctx.stroke();

        ctx.restore();
      } else { ctx.fillRect(e.x - e.width / 2, e.y, e.width, e.height); }
      ctx.restore();
    });

    particlesRef.current.forEach(p => {
      ctx.save(); ctx.globalAlpha = p.life; ctx.fillStyle = p.color;
      if (p.type === 'slash') {
        ctx.strokeStyle = p.color; ctx.lineWidth = 6; ctx.beginPath();
        const l = p.size * p.life; ctx.moveTo(p.x - Math.cos(p.angle!) * l, p.y - Math.sin(p.angle!) * l);
        ctx.lineTo(p.x + Math.cos(p.angle!) * l, p.y + Math.sin(p.angle!) * l); ctx.stroke();
      } else if (p.type === 'lightning') {
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 15; ctx.beginPath(); ctx.moveTo(p.size, 0); ctx.lineTo(p.size, GROUND_Y); ctx.stroke();
        ctx.strokeStyle = p.color; ctx.lineWidth = 40; ctx.globalAlpha = p.life * 0.5; ctx.beginPath(); ctx.moveTo(p.size, 0); ctx.lineTo(p.size, GROUND_Y); ctx.stroke();
      } else if (p.type === 'fire_arrow') {
        ctx.shadowBlur = 40; ctx.shadowColor = '#f60'; ctx.fillRect(p.x - 60, p.y - 15, 120, 30);
      } else { ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
    });

    const pl = playerRef.current;
    if (pl.active) {
      ctx.save(); ctx.shadowBlur = 40; ctx.shadowColor = charConfig.color; ctx.fillStyle = (inDomain || isCinematic) ? '#fff' : charConfig.color;
      ctx.fillRect(pl.x - pl.width / 2, pl.y, pl.width, pl.height); ctx.restore();
    }
    ctx.restore();

    if (cameraRef.current.vignetteOpacity > 0) {
      const grad = ctx.createRadialGradient(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 100, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 1000);
      grad.addColorStop(0, 'rgba(0,0,0,0)'); grad.addColorStop(1, inDomain ? (isKentaro ? 'rgba(255,50,0,0.8)' : 'rgba(255,0,0,0.8)') : 'rgba(0,255,180,0.3)');
      ctx.fillStyle = grad; ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
    if (activeSkillCallout) {
      ctx.save(); ctx.font = 'black 90px Orbitron'; ctx.textAlign = 'center'; ctx.fillStyle = '#fff'; ctx.shadowBlur = 40; ctx.shadowColor = charConfig.color;
      ctx.fillText(activeSkillCallout, CANVAS_WIDTH / 2, 250); ctx.restore();
    }
    if (cameraRef.current.flash > 0) { ctx.fillStyle = `rgba(255,255,255,${cameraRef.current.flash})`; ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); }
  };

  const loop = () => {
    const ctx = canvasRef.current?.getContext('2d'); if (!ctx) return; update(); draw(ctx); requestRef.current = requestAnimationFrame(loop);
  };
  useEffect(() => { requestRef.current = requestAnimationFrame(loop); return () => cancelAnimationFrame(requestRef.current!); }, [level, characterType]);

  return (
    <div className="relative border-4 border-purple-800 bg-black overflow-hidden shadow-[0_0_200px_rgba(150,0,255,0.7)]">
      <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      <HUD characterType={characterType} hp={playerRef.current.hp} maxHp={playerRef.current.maxHp} score={scoreRef.current} combo={comboRef.current} cooldowns={playerRef.current.cooldowns || {}} energy={displayEnergy} />
    </div>
  );
};

export default Game;
