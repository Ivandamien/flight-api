const express = require('express');
const router = express.Router();
const flightController = require('./../controllers/flightController')

router
    .route('/')
    .get(flightController.getAllFlights)
    .post(flightController.createFlight)

router
    .route('/:id')
    .get(flightController.getOneFlight)
    .patch(flightController.updateFlight)
    .delete(flightController.deleteFlight)







module.exports = router;