
import { prisma } from "../dbStrategy/db.js";
import { CreateTestType } from "../type/testType.js";


export async function insertTest(test:CreateTestType){

    return prisma.tests.create({data:test})

}

export async function gelAllTests(){
    return prisma.tests.findMany()
}

export async function getTestByUrl(pdfUrl:string){
    return prisma.tests.findFirst({where:{pdfUrl}})
}
