import { Router } from "express";
import * as categorycontroller from "../controllers/categoryController.js"
import { validateCategory } from "../middlewares/validateSchema.js";

const categoryRoute = Router();

categoryRoute.get("/category" , categorycontroller.getAllCategories);
categoryRoute.get("/category/:id" ,categorycontroller.getOneCategory);
categoryRoute.post("/category" , validateCategory ,categorycontroller.insertCategory );
//nao tem como deletar um periodo



export default categoryRoute;