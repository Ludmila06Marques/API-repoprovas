import { Router } from "express";
import * as termcontroller from "../controllers/termController.js"
import { validateTerm } from "../middlewares/validateSchema.js";
import * as validateToken from "../middlewares/ validateToken.js"

const termRoute = Router();

termRoute.get("/term" , validateToken.validateTokenFunction, termcontroller.getAllTerms);
termRoute.get("/term/:id" , validateToken.validateTokenFunction,termcontroller.getOneTerm);
termRoute.post("/term" ,  validateToken.validateTokenFunction,validateTerm ,termcontroller.insertTerm );
//nao tem como deletar um periodo



export default termRoute;