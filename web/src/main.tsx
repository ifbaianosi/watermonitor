import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { createServer, Model } from "miragejs"

import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './styles/theme'

createServer({
  models: {
    reading: Model,
    hydrometer: Model
},

  routes() {
    this.namespace = "api"

    this.get("/hydrometers/:id", (schema, request) => {
      let id = request.params.id
    
      return schema.db.hydrometers.find(id)
    })

    this.post('/hydrometers/:id/readings', (schema, request) => {
      let id = request.params.id
      const data = JSON.parse(request.requestBody)
      console.log(data)

      const newReading = {
        createdAt: new Date(),
        hydrometerId: id,
        reading: data.reading
      }

      return schema.db.readings.insert(newReading)
    })
  },
  
  seeds(server) {
      server.db.loadData({
        hydrometers: [
          {
            id: 1,
            number: '083245444',
            display: '0686143',
            updatedAt: '2022-05-16T15:00:00'
          }
        ],

        readings: [
        ]
      })
  },
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
