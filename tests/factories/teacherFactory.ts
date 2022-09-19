//import { faker } from "@faker-js/faker";

import { prisma } from "../../src/dbStrategy/db";

export default async function createTeacher() {
  const teacher = await prisma.teachers.create({
    data: {
      name: "Ludmila Marques"
    }
  });

  return teacher;
}