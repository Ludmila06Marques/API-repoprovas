import { Request , Response } from "express"
import * as categoryService from "../services/categoryService.js"
import { CreateCategoryType } from "../type/categoryType.js"



export async function getAllCategories(req:Request ,res:Response){
   
    const result = await categoryService.getAllCategories()
    res.send(result).status(200)
 
}

export async function getOneCategory(req:Request ,res:Response){
    const idCategory= parseInt(req.params.id)
   
    const result = await  categoryService.findCategoryById(idCategory)

    res.send(result).status(200)
 
}
export async function insertCategory(req:Request ,res:Response) {
    const category:CreateCategoryType=req.body
    
     await categoryService.insertCategory(category)
    res.sendStatus(201)
}
//nao tem como deletar um periodo