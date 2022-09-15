import { prisma } from "../dbStrategy/db.js";


export async function findCategoryByName(name:string) {
    
    return prisma.categories.findFirst({
        where:{name}
    })
  }