//import { faker } from "@faker-js/faker";

import { prisma } from "../../src/dbStrategy/db";

export default async function createSecondTeacher() {
  const teacher = await prisma.teachers.create({
    data: {
      name: "Gustavo Thomaz"
    }
  });

  return teacher;
}