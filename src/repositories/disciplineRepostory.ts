import { prisma } from "../dbStrategy/db.js";


export async function findDisciplineByName(name:string) {
    return prisma.disciplines.findFirst({
        where:{name}
    })
  }