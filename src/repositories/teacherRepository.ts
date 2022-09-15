import { prisma } from "../dbStrategy/db.js";


export async function findTeacherByName(name:string) {
    return prisma.teachers.findFirst({
        where:{name}
    })
  }

