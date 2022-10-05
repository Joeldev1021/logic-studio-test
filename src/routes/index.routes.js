const express = require('express');
const router = express.Router()

const CarDateController = require('../controllers/cardDate.controller')

router.get('/', CarDateController.findAll)
router.post('/', CarDateController.create)
router.put('/:id', CarDateController.update)
router.delete('/:id', CarDateController.delete)

module.exports = router

