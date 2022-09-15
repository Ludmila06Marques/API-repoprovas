import Joi from "joi";
import * as userSchemaType from "../type/userType.js"


export const userSchema = Joi.object<userSchemaType.UserConfirmPassword> ({
  email: Joi.string().email().required(),
  password: Joi.string().required(),    
 confirmPassword:Joi.string().valid(Joi.ref('password')).required()

});