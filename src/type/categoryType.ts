import { Categories } from "@prisma/client";

export type CreateCategoryType= Omit <Categories , "id">


