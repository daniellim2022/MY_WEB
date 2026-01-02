import { FighterState, FrameData } from '../../types';

export const MOVE_LIST: Partial<Record<FighterState, FrameData>> = {
    // --- BASIC ATTACKS ---
    [FighterState.ATTACK_LP]: { startup: 8, active: 4, recovery: 10, damage: 5, stun: 10, knockback: 0.5, blockStun: 8, hitLevel: 'high', nextMoves: { 'KeyI': FighterState.ATTACK_RP } },
    [FighterState.ATTACK_RP]: { startup: 10, active: 5, recovery: 12, damage: 10, stun: 15, knockback: 1.0, blockStun: 8, hitLevel: 'high' },
    [FighterState.ATTACK_LK]: { startup: 12, active: 6, recovery: 16, damage: 12, stun: 15, knockback: 1.5, blockStun: 10, hitLevel: 'mid' },
    [FighterState.ATTACK_RK]: { startup: 15, active: 6, recovery: 20, damage: 18, stun: 25, knockback: 3.5, blockStun: 12, hitLevel: 'mid' },

    // --- DIRECTIONAL MOVES ---
    [FighterState.FORWARD_LP]: { startup: 12, active: 4, recovery: 14, damage: 8, stun: 12, knockback: 1.0, blockStun: 5, hitLevel: 'high' },
    [FighterState.FORWARD_RP]: { startup: 15, active: 5, recovery: 20, damage: 15, stun: 20, knockback: 2.0, blockStun: 10, hitLevel: 'mid' },
    [FighterState.FORWARD_LK]: { startup: 14, active: 5, recovery: 18, damage: 12, stun: 15, knockback: 1.5, blockStun: 8, hitLevel: 'mid' },
    [FighterState.FORWARD_RK]: { startup: 16, active: 6, recovery: 22, damage: 18, stun: 25, knockback: 3.0, blockStun: 12, hitLevel: 'mid' },

    [FighterState.DOWN_LP]: { startup: 10, active: 5, recovery: 12, damage: 5, stun: 10, knockback: 0.5, blockStun: 5, hitLevel: 'low' },
    [FighterState.DOWN_RP]: { startup: 12, active: 5, recovery: 15, damage: 8, stun: 12, knockback: 0.8, blockStun: 6, hitLevel: 'low' },
    [FighterState.DOWN_LK]: { startup: 14, active: 6, recovery: 18, damage: 10, stun: 15, knockback: 1.0, blockStun: 8, hitLevel: 'low' },
    [FighterState.DOWN_RK]: { startup: 12, active: 6, recovery: 18, damage: 10, stun: 15, knockback: 0.5, blockStun: 10, hitLevel: 'low' },

    // --- SPECIALS ---
    [FighterState.ATTACK_SPECIAL]: {
        startup: 30, active: 20, recovery: 40, damage: 15, stun: 30, knockback: 1.5, blockStun: 5, hitLevel: 'mid',
        isScrew: true, isArmor: true
    },
    [FighterState.ATTACK_SPECIAL_2]: {
        startup: 20, active: 20, recovery: 50, damage: 0, stun: 0, knockback: 0, blockStun: 0, hitLevel: 'mid',
        isElectric: true
    },
    [FighterState.ATTACK_SPECIAL_3]: {
        startup: 60, active: 30, recovery: 80, damage: 0, stun: 0, knockback: 0, blockStun: 0, hitLevel: 'mid',
        launch: 15.0
    },
    [FighterState.ATTACK_THROW]: {
        startup: 10, active: 2, recovery: 40, damage: 25, stun: 60, knockback: 0.5, blockStun: 0, hitLevel: 'high', launch: 0
    },
    [FighterState.RAGE_ART]: {
        startup: 20, active: 5, recovery: 100, damage: 55, stun: 120, knockback: 10.0, blockStun: 20, hitLevel: 'mid',
        isArmor: true, isCinematic: true
    },

    // --- GILGAMESH SKILLS ---
    [FighterState.GOB_STANCE]: {
        startup: 20, active: 999, recovery: 20, damage: 0, stun: 0, knockback: 0, blockStun: 0, hitLevel: 'mid'
    },
    [FighterState.GOB_FIRE]: {
        startup: 5, active: 10, recovery: 15, damage: 15, hitLevel: 'mid', stun: 20, knockback: 0.5, blockStun: 10,
        nextMoves: { 'KeyE': FighterState.GOB_FINISH }
    },
    [FighterState.GOB_FINISH]: {
        startup: 30, active: 60, recovery: 100, damage: 40, hitLevel: 'mid', stun: 60, knockback: 5.0, blockStun: 30,
        isCinematic: true
    },

    // --- ARCHER SKILLS ---
    [FighterState.UBW_TRACE]: {
        startup: 15, active: 5, recovery: 10, damage: 0, stun: 0, knockback: 0, blockStun: 0, hitLevel: 'mid',
        nextMoves: { 'KeyE': FighterState.UBW_RUSH_1 }
    },
    [FighterState.UBW_RUSH_1]: {
        startup: 8, active: 6, recovery: 18, damage: 10, hitLevel: 'high', stun: 15, knockback: 0.5, blockStun: 10,
        nextMoves: { 'KeyE': FighterState.UBW_RUSH_2 }
    },
    [FighterState.UBW_RUSH_2]: {
        startup: 10, active: 8, recovery: 20, damage: 12, hitLevel: 'mid', launch: 12.0, stun: 20, knockback: 1.0, blockStun: 10,
        nextMoves: { 'KeyE': FighterState.UBW_RUSH_3 }
    },
    [FighterState.UBW_RUSH_3]: {
        startup: 20, active: 10, recovery: 40, damage: 25, hitLevel: 'mid', knockback: 4.0, stun: 40, blockStun: 20
    },
    [FighterState.UBW_THROW]: {
        startup: 15, active: 10, recovery: 30, damage: 15, hitLevel: 'mid', isScrew: true, stun: 30, knockback: 0.5, blockStun: 5
    }
};
