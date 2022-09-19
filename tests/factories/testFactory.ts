//import { faker } from "@faker-js/faker";

import { prisma } from "../../src/dbStrategy/db";

export default async function createTest(categoryId: number, teachersDisciplineId: number) {
  const test = await prisma.tests.create({
    data: {
      categoryId,
    teachersDisciplineId,
      name: "Como fazer um bide",
      pdfUrl: "https://www.paneladevo.com.br/pratos-salgados/bife-acebolado/?print=pdf"
    }
  })

  return test;
}