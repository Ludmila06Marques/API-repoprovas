import Joi from "joi";



export const testSchema = Joi.object({
  name: Joi.string().required(),
  pdfUrl: Joi.string().required(), 
  categoryName:Joi.string().required(),
  disciplineName:Joi.string().required(),
  teacherName:Joi.string().required()
});


