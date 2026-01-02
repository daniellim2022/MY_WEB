
import { BuildingType, BuildingStats, TerrainType } from './types';

export const GRID_SIZE = 15;

export const INITIAL_RESOURCES = {
  money: 15000,
  power: 0,
  water: 0,
  population: 0,
  satisfaction: 80,
};

export interface BuildingVisuals {
  color: string;
  height: number;
  secondaryColor?: string;
}

export const BUILDING_VISUALS: Record<string, BuildingVisuals> = {
  [BuildingType.RESIDENTIAL]: { color: '#f8fafc', height: 15 },
  [BuildingType.APARTMENT]: { color: '#e2e8f0', height: 40, secondaryColor: '#64748b' },
  [BuildingType.COMMERCIAL]: { color: '#0ea5e9', height: 30, secondaryColor: '#0c4a6e' },
  [BuildingType.OFFICE]: { color: '#0284c7', height: 70, secondaryColor: '#075985' },
  [BuildingType.INDUSTRIAL]: { color: '#475569', height: 35, secondaryColor: '#f97316' },
  [BuildingType.POWER_PLANT]: { color: '#fbbf24', height: 45, secondaryColor: '#451a03' },
  [BuildingType.WATER_TOWER]: { color: '#38bdf8', height: 50, secondaryColor: '#075985' },
  [BuildingType.PARK]: { color: '#22c55e', height: 5 },
  [BuildingType.HOSPITAL]: { color: '#fca5a5', height: 30, secondaryColor: '#991b1b' },
  [BuildingType.ROAD]: { color: '#1e293b', height: 2 },
  [BuildingType.LANDMARK_TOWER]: { color: '#6366f1', height: 120, secondaryColor: '#312e81' },
  [BuildingType.MUSEUM]: { color: '#d4d4d8', height: 40, secondaryColor: '#52525b' },
  [BuildingType.FOUNTAIN]: { color: '#7dd3fc', height: 10, secondaryColor: '#0ea5e9' },
  [BuildingType.TECH_HUB]: { color: '#a855f7', height: 55, secondaryColor: '#4c1d95' },
  [BuildingType.SOLAR_PLANT]: { color: '#0ea5e9', height: 10, secondaryColor: '#0369a1' },
  [BuildingType.BUS_STATION]: { color: '#facc15', height: 20, secondaryColor: '#a16207' },
  [BuildingType.SUBWAY]: { color: '#10b981', height: 5, secondaryColor: '#064e3b' },
  // Maritime Visuals (Updated)
  [BuildingType.PORT]: { color: '#475569', height: 25, secondaryColor: '#334155' },
  [BuildingType.FISHERY]: { color: '#334155', height: 10, secondaryColor: '#1e293b' },
  [BuildingType.SEA_PARK]: { color: '#06b6d4', height: 5, secondaryColor: '#0891b2' },
  [BuildingType.WATER_TRANS]: { color: '#0ea5e9', height: 8, secondaryColor: '#0369a1' },
  [BuildingType.OFFSHORE_RIG]: { color: '#f97316', height: 60, secondaryColor: '#431407' },
  [BuildingType.MARINA]: { color: '#f0f9ff', height: 12, secondaryColor: '#0ea5e9' },
  [BuildingType.OCEAN_LAB]: { color: '#ecfeff', height: 35, secondaryColor: '#0891b2' },
};

