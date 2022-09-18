import { prisma } from "../dbStrategy/db.js";


export async function findTermByNumber(number:number) {
   
    const numero=number
    return prisma.terms.findFirst({
        where:{number:numero}
    })
  }


