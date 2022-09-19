import { prisma } from "../dbStrategy/db.js";
import { CreateTermType } from "../type/termType.js";


export async function findTermByNumber(number:number) {
   
    const numero=number
    return prisma.terms.findFirst({
        where:{number:numero}
    })
  }

export async function createTerm(number: number) {
    return prisma.terms.create({data:{number}})
    
}
export async function getAll(){
    return prisma.terms.findMany()
}

export async function findTermById(id:number) {
    return prisma.terms.findFirst({
        where:{id}
    })
  }

//nao tem como deletar um periodo