export const BUILDING_DATA: Record<string, BuildingStats> = {
  [BuildingType.RESIDENTIAL]: { cost: 500, maintenance: 10, powerDemand: 5, waterDemand: 5, popCapacity: 20, revenue: 15, unlockLevel: 1, synergy: { with: [BuildingType.PARK, BuildingType.COMMERCIAL, BuildingType.MARINA], bonus: 0.25 } },
  [BuildingType.APARTMENT]: { cost: 2500, maintenance: 80, powerDemand: 25, waterDemand: 20, popCapacity: 120, revenue: 65, unlockLevel: 2, synergy: { with: [BuildingType.SUBWAY, BuildingType.SEA_PARK], bonus: 0.2 } },
  [BuildingType.COMMERCIAL]: { cost: 1200, maintenance: 60, powerDemand: 20, waterDemand: 10, revenue: 90, happinessBonus: 3, unlockLevel: 1, synergy: { with: [BuildingType.OFFICE, BuildingType.PORT, BuildingType.MARINA], bonus: 0.3 } },
  [BuildingType.OFFICE]: { cost: 5000, maintenance: 250, powerDemand: 80, waterDemand: 40, revenue: 400, happinessBonus: 2, unlockLevel: 3 },
  [BuildingType.INDUSTRIAL]: { cost: 2000, maintenance: 120, powerDemand: 50, waterDemand: 40, revenue: 250, happinessBonus: -5, unlockLevel: 1, synergy: { with: [BuildingType.PORT, BuildingType.OFFSHORE_RIG], bonus: 0.45 } },
  [BuildingType.POWER_PLANT]: { cost: 2500, maintenance: 300, powerDemand: 0, waterDemand: 10, powerOutput: 1800, unlockLevel: 1 },
  [BuildingType.WATER_TOWER]: { cost: 1200, maintenance: 120, powerDemand: 30, waterDemand: 0, waterOutput: 1800, unlockLevel: 1 },
  [BuildingType.PARK]: { cost: 600, maintenance: 30, powerDemand: 5, waterDemand: 15, happinessBonus: 18, unlockLevel: 1 },
  [BuildingType.HOSPITAL]: { cost: 4500, maintenance: 450, powerDemand: 120, waterDemand: 100, happinessBonus: 35, unlockLevel: 3 },
  [BuildingType.ROAD]: { cost: 50, maintenance: 2, powerDemand: 0, waterDemand: 0, unlockLevel: 1 },
  [BuildingType.LANDMARK_TOWER]: { cost: 25000, maintenance: 1200, powerDemand: 300, waterDemand: 150, happinessBonus: 90, revenue: 1500, unlockLevel: 5 },
  [BuildingType.MUSEUM]: { cost: 9500, maintenance: 450, powerDemand: 70, waterDemand: 40, happinessBonus: 50, revenue: 450, unlockLevel: 4 },
  [BuildingType.FOUNTAIN]: { cost: 2000, maintenance: 70, powerDemand: 10, waterDemand: 70, happinessBonus: 30, unlockLevel: 2 },
  [BuildingType.TECH_HUB]: { cost: 8500, maintenance: 650, powerDemand: 250, waterDemand: 60, revenue: 900, unlockLevel: 4, synergy: { with: [BuildingType.OCEAN_LAB], bonus: 0.3 } },
  [BuildingType.SOLAR_PLANT]: { cost: 4500, maintenance: 100, powerDemand: 0, waterDemand: 10, powerOutput: 800, unlockLevel: 3 },
  [BuildingType.BUS_STATION]: { cost: 3500, maintenance: 200, powerDemand: 30, waterDemand: 10, revenue: 150, unlockLevel: 3 },
  [BuildingType.SUBWAY]: { cost: 15000, maintenance: 1000, powerDemand: 500, waterDemand: 60, revenue: 800, unlockLevel: 5 },
  // Maritime Stats (Expanded)
  [BuildingType.PORT]: { cost: 7000, maintenance: 600, powerDemand: 120, waterDemand: 60, revenue: 1200, unlockLevel: 3 },
  [BuildingType.FISHERY]: { cost: 1500, maintenance: 100, powerDemand: 20, waterDemand: 0, revenue: 280, unlockLevel: 1 },
  [BuildingType.SEA_PARK]: { cost: 3500, maintenance: 200, powerDemand: 50, waterDemand: 30, happinessBonus: 30, unlockLevel: 2 },
  [BuildingType.WATER_TRANS]: { cost: 4500, maintenance: 300, powerDemand: 60, waterDemand: 10, revenue: 250, unlockLevel: 2 },
  [BuildingType.OFFSHORE_RIG]: { cost: 12000, maintenance: 800, powerDemand: 200, waterDemand: 50, revenue: 2500, happinessBonus: -10, unlockLevel: 4 },
  [BuildingType.MARINA]: { cost: 5000, maintenance: 400, powerDemand: 80, waterDemand: 40, revenue: 600, happinessBonus: 20, unlockLevel: 3 },
  [BuildingType.OCEAN_LAB]: { cost: 9000, maintenance: 700, powerDemand: 300, waterDemand: 50, revenue: 500, happinessBonus: 10, unlockLevel: 4 },
};

