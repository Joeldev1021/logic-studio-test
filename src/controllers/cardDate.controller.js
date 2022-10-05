const CarDateSchema = require('../schemas/carDate.schema')
class CarDateController {
    async findAll(req, res, next) {
        try {
            const carDateAll = await CarDateSchema.find()
            res.status(200).send(carDateAll)
        } catch (error) {
            next(error)
        }

    }

    async findById(req, res, next) {
        try {
            const carDate = await CarDateSchema.findById(req.params.id)
            res.status(200).send(carDate)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            const carDate = new CarDateSchema(req.body)
            const cardSave = await carDate.save()
            res.status(201).send(cardSave)
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        const { id } = req.params
        try {
            const carDate = await CarDateSchema.findByIdAndUpdate(id, req.body)
            console.log(carDate)
            res.status(200).send(carDate)
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        const { id } = req.params
        try {
            const carDateDelete = await CarDateSchema.findByIdAndDelete(id)
            res.status(200).send(carDateDelete)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new CarDateController()