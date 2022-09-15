import { Users } from "@prisma/client"
//export type CreateUserSchema= Omit <Users , "id"| "confirmPassword">
export type CreateUserSchema= Omit <Users , "id">