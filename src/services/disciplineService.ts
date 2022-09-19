
import * as disciplineRepo from "../repositories/disciplineRepostory.js"
import { CreateDisciplineInput } from "../type/disciplineType.js"
import { failNotFound, failSchema, failsConflict } from "../utils/errorUtils.js"
import * as termRepository from "../repositories/termRepository.js"

export async function getAllDisciplines(){

    const result = await disciplineRepo.getAllDisciplines()
 
    if(!result) throw failNotFound('Disciplines does not exist')
  
    return result
 
    
}
export async function findDisciplineById(id:number){
    if(isNaN(id)) throw failNotFound('Id must be a number')

    const result= await disciplineRepo.findDisciplineById(id)
     if(!result) throw failNotFound('Discipline does not exist')

    return result
    
}

export async function insertDiscipline(discipline:CreateDisciplineInput) {
  
    const number= parseInt(discipline.term)
    const termExist = await termRepository.findTermByNumber(number)
    if(!termExist) throw failNotFound('Term does not exist')

    const disciplineExist = await disciplineRepo.findDisciplineByName(discipline.name)
    if(disciplineExist) throw failsConflict('Discipline already exists')

    const disciplineFormat={
        name:discipline.name,
        termId:termExist.id
    }

   return  await disciplineRepo.createDiscipline(disciplineFormat)
    
   
}

export async function deleteDiscipline(id:number) {

    if(isNaN(id)) throw failNotFound('Id must be a number')
     
    const result= await disciplineRepo.findDisciplineById(id)
    if(!result) throw failNotFound('Discipline does not exist')

    return await disciplineRepo.deleteDiscipline(id)

    
}