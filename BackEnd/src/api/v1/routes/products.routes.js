import express from 'express'

import { ProductsController } from '../controllers/index.js'
import { ProductsService } from '../services/index.js'

export class ProductsRouter {
  static routes () {
    const router = express.Router()

    const service = new ProductsService()
    const controller = new ProductsController({ service })

    router
      .get('/', controller.getAllProducts)
      .get('/:id', controller.getProductById)

    router.post('/', controller.createProduct)

    router.patch('/:id', controller.updateProductById)

    router.delete('/:id', controller.deleteProductById)

    return router
  }
}
