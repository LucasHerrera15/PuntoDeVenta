export class ProductsController {
    constructor({service}){
        this.service = service
    }    
    getAllProducts = (req, res) => {
        return this.service
        .getAll()
        .then((data)=>{res.json(data)})
    }
    getProductById = (req, res) => {
        const {id} = req.params;
        return this.service
        .getById(id)
        .then((data)=>{res.json(data)})
    };
    createProduct = (req, res) => {
        const data = req.body;
        return this.service
        .create(data)
        .then((data)=>res.status(201).json(data));
    }
    updateProductById = (req, res) => {
        const {id} = req.params;
        return this.service
        .updateById(id)
        .then((data) => res.status(200).json(data))
    }
    deleteProductById = (req, res) => {
        const { id } = req.params;
        return this.service
        .deleteById(id)
        .then((data) => res.status(200).json(data))
    }
}