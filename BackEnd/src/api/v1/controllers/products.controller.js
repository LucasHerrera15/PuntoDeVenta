
export class ProductsController {
    constructor({service}){
        this.service = service
    }    

    getAllProducts = (req, res) => {
        return this.service
        .getAllProducts()
    }
    getProductById = (req, res) => {
        const {id} = req.params;
        return this.service
        .getProductById(id)
        .then(()=>{res.send()})
    };
    createProduct = (req, res) => {
        const data = req.body;
        return this.service
        .createProduct(data)
        .then((data)=>res.status(201).json(data));
    }
    updateProductById = (req, res) => {
        const {id} = req.params;
        return this.service
        .updateProductById(id)
        .then((data) => res.status(200).json(data))
    }
    deleteProductById = (req, res) => {
        const { id } = req.params;
        return this.service
        .deleteProductById(id)
        .then((data) => res.status(200).json(data))
    }
}