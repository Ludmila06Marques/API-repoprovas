import { Router } from "express";
import * as userController from '../controllers/userControllers.js'
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
const authRoute = Router();

authRoute.post("/login" , validateSchemaMiddleware, userController.login);
authRoute.post("/sign-up" ,userController.signup);

export default authRoute;