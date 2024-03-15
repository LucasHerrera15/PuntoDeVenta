import express from 'express';

import { SalesController } from '../controllers/index.js';
import { SalesService } from '../services/index.js';

export class SalesRouter{
    static routes(){
        const router = express.Router();

        const service = new SalesService();
        const controller = new SalesController({service});
        
        router
        .get('/', controller.getAllSales)
        .get('/:id', controller.getSaleById)

        router.post('/', controller.createSale)
     
        router.patch('/:id', controller.updateSaleById);

        router.delete('/:id', controller.deleteSaleById);
        
        return router;
    }
}