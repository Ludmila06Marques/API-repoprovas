
import { prisma } from "../dbStrategy/db.js";
import { CreateTestType } from "../type/testType.js";


export async function insertTest(test:CreateTestType){

    return prisma.tests.create({data:test})

}

export async function gelAllTests(){
    const resultTests= prisma.tests.findMany()
    
  
    return resultTests
}

export async function getTestByUrl(pdfUrl:string){
    return prisma.tests.findFirst({where:{pdfUrl}})
}
export async function getTestById(id:number){
    return prisma.tests.findFirst({where:{id}})
}


export async function findTestsByDisciplineId(){
    const result= await prisma.terms.findMany({
        select:{
            number:true,
            Disciplines:{
                select:{
                    name:true,
                    TeachersDisciplines:{
                        select:{
                            teacher:{
                                select:{
                                    name:true
                                }
                            }, Tests:{
                                select:{
                                    name:true,
                                    pdfUrl:true,
                                    category:{
                                        select:{
                                            name:true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    return result
}
   
export async function findTestsByTeacher(){

    const result = await prisma.teachers.findMany({
        select:{
            name:true,
            TeachersDisciplines:{
                select:{
                    Tests:{
                        select:{
                            category:{
                                select:{
                                    name:true,
                                    Tests:{
                                        select:{
                                            name:true,
                                            pdfUrl:true,
                                            teachersDiscipline:{
                                                select:{
                                                    discipline:{
                                                        select:{
                                                            name:true
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    return result
}

export async function deleteTest(id:number){
    return prisma.tests.delete({where:{id}})
}

