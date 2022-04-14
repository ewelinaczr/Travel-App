const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routs/tourRouts');
const userRouter = require('./routs/userRouts');
const app = express();

// /// MIDDLEWARES SET /// //
// define middlewear - aplly to all req
// 1) 3rd party
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// 2) Express
app.use(express.json());
// app.use(express.static(`${__dirname}/public`));
// 3) Own
app.use((req, res, next) => {
  // req.requestTime = new Date().toISOString();
  console.log('Hello from the middleware!');
  next();
});

// /// ROUTS SET /// //
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
