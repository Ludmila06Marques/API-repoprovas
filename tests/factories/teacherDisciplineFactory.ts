import { prisma } from "../../src/dbStrategy/db";


export default async function createTeacherDiscipline(teacherId: number, disciplineId: number) {
  const teacherDiscipline = await prisma.teachersDisciplines.create({
    data: {
      teacherId,
      disciplineId
    }
  });
  
  return teacherDiscipline;
}