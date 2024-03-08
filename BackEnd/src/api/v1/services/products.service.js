
export class ProductsService {
    constructor(){

    }
    async getAllProducts() {
        return await console.log("Todos los productos");
    }

    async getProductById(id){
        return await console.log(`Product by ID: ${id}`);
    }
    async createProduct(data){
        return await data;
    }
    async updateProductById(id){
        return await console.log(`Product ${id} was updated`);
    }
    async deleteProductById(id){
        return await console.log(`Product ${id} was deleted`);
    }
}