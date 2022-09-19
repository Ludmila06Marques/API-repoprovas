import * as termRepository from "../repositories/termRepository.js"
import { CreateTermTypeInput } from "../type/termType.js"
import { failNotFound, failSchema, failsConflict } from "../utils/errorUtils.js"



export async function getAllTerms(){

    const result = await termRepository.getAll()
 
    if(!result) throw failNotFound('Terms does not exist')
  
    return result
     
        
 }

export async function findTermById(id:number){
    if(isNaN(id)) throw failNotFound('Id must be a number')
    
        const result= await termRepository.findTermById(id)
         if(!result) throw failNotFound('Term does not exist')
    
        return result
        
    }
    
export async function insertTerm(term:CreateTermTypeInput) {
      
        const numberTerm= parseInt(term.number)
        const termExist = await termRepository.findTermByNumber(numberTerm)
        if(termExist) throw  failsConflict('Term already exist')
    
     
       return  await termRepository.createTerm(numberTerm)
        
       
    }
    
//nao tem como deletar um periodo