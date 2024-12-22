import express from 'express';
const router = express.Router();

import * as UsersController from "../app/controllers/users/UsersController.js";


// Users Route
router.post('/Registration', UsersController.Registration);
router.post('/Login', UsersController.Login);

export default router;