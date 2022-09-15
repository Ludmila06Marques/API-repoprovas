import { Users } from "@prisma/client"
//export type CreateUserType= Omit <Users , "id"| "confirmPassword">
export type CreateUserType= Omit <Users , "id">

export interface UserConfirmPassword {
    email: string;
    password: string;
    confirmPassword:string;
  }