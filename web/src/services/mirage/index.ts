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
            tank: Model
        },

        routes() {
            this.namespace = 'api'
            this.timing = 750

            this.get('/hydrometers/:id');
            this.post('/hydrometers/:id/readings', (schema, request) => {
                let id = request.params.id
                let attrs = JSON.parse(request.requestBody)

                const timestamp = Date.now()

                const hydrometer = schema.db.hydrometers.find(id)
                const consume = (attrs.reading - hydrometer.display)

                const updatedAt = timestamp

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
            this.get('/tanks');

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
      
              readings: [
              ],

              tanks: [
                  {
                      id: 1,
                      name: 'Tanque azul - Residência',
                      description: '',
                      registerStatus: false,
                      waterLevel: 'FULL'
                  },
                  {
                    id: 2,
                    name: 'Portaria',
                    description: '',
                    registerStatus: true,
                    waterLevel: 'FULL'
                  },
                  {
                    id: 3,
                    name: 'Aviário',
                    description: '',
                    registerStatus: false,
                    waterLevel: 'FULL'
                  },
                  {
                    id: 4,
                    name: 'Sabotagem',
                    description: '',
                    registerStatus: true,
                    waterLevel: 'FULL'
                  },
                  {
                    id: 5,
                    name: 'Tanque azul - Horta',
                    description: '',
                    registerStatus: true,
                    waterLevel: 'FULL'
                  },
                  {
                    id: 6,
                    name: 'Tanque azul - Suíno',
                    description: '',
                    registerStatus: true,
                    waterLevel: 'FULL'
                  }
              ]
            })
        },
    })

    return server
}