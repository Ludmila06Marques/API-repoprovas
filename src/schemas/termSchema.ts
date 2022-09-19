import Joi from "joi";



export const termSchema = Joi.object({
 number:Joi.number().required()
});
