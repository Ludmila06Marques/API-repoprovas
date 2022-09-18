import { Router } from "express";
import * as disciplineController from "../controllers/disciplineController.js"
import { validateDiscipline } from "../middlewares/validateSchema.js";

const disciplineRoute = Router();

disciplineRoute.get("/discipline" , disciplineController.getAllDisciplines);
disciplineRoute.get("/discipline/:id" , disciplineController.getOneDiscipline);
disciplineRoute.post("/discipline" ,validateDiscipline, disciplineController.insertDiscipline );
disciplineRoute.delete("/discipline/:id" , disciplineController.deleteDiscipline);



export default disciplineRoute;