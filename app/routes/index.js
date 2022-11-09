'use strict';

const authRouter = require('./auth');
const userRouter = require('./users');

module.exports = (app) => {
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/users', userRouter);
};
