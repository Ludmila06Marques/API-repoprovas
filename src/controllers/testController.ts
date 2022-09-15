import { Request , Response } from "express"
import * as category from "../repositories/categoryRepository.js"
import * as discipline from "../repositories/disciplineRepostory.js"
import * as teacher from "../repositories/teacherRepository.js"
import * as teachersDiscipline from "../repositories/teachersDisciplineRepository.js"
import * as testRepo from "../repositories/testRepository.js"
import { CreateTestTypeInput } from "../type/testType.js"




export async function insertNewTest(req:Request ,res:Response){
    const test:CreateTestTypeInput = req.body;

    const categoryId= await category.findCategoryByName (test.categoryName)
    const disciplineId= await discipline.findDisciplineByName (test.disciplineName)
    const teacherId=await teacher.findTeacherByName (test.teacherName)

   

    const teachersDisciplineId= await teachersDiscipline.findTeachersDisciplineById (teacherId.id,disciplineId.id)
   

    const testFormated={
      name:test.name,
      pdfUrl: test.pdfUrl,
      categoryId:categoryId.id,
      teachersDisciplineId:teachersDisciplineId.id
    }
    


    await testRepo.insertTest(testFormated);
    res.sendStatus(201);
  }

