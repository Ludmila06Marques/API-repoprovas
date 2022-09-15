import { Router } from "express";
import * as disciplineController from "../controllers/disciplineController.js"

const disciplineRoute = Router();

disciplineRoute.get("/discipline" , disciplineController.getAllDisciplines);
disciplineRoute.get("/discipline/:name" , disciplineController.getOneDiscipline);



export default disciplineRoute;