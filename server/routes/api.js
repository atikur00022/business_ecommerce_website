import express from 'express';
const router = express.Router();

import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import * as UsersController from "../app/controllers/users/UsersController.js";


// Users Route
router.post('/Registration', UsersController.Registration);
router.post('/Login', UsersController.Login);
router.get('/Details', AuthMiddleware, UsersController.Details);
router.post('/EmailVerify/:email', UsersController.EmailVerify);
router.post('/VerifyOtp/:email/:otp', UsersController.VerifyOtp);
router.post('/ResetPassword', UsersController.ResetPassword);
router.post('/ProfileUpdate', AuthMiddleware , UsersController.ProfileUpdate);

export default router;