export const BUILDING_CONSTRAINTS: Record<string, { allowedTerrain: TerrainType[] }> = {
  [BuildingType.RESIDENTIAL]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.APARTMENT]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.COMMERCIAL]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.OFFICE]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.INDUSTRIAL]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.POWER_PLANT]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.WATER_TOWER]: { allowedTerrain: [TerrainType.GRASS, TerrainType.WATER] },
  [BuildingType.PARK]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.HOSPITAL]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.ROAD]: { allowedTerrain: [TerrainType.GRASS, TerrainType.WATER] },
  [BuildingType.LANDMARK_TOWER]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.MUSEUM]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.FOUNTAIN]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.TECH_HUB]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.SOLAR_PLANT]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.BUS_STATION]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.SUBWAY]: { allowedTerrain: [TerrainType.GRASS] },
  [BuildingType.PORT]: { allowedTerrain: [TerrainType.WATER] },
  [BuildingType.FISHERY]: { allowedTerrain: [TerrainType.WATER] },
  [BuildingType.SEA_PARK]: { allowedTerrain: [TerrainType.WATER] },
  [BuildingType.WATER_TRANS]: { allowedTerrain: [TerrainType.WATER] },
  [BuildingType.OFFSHORE_RIG]: { allowedTerrain: [TerrainType.WATER] },
  [BuildingType.MARINA]: { allowedTerrain: [TerrainType.WATER] },
  [BuildingType.OCEAN_LAB]: { allowedTerrain: [TerrainType.WATER] },
};

export const BUILDING_ICONS: Record<string, string> = {
  [BuildingType.RESIDENTIAL]: '🏠',
  [BuildingType.APARTMENT]: '🏢',
  [BuildingType.COMMERCIAL]: '🏪',
  [BuildingType.OFFICE]: '🏙️',
  [BuildingType.INDUSTRIAL]: '🏭',
  [BuildingType.POWER_PLANT]: '⚡',
  [BuildingType.WATER_TOWER]: '💧',
  [BuildingType.PARK]: '🌳',
  [BuildingType.HOSPITAL]: '🏥',
  [BuildingType.ROAD]: '🛣️',
  [BuildingType.LANDMARK_TOWER]: '🗼',
  [BuildingType.MUSEUM]: '🏛️',
  [BuildingType.FOUNTAIN]: '⛲',
  [BuildingType.TECH_HUB]: '🔬',
  [BuildingType.SOLAR_PLANT]: '☀️',
  [BuildingType.BUS_STATION]: '🚌',
  [BuildingType.SUBWAY]: '🚇',
  [BuildingType.PORT]: '🚢',
  [BuildingType.FISHERY]: '🎣',
  [BuildingType.SEA_PARK]: '🏄',
  [BuildingType.WATER_TRANS]: '🚤',
  [BuildingType.OFFSHORE_RIG]: '⛏️',
  [BuildingType.MARINA]: '⚓',
  [BuildingType.OCEAN_LAB]: '🧪',
};

export const TERRAIN_COLORS = {
  grass: 'bg-emerald-600',
  water: 'tile-water',
  mountain: 'bg-stone-600',
};
