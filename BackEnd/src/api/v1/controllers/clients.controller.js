export class ClientController {
  constructor ({ service }) {
    this.service = service
  }

  getAllClients = (req, res) => {
    return this.service
      .getAll()
      .then((data) => { res.json(data) })
  }

  getClientById = (req, res) => {
    const { id } = req.params
    return this.service
      .getById(id)
      .then((data) => { res.json(data) })
  }

  createClient = (req, res) => {
    const data = req.body
    return this.service
      .create(data)
      .then((data) => res.status(201).json(data))
  }

  updateClientById = (req, res) => {
    const { id } = req.params
    return this.service
      .updateById(id)
      .then((data) => res.status(200).json(data))
  }

  deleteClientById = (req, res) => {
    const { id } = req.params
    return this.service
      .deleteById(id)
      .then((data) => res.status(200).json(data))
  }
}
