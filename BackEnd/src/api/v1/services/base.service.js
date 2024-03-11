export class BaseService {
    constructor(){

    }
    async getAll(){
        return await console.log('All items');
    }
    async getById(id){
        return await console.log(`Item by ID: ${id}`);
    }
    async create(data){
        return await data;
    }
    async updateById(id){
        return await console.log(`Item ${id} was updated`);
    }
    async deleteById(id){
        return await console.log(`Item ${id} was deleted`);
    }
};