import { prisma } from "../dbStrategy/db.js";


export async function findTeachersDisciplineById( teacherId:number,disciplineId:number) {
 return prisma.teachersDisciplines.findFirst({
        where:{teacherId,disciplineId}
       
    })
  
    
  }