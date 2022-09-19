import Joi from "joi";



export const disciplineSchema = Joi.object({
  name: Joi.string().required(),
 term:Joi.number().required()
});
