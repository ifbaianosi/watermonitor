import { createServer, Model, belongsTo, hasMany } from 'miragejs'

// type Hydrometer = {
//     id: number;
//     number: string;
//     display: number;
//     readings?: Reading[]
// }

// type Reading = {
//     id: number;
//     createdAt: string;
//     consume: number;
//     reading: number;
//     hydrometer: Hydrometer
// }

export function makeServer() {
    const server = createServer({
        models: {
            reading: Model.extend({
                hydrometer: belongsTo(),
            }),
            hydrometer: Model.extend({
                readings: hasMany(),
            }),
            tank: Model,
            dailyControl: Model
        },

        routes() {
            this.namespace = 'api'
            this.timing = 750

            this.get('/hydrometers/:id', (schema, request) => {
              let id = request.params.id;              
              return schema.db.hydrometers.find(id);
            });
            this.post('/hydrometers/:id/readings', (schema, request) => {
                let id = request.params.id
                let attrs = JSON.parse(request.requestBody)

                const timestamp = Date.now()

                const hydrometer = schema.db.hydrometers.find(id)
                const consume = (attrs.reading - hydrometer.display)

                const newReadingData = {
                    createdAt: timestamp,
                    reading: attrs.reading,
                    consume,
                    hydrometer_id: id,
                }

                schema.db.hydrometers.update(id, {
                    updatedAt: timestamp,
                    display: Number(attrs.reading)
                })

                console.log(schema.db.hydrometers.find(id))

                return schema.db.readings.insert(newReadingData)
            })
            this.get('/tanks', (schema, request) => {
              return schema.db.tanks;
            });
            this.post(`/tanks/:id/daily-controls`, (schema, request) => {
              let tankId = request.params.id
              const data = JSON.parse(request.requestBody)

              const newDailyControl = {
                createdAt: new Date().toString(),
                registerStatus: data.registerStatus,
                waterLevel: data.waterLevel
              }

              let tank = schema.db.tanks.find(tankId)
              tank = {
                ...tank,
                lastDailyControl: {
                  date: newDailyControl.createdAt,
                  registerStatus: newDailyControl.registerStatus,
                  waterLevel: newDailyControl.waterLevel
                }
              }

              schema.db.tanks.update(tankId, {...tank})

              console.log({tankId, newDailyControl})

              return schema.db.dailyControls.insert(newDailyControl)
            });

            this.namespace = ''
            this.passthrough()
        },
  
        seeds(server) {
            server.db.loadData({
              hydrometers: [
                {
                  id: 1,
                  number: '083245444',
                  display: 686143,
                  updatedAt: '2022-05-16T15:00:00'
                }
              ],
      
              readings: [],

              dailyControls: [],

              tanks: [
                  {
                    id: 1,
                    name: 'Tanque azul - Residência',
                    description: '',
                    lastDailyControl: {
                      date: '2022-07-28T15:17:00',
                      registerStatus: true,
                      waterLevel: 'FULL'
                    }                
                  },
                  {
                    id: 2,
                    name: 'Portaria',
                    description: '',
                    lastDailyControl: {
                      date: '2022-07-28T15:17:00',
                      registerStatus: true,
                      waterLevel: 'ALMOST_FULL'
                    }                
                  },
                  {
                    id: 3,
                    name: 'Aviário',
                    description: '',
                    lastDailyControl: {
                      date: '2022-07-28T15:17:00',
                      registerStatus: false,
                      waterLevel: 'MIDDLE'
                    }                    
                  },
                  {
                    id: 4,
                    name: 'Sabotagem',
                    description: '',
                    lastDailyControl: {
                      date: '2022-07-28T15:17:00',
                      registerStatus: true,
                      waterLevel: 'LOW'
                    } 
                  },
                  {
                    id: 5,
                    name: 'Tanque azul - Horta',
                    description: '',
                    lastDailyControl: {
                      date: '2022-07-28T15:17:00',
                      registerStatus: true,
                      waterLevel: 'EMPTY'
                    } 
                  },
                  {
                    id: 6,
                    name: 'Tanque azul - Suíno',
                    description: '',
                    lastDailyControl: {
                      date: '2022-07-28T15:17:00',
                      registerStatus: true,
                      waterLevel: 'FULL'
                    } 
                  }
              ]
            })
        },
    })

    return server
}