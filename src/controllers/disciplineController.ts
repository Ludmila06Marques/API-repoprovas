import { Request , Response } from "express"
import * as discplineService from "../services/disciplineService.js"
import { CreateDisciplineType } from "../type/disciplineType.js"



export async function getAllDisciplines(req:Request ,res:Response){
   
    const result = await discplineService.getAllDisciplines()
    console.log(result ,'con')
    res.send(result).status(200)
 
}
export async function getOneDiscipline(req:Request ,res:Response){
    const disciplineName= req.params.name
   
    const result = await discplineService.findDisciplineByName(disciplineName)

    res.send(result).status(200)
 
}

