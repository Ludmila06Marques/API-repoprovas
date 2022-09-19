import * as categoryRepository from "../repositories/categoryRepository.js"
import { CreateCategoryType } from "../type/categoryType.js"
import { CreateTermTypeInput } from "../type/termType.js"
import { failNotFound, failSchema, failsConflict } from "../utils/errorUtils.js"



export async function getAllCategories(){

    const result = await categoryRepository.getAll()
 
    if(!result) throw failNotFound('Category does not exist')
  
    return result
     
        
 }

export async function findCategoryById(id:number){
    if(isNaN(id)) throw failNotFound('Id must be a number')
    
        const result= await categoryRepository.findCategoryById(id)
         if(!result) throw failNotFound('Category does not exist')
    
        return result
        
    }
    
export async function insertCategory(category:CreateCategoryType) {
      
       
        const categoryData = await categoryRepository.findCategoryByName(category.name)
        if(categoryData) throw  failsConflict('Term already exist')
    
     
       return  await categoryRepository.createCategory(category)
        
       
    }
    
//nao tem como deletar um periodo