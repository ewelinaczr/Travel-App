const express = require('express');
// const { route } = require('express/lib/application');
const tourController = require('./../controllers/tourController.js');
// const { router } = require('../app.js');
// /// DEFINE ROUTS /// //
// 1) Tours routs - mounting multiple routs
const tourRouter = express.Router();
// app.use('/api/v1/tours', tourRouter);
// tourRouter.param('id', tourController.checkId);

tourRouter
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
tourRouter
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = tourRouter;
