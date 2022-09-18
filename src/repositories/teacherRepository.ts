import { prisma } from "../dbStrategy/db.js";


export async function findTeacherByName(name:string) {
    return prisma.teachers.findFirst({
        where:{name}
    })
  }
  export async function findTeacherById(id:number) {
    return prisma.teachers.findFirst({
        where:{id}
    })
  }

