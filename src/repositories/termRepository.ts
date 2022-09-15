import { prisma } from "../dbStrategy/db.js";


export async function findTermByNumber(number:number) {
    return prisma.terms.findFirst({
        where:{number}
    })
  }
