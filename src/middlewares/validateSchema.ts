import { NextFunction, Request, Response } from "express";
import { testSchema  } from "../schemas/testSchema.js";
import { disciplineSchema } from "../schemas/disciplineSchema.js";
import { failSchema } from "../utils/errorUtils.js";
import { termSchema } from "../schemas/termSchema.js";
import { categorySchema } from "../schemas/categorySchema.js";
import { CreateCategoryType } from "../type/categoryType.js";
import { CreateTermTypeInput } from "../type/termType.js";
import { CreateDisciplineInput } from "../type/disciplineType.js";
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
  const discipline: CreateDisciplineInput = req.body
  console.log(req.body)
  const validation = disciplineSchema.validate(discipline)
  if (validation.error) {
    throw failSchema('Wrong schema')
  }
  next()
}

export function validateTerm(req : Request, res:Response, next:NextFunction) {
  const term:CreateTermTypeInput = req.body
  console.log(req.body)
  const validation = termSchema.validate(term)
  if (validation.error) {
    throw failSchema('Wrong schema')
  }
  next()
}

export function validateCategory(req : Request, res:Response, next:NextFunction) {
  const category: CreateCategoryType = req.body
  console.log(req.body)
  const validation = categorySchema.validate(category)
  if (validation.error) {
    throw failSchema('Wrong schema')
  }
  next()
}
