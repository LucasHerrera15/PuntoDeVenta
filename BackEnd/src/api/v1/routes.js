import express from 'express'
import { ProductsRouter, SalesRouter, ClientRouter } from './routes/index.js'

export const Routes = () => {
  const router = express.Router()
  const apiRouter = express.Router()

  router
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

  apiRouter.use('/products', ProductsRouter.routes())
  apiRouter.use('/sales', SalesRouter.routes())
  apiRouter.use('/clients', ClientRouter.routes())

  router.use('/', apiRouter)

  return router
}
