/*
    Created by - Isuru Pathum Herath
    On - 22/08/2021
    Name - EMP Salary Routes
 */

const express = require('express');
const router = express.Router();

//Import Cntroller Methos
const {create} = require('../controllers/Employee-Salary');

//Controller Routes
router.post('/add', create);

module.exports = router;