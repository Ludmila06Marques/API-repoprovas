import { Router } from "express";
import * as testController from "../controllers/testController.js"
// import { validateTokenFunction } from "../middlewares/ validateToken.js";
import { validateTest } from "../middlewares/validateSchema.js";

const testRoute = Router();

testRoute.post("/test" ,validateTest, testController.insertNewTest);
testRoute.get("/test/:discipline/:terms/:category", testController.getTestsOrder)
testRoute.get("/testByDiscipline" , testController.getTestByTerm)
testRoute.get("/testByTeacher" , testController.findTestsByTeacher)


export default testRoute;