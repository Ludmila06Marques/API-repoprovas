import { Router } from "express";
import * as testController from "../controllers/testController.js";
// import { validateTokenFunction } from "../middlewares/ validateToken.js";
var testRoute = Router();
testRoute.post("/test", testController.insertNewTest);
testRoute.get("/test/:discipline/:terms/:category", testController.getTestsOrder);
export default testRoute;
