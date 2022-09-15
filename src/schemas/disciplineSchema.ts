import Joi from "joi";
import { CreateDisciplineType } from "../type/disciplineType";


export const disciplineSchema = Joi.object({
  name: Joi.string().required(),
  termNumber:Joi.number().required
});
