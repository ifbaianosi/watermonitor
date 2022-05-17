import { createServer, Model, belongsTo, hasMany } from 'miragejs'

// type Hydrometer = {
//     id: number;
//     number: string;
//     display: number;
//     readings?: Reading[]
// }

// type Reading = {
//     id: number;
//     created_at: string;
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
            })
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

                const updated_at = timestamp

                const newReadingData = {
                    created_at: timestamp,
                    reading: attrs.reading,
                    consume,
                    hydrometer_id: id,
                }

                schema.db.hydrometers.update(id, {
                    updated_at: timestamp,
                    display: Number(attrs.reading)
                })

                console.log(schema.db.hydrometers.find(id))

                return schema.db.readings.insert(newReadingData)
            })

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
                  updated_at: '2022-05-16T15:00:00'
                }
              ],
      
              readings: [
              ]
            })
        },
    })

    return server
}