import { Disciplines } from "@prisma/client";


export type CreateDisciplineType= Omit <Disciplines , "id">

export type  CreateDisciplineInput = {
    name: string;
    term: string
}

