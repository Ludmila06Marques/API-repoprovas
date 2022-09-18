import { Router } from "express";
import * as disciplineController from "../controllers/disciplineController.js"
import { validateDiscipline } from "../middlewares/validateSchema.js";
import * as validateToken from "../middlewares/ validateToken.js"

const disciplineRoute = Router();

disciplineRoute.get("/discipline" ,validateToken.validateTokenFunction, disciplineController.getAllDisciplines);
disciplineRoute.get("/discipline/:id" ,validateToken.validateTokenFunction, disciplineController.getOneDiscipline);
disciplineRoute.post("/discipline" ,validateToken.validateTokenFunction, validateDiscipline, disciplineController.insertDiscipline );
disciplineRoute.delete("/discipline/:id" ,validateToken.validateTokenFunction, disciplineController.deleteDiscipline);



export default disciplineRoute;