const express = require('express');
const router= express.Router();
const reqValidation = require('../utils/reqValidation');
const scheamValidation = require('../middleware/reqValidationMiddleware')
const { createTask,updateTask,deleteTask,getAllTask,getTaskById,getTaskAnalysis } =  require('../controller/TaskController');
const  {isAuth}  = require('../middleware/authMiddleware');

// Quizzes
router.route("/createTask").post(isAuth,scheamValidation.request_validation(reqValidation.createTask),createTask);
router.get("/getAllTasks",isAuth,getAllTask);
router.get("/getTaskById/:taskId",getTaskById);
router.get("/getTaskAnalytics", isAuth,getTaskAnalysis);
router.delete("/deleteTaskById/:taskId",isAuth,deleteTask);
router.route("/updateTask").put(isAuth,scheamValidation.request_validation(reqValidation.updateTask),updateTask);
 module.exports=router;