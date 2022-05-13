import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import theme from './styles/theme'

import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter } from "react-router-dom";

import { createServer, Model } from "miragejs"

createServer({
  models: {
    reading: Model,
},

  routes() {
    this.namespace = "api"

    this.post('/readings', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.db.readings.insert(data)
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
