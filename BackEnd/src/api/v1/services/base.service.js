export class BaseService {
  async getAll () {
    return await 'All items'
  }

  async getById (id) {
    return await `Item by ID: ${id}`
  }

  async create (data) {
    return await data
  }

  async updateById (id) {
    return await `Item ${id} was updated`
  }

  async deleteById (id) {
    return await `Item ${id} was deleted`
  }
}
