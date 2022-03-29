const express = require('express');
const { body, validationResult } = require('express-validator');
const indexController = require('../controller/index.controller');
const router = express.Router();


router.post('/signup',
    body('username').not().isEmpty(),
    body('email').not().isEmpty(),
    indexController.signup);


router.post("/signin",
    body('email').not().isEmpty(), body('password').not().isEmpty(),
    indexController.signin);


module.exports = router;