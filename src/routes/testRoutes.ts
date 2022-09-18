import { Router } from "express";
import * as testController from "../controllers/testController.js"
import * as validateToken from "../middlewares/ validateToken.js"
import { validateTest } from "../middlewares/validateSchema.js";

const testRoute = Router();

testRoute.post("/test" ,validateToken.validateTokenFunction, validateTest, testController.insertNewTest);
testRoute.get("/test",validateToken.validateTokenFunction , testController.getAll);
testRoute.get("/testByDiscipline" ,validateToken.validateTokenFunction, testController.getTestByTerm)
testRoute.get("/testByTeacher" ,validateToken.validateTokenFunction, testController.findTestsByTeacher)
testRoute.delete("/test/:id" ,validateToken.validateTokenFunction, testController.deleteTest)


export default testRoute;