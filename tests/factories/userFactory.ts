import bcrypt from "bcrypt";
import { prisma } from "../../src/dbStrategy/db";
import { CreateUserType } from "../../src/type/userType";

export default async function userFactory(user: CreateUserType) {
  return prisma.users.create({
    data: {
      ...user,
      password: bcrypt.hashSync(user.password, 10),
    },
  });
}