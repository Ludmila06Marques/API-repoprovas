
import * as disciplineRepo from "../repositories/disciplineRepostory.js"
import { CreateDisciplineType } from "../type/disciplineType.js"
import { failsConflict } from "../utils/errorUtils.js"




export async function getAllDisciplines(){

return await disciplineRepo.getAllDisciplines()
 
    
}
export async function findDisciplineByName(name:string){

    return await disciplineRepo.findDisciplineByName(name)
    
}

