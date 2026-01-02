
export enum TerrainType {
  GRASS = 'grass',
  WATER = 'water',
  MOUNTAIN = 'mountain'
}

export enum BuildingType {
  RESIDENTIAL = 'RESIDENTIAL',
  APARTMENT = 'APARTMENT',
  COMMERCIAL = 'COMMERCIAL',
  OFFICE = 'OFFICE',
  INDUSTRIAL = 'INDUSTRIAL',
  POWER_PLANT = 'POWER_PLANT',
  WATER_TOWER = 'WATER_TOWER',
  PARK = 'PARK',
  HOSPITAL = 'HOSPITAL',
  ROAD = 'ROAD',
  // Landmark & Tech
  LANDMARK_TOWER = 'LANDMARK_TOWER',
  MUSEUM = 'MUSEUM',
  FOUNTAIN = 'FOUNTAIN',
  TECH_HUB = 'TECH_HUB',
  SOLAR_PLANT = 'SOLAR_PLANT',
  // Maritime (Expanded)
  PORT = 'PORT',
  FISHERY = 'FISHERY',
  SEA_PARK = 'SEA_PARK',
  WATER_TRANS = 'WATER_TRANS',
  OFFSHORE_RIG = 'OFFSHORE_RIG',
  MARINA = 'MARINA',
  OCEAN_LAB = 'OCEAN_LAB',
  // Transportation
  BUS_STATION = 'BUS_STATION',
  SUBWAY = 'SUBWAY'
}

export interface BuildingStats {
  cost: number;
  maintenance: number;
  powerDemand: number;
  waterDemand: number;
  powerOutput?: number;
  waterOutput?: number;
  popCapacity?: number;
  revenue?: number;
  happinessBonus?: number;
  unlockLevel?: number;
  synergy?: {
    with: BuildingType[];
    bonus: number;
  };
}

export interface Tile {
  id: string;
  x: number;
  y: number;
  terrain: TerrainType;
  building?: {
    type: BuildingType;
    level: number;
    isConnected?: boolean;
    efficiency?: number;
  };
}

export interface CityResources {
  money: number;
  power: number;
  water: number;
  population: number;
  satisfaction: number;
  taxRate: number;
  monthlyIncome: number;
  monthlyExpenses: number;
}

export interface Mission {
  id: string;
  description: string;
  target: number;
  current: number;
  reward: number;
  isCompleted: boolean;
  category: 'Infrastructure' | 'Economy' | 'Maritime' | 'Metropolis';
}

export interface CityEvent {
  id: string;
  name: string;
  description: string;
  duration: number;
  effect: {
    revenueMultiplier?: number;
    happinessBonus?: number;
    demandMultiplier?: number;
  };
}

export interface GameState {
  tiles: Tile[][];
  resources: CityResources;
  day: number;
  month: number;
  year: number;
  level: number;
  selectedBuildingType: BuildingType | 'DEMOLISH' | null;
  selectedTile: { x: number; y: number } | null;
  milestonesReached: string[];
  missions: Mission[];
  activeEvent: CityEvent | null;
}
