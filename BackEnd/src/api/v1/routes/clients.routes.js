import express from 'express'

import { ClientController } from '../controllers/index.js'
import { ClientService } from '../services/index.js'

export class ClientRouter {
  static routes () {
    const router = express.Router()

    const service = new ClientService()
    const controller = new ClientController({ service })

    router
      .get('/', controller.getAllClients)
      .get('/:id', controller.getClientById)

    router.post('/', controller.createClient)

    router.patch('/:id', controller.updateClientById)

    router.delete('/:id', controller.deleteClientById)

    return router
  }
}
