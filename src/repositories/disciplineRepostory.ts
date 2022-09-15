import { prisma } from "../dbStrategy/db.js";



export async function findDisciplineByName(name:string) {
    return prisma.disciplines.findFirst({
        where:{name}
    })
  }
  export async function getAllDisciplines() {
    
    const result= prisma.disciplines.findMany() 
console.log(result)
return result
   }
 
