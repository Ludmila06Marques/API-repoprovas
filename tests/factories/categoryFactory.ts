//import { faker } from "@faker-js/faker";
import { prisma } from "../../src/dbStrategy/db";

export default async function createCategory() {
  const category = await prisma.categories.create({
    data: {
      name: "COZINHA"
    }
  });

  return category;
}