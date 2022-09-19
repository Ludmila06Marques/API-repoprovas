import { prisma } from "../dbStrategy/db.js";
import { CreateCategoryType } from "../type/categoryType.js";


export async function findCategoryByName(name:string) {
    console.log("aq")
   const result=   prisma.categories.findFirst({
        where:{name}
    })
    console.log(result)
    return result
  }

  export async function createCategory(category:CreateCategoryType) {
    return prisma.categories.create({
      data:
      {...category}})
    
}
export async function getAll(){
    return prisma.categories.findMany()
}

export async function findCategoryById(id:number) {
    return prisma.categories.findFirst({
        where:{id}
    })
  }

//nao tem como deletar uma categoria
