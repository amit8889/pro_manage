const express = require('express');
const router= express.Router();
const reqValidation = require('../utils/reqValidation');
const scheamValidation = require('../middleware/reqValidationMiddleware')
const { registerUser,
    loginUser, logoutUser,getNewAccessToken } = require('../controller/userController');
const {isAuth} = require('../middleware/authMiddleware');

// user registration
router.post("/registerUser",scheamValidation.request_validation(reqValidation.registerUser), registerUser);
router.post("/loginUser",scheamValidation.request_validation(reqValidation.loginUser),loginUser);
router.post("/userLogout",isAuth, logoutUser);
router.post("/getNewAccessToken",getNewAccessToken);





module.exports = router