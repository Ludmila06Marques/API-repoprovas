import { Router } from "express";
import * as testController from "../controllers/testController.js"
import { validateTokenFunction } from "../middlewares/ validateToken.js";

const testRoute = Router();

testRoute.post("/test" ,validateTokenFunction , testController.insertNewTest);


export default testRoute;