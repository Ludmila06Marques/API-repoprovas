import { Tests} from "@prisma/client";
import dotenv from "dotenv";
import { findUserByEmail , insertUser , findById  } from "../repositories/userRepository.js";
import { failUnauth, failNotFound , failsConflict } from "../utils/errorUtils.js";
import * as userSchema from "../type/userType.js"
import * as testType from "../type/testType"
import * as testRepository from "../repositories/testRepository"

dotenv.config()

export async function createTest(test:testType.CreateTestType){



    await testRepository.insertTest({...test});
    
}

  //Tests = {
  //  id: number;
    //name: string;
  //  pdfUrl: string;
   // categoryId: number;==>ir na tabela de categories e achar o id da categoria que possui o nome informado pelo usuario
   // teachersDisciplineId: number;==> ir na tabela disciplinas e achar o id da disciplina com o nome informado , ir na tabela tabela teachers e achar o professor que possui o id com o nome informado ,ir na tabela teachersDisciplines e achar o id que possua o ir da tabela disciples e o id da tabela teacher 
//}