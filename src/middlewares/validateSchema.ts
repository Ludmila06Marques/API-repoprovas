import { NextFunction, Request, Response } from "express";
import { testSchema } from "../schemas/testSchema.js";

export function validateTest(req : Request, res:Response, next:NextFunction) {
  const test = req.body
  console.log(req.body)
  const validation = testSchema.validate(test)
  if (validation.error) {
    return res.sendStatus(422)
  }

  next()
}
