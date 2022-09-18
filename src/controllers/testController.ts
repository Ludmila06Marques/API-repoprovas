import { Request , Response } from "express"
import { CreateTestTypeInput , CreateTestType } from "../type/testType.js"
import * as testService from "../services/testService.js"
import * as testRepository from "../repositories/testRepository.js"

export async function insertNewTest(req:Request ,res:Response){
    const test:CreateTestTypeInput = req.body;
    await testService.createTest(test)
   
    res.sendStatus(201);//created
  }


export async function getTestsOrder(req:Request ,res:Response){
    const disciplineParam= req.params.discipline
    const termparam= parseInt(req.params.terms)
    const category= req.params.category

    const result = await  testService.getTestsOrder(disciplineParam, termparam,category)
 
 

  res.send(result).status(200)

}

export async function getAll(req:Request ,res:Response){

 const result = await testRepository.gelAllTests()

 res.send(result).status(200)
}

export async function getTestByTerm(req:Request ,res:Response){
 const result= await testService.getTestByTerm()

  res.send(result).status(200)
}

export async function findTestsByTeacher (req:Request ,res:Response){


  const result = await testService.findTestsByTeacher()
  res.send(result).status(200)
}