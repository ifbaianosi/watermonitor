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
        bgColor: 'rgba(0, 166, 81, 0.8)',
        color: '#FFFFFF'
      }
    },
  
    ALMOST_FULL: {
      description: 'Acima do meio',
      selected: {
        bgColor: '#BED62F',
        color: '#FFFFFF'
      }
    },
  
    MIDDLE: {
      description: 'Pelo meio',
      selected: {
        bgColor: '#C7BD00',
        color: '#FFFFFF'
      }
    },
  
    LOW: {
      description: 'Abaixo do meio',
      selected: {
        bgColor: '#FDB813',
        color: '#FFFFFF'
      }
    },
  
    EMPTY: {
      description: 'Vazio',
      selected: {
        bgColor: '#ED1C24',
        color: '#FFFFFF'
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