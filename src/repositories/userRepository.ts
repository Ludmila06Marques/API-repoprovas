import { prisma } from "../dbStrategy/db.js";
import * as userSchema from "../type/userType.js"


export async function findUserByEmail(email:string){

    return prisma.users.findUnique({where:{email}})

}
export async function findById(id: number) {
  return prisma.users.findUnique({
    where: { id }
  });
}
export async function insertUser(user:userSchema.CreateUserSchema){

    return prisma.users.create({data:user})

}