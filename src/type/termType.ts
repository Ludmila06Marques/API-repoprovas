import { Terms } from "@prisma/client";

export type CreateTermType= Omit <Terms , "id">


export type  CreateTermTypeInput = {
    number: string
}

