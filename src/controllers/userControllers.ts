import { Request , Response } from "express"
import { createUser , loginUser} from "../services/userService.js";
import { UserConfirmPassword } from "../type/userType.js";

export async function login(req:Request ,res:Response){
  const user = req.body;
  
  const token = await loginUser(user);
  res.send({token}).status(200);
}

export async function signup(req:Request ,res:Response){
  const user:UserConfirmPassword = req.body;
  const userFormated={
    email:user.email,
    password:user.password
  }
  await createUser(userFormated);
  res.sendStatus(201);
}