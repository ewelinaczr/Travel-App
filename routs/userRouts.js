const express = require('express');
const { route } = require('express/lib/application');
const fs = require('fs');
const userController = require('./../controllers/userController.js');

// /// DEFINE ROUTS /// //
// 2) Users routs - mounting multiple routs
const userRouter = express.Router();
// app.use('/api/v1/users', userRouter);

userRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
userRouter
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;
