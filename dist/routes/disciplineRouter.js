import { Router } from "express";
import * as disciplineController from "../controllers/disciplineController.js";
var disciplineRoute = Router();
disciplineRoute.get("/discipline", disciplineController.getAllDisciplines);
disciplineRoute.get("/discipline/:name", disciplineController.getOneDiscipline);
disciplineRoute.post("/discipline", disciplineController.insertDiscipline);
disciplineRoute["delete"]("/discipline/:name", disciplineController.deleteDiscipline);
export default disciplineRoute;
