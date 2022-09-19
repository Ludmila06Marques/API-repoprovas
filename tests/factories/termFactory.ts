//import { faker } from "@faker-js/faker";

import { prisma } from "../../src/dbStrategy/db";

export default async function createTerms() {
  await prisma.terms.createMany({
    data: [
      { number: 1 }, 
      { number: 2 },
      { number: 3 } ,
      { number: 4} ,
      { number: 5} ,
      { number: 6 } 
    ],
    skipDuplicates: true,
  });

  return await prisma.terms.findMany();
}