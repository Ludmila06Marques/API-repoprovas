import { prisma } from "../dbStrategy/db.js";
import { CreateTestType } from "../type/testType.js";


export async function insertTest(test:CreateTestType){

    return prisma.tests.create({data:test})

}