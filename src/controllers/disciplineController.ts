import { Request , Response } from "express"
import * as discplineService from "../services/disciplineService.js"
import { CreateDisciplineInput } from "../type/disciplineType.js"




export async function getAllDisciplines(req:Request ,res:Response){
   
    const result = await discplineService.getAllDisciplines()
    res.send(result).status(200)
 
}
export async function getOneDiscipline(req:Request ,res:Response){
    const idDiscipline= parseInt(req.params.id)
   
    const result = await discplineService.findDisciplineById(idDiscipline)

    res.send(result).status(200)
 
}

export async function insertDiscipline(req:Request ,res:Response) {
    const discipline:CreateDisciplineInput=req.body
    
     await discplineService.insertDiscipline(discipline)
    res.sendStatus(201)
}

export async function deleteDiscipline(req:Request ,res:Response) {
    const idDiscipline= parseInt(req.params.id)

     await discplineService.deleteDiscipline(idDiscipline)
     res.sendStatus(200);

    
}