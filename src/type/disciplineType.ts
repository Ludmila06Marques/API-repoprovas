import { Disciplines } from "@prisma/client";


export type CreateDisciplineType= Omit <Disciplines , "id">

