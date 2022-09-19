//import { faker } from "@faker-js/faker";
import { CreateUserType } from "../../src/type/userType";

export default function userBodyFactory(): CreateUserType {
  return {
    email: "lala@driven.com",
    password: "1234",
  };
}