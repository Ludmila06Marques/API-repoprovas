import Joi from "joi";
export var disciplineSchema = Joi.object({
    name: Joi.string().required(),
    termNumber: Joi.number().required
});
