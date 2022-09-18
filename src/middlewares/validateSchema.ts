import { NextFunction, Request, Response } from "express";
import { testSchema  } from "../schemas/testSchema.js";
import { disciplineSchema } from "../schemas/disciplineSchema.js";
import { failSchema } from "../utils/errorUtils.js";

export function validateTest(req : Request, res:Response, next:NextFunction) {
  const test = req.body
  console.log(req.body)
  const validation = testSchema.validate(test)
  if (validation.error) {
    throw failSchema('Wrong schema')
  }

  next()
}

export function validateDiscipline(req : Request, res:Response, next:NextFunction) {
  const discipline = req.body
  console.log(req.body)
  const validation = disciplineSchema.validate(discipline)
  if (validation.error) {
    throw failSchema('Wrong schema')
  }
  next()
}
