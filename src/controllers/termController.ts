import { Request , Response } from "express"
import * as termservice from "../services/termService.js"
import { CreateTermTypeInput } from "../type/termType"
import { CreateTestTypeInput } from "../type/testType.js"



export async function getAllTerms(req:Request ,res:Response){
   
    const result = await termservice.getAllTerms()
    res.send(result).status(200)
 
}

export async function getOneTerm(req:Request ,res:Response){
    const idTerm= parseInt(req.params.id)
   
    const result = await  termservice.findTermById(idTerm)

    res.send(result).status(200)
 
}
export async function insertTerm(req:Request ,res:Response) {
    const term:CreateTermTypeInput=req.body
    
     await termservice.insertTerm(term)
    res.sendStatus(201)
}
//nao tem como deletar um periodo