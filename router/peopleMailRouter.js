const express = require('express');
const router= express.Router();
const reqValidation = require('../utils/reqValidation');
const scheamValidation = require('../middleware/reqValidationMiddleware')
const {getPeopleMail,createPeopleMail} = require('../controller/peopleController');
const {isAuth} = require('../middleware/authMiddleware');

// user registration
router.get("/getPeopleMail",isAuth, getPeopleMail);
router.post("/createPeopleMail",scheamValidation.request_validation(reqValidation.createPeopleMail),createPeopleMail);





module.exports = router