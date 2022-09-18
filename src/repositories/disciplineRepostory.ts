import { prisma } from "../dbStrategy/db.js";
import { CreateDisciplineType } from "../type/disciplineType.js";


export async function findDisciplineById(id:number) {
    return prisma.disciplines.findFirst({
        where:{id}
    })
  }

export async function findDisciplineByName(name:string) {
    return prisma.disciplines.findFirst({
        where:{name}
    })
  }
export async function getAllDisciplines() {
    
   return prisma.disciplines.findMany() 


   }

export async function createDiscipline(discipline:CreateDisciplineType) {
    return prisma.disciplines.create({
      data: {...discipline}
    })
    
   }
export async function deleteDiscipline(id:number) {
  return prisma.disciplines.delete({where:{id}})
  
 }
