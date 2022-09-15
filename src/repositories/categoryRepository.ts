import { prisma } from "../dbStrategy/db.js";


export async function findCategoryByName(name:string) {
    console.log("aq")
   const result=   prisma.categories.findFirst({
        where:{name}
    })
    console.log(result)
    return result
  }

 
