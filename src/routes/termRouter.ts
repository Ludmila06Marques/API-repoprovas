import { Router } from "express";
import * as termcontroller from "../controllers/termController.js"
import { validateTerm } from "../middlewares/validateSchema.js";
import * as validateToken from "../middlewares/ validateToken.js"

const termRoute = Router();

termRoute.get("/term" , termcontroller.getAllTerms);
termRoute.get("/term/:id" ,termcontroller.getOneTerm);
termRoute.post("/term" , validateTerm ,termcontroller.insertTerm );
//nao tem como deletar um periodo



export default termRoute;