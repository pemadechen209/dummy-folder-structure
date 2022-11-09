'use strict';

const express = require('express');
const userCtrl = require('../controller/users');
const { authorize } = require('../lib/auth');

const router = express.Router();


router.route('/')

  // Get List Of Users
  .get(authorize(), userCtrl.getAllUser)

  router.route('/:id')
  .get(authorize(), userCtrl.getUserById)


module.exports = router;
