export class SalesController {
  constructor ({ service }) {
    this.service = service
  }

  getSaleById = (req, res) => {
    const { id } = req.params
    return this.service
      .getById(id)
      .then((data) => { res.status(200).json(data) })
  }

  getAllSales = (req, res) => {
    return this.service
      .getAll()
      .then((data) => { res.status(200).json(data) })
  }

  createSale = (req, res) => {
    const data = req.body
    return this.service
      .create(data)
      .then((data) => { res.status(200).json(data) })
  }

  updateSaleById = (req, res) => {
    const { id } = req.params
    return this.service
      .updateById(id)
      .then((data) => { res.status(200).json(data) })
  }

  deleteSaleById = (req, res) => {
    const { id } = req.params
    return this.service
      .deleteById(id)
      .then((data) => { res.status(200).json(data) })
  }
};
