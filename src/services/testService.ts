
import * as testType from "../type/testType"
import * as testRepository from "../repositories/testRepository.js"
import { failsConflict , failNotFound } from "../utils/errorUtils.js";
import * as discipline from "../repositories/disciplineRepostory.js"
import * as categoryRepo from "../repositories/categoryRepository.js"
import * as teacher from "../repositories/teacherRepository.js"
import * as teachersDiscipline from "../repositories/teachersDisciplineRepository.js"
import { CreateTestType } from "../type/testType";



export async function createTest(test:testType.CreateTestTypeInput){
 
  const testExist= await testRepository.getTestByUrl(test.pdfUrl)
  if(testExist) throw failsConflict("Test already exist");


  const categoryId= await categoryRepo.findCategoryByName (test.categoryName)
  const disciplineId= await discipline.findDisciplineByName (test.disciplineName)
  const teacherId=await teacher.findTeacherByName (test.teacherName)

  if(categoryId=== null || disciplineId ===null||teacherId ===null) throw  failNotFound("Algum campo nao existe ")
  const teachersDisciplineId= await teachersDiscipline.findTeachersDisciplineById (teacherId.id,disciplineId.id)

  const testFormated : CreateTestType={
    name:test.name,
    pdfUrl: test.pdfUrl,
    categoryId:categoryId.id,
    teachersDisciplineId:teachersDisciplineId.id
  }
  

   return await testRepository.insertTest({...testFormated});
    
}

export async function getTestByTerm(){
 
  return await testRepository.findTestsByDisciplineId()

}

export async function findTestsByTeacher(){
  return await testRepository.findTestsByTeacher()
}