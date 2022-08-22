export interface Tank {
  id: number;
  name: string;
  description: string;    
  lastDailyControl: {
    date: string,
    registerStatus: boolean,
    waterLevel: WaterLevelType
  } /* | null */
}

export const waterLevelOptions = {
    FULL: {
      description: 'Cheio',
      selected: {
        bgColor: 'full',
        color: 'waterLevelTextSelected'
      }
    },
  
    ALMOST_FULL: {
      description: 'Acima do meio',
      selected: {
        bgColor: 'almost_full',
        color: 'waterLevelTextSelected'
      }
    },
  
    MIDDLE: {
      description: 'Pelo meio',
      selected: {
        bgColor: 'middle',
        color: 'waterLevelTextSelected'
      }
    },
  
    LOW: {
      description: 'Abaixo do meio',
      selected: {
        bgColor: 'low',
        color: 'waterLevelTextSelected'
      }
    },
  
    EMPTY: {
      description: 'Vazio',
      selected: {
        bgColor: 'empty',
        color: 'waterLevelTextSelected'
      }
    }
}
  
export type WaterLevelType = keyof typeof waterLevelOptions

export interface DailyControlInput {
  tankId: number;
  registerStatus: boolean;
  waterLevel: WaterLevelType;
}

export interface DailyControl {
  createdAt: string,
  registerStatus: boolean,
  waterLevel: WaterLevelType
}