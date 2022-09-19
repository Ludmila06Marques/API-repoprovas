//import { faker } from "@faker-js/faker";

import { prisma } from "../../src/dbStrategy/db";

export default async function createDiscipline(termId: number) {
  const discipline = await prisma.disciplines.create({
    data: {
     
      name: "Bife com arroz e feijao",
      termId
    }
  });

  return discipline;
}