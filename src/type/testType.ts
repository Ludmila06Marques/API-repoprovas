import { Tests } from "@prisma/client";

export type CreateTestType= Omit <Tests , "id">
export type  CreateTestTypeInput = {
    name: string;
    pdfUrl: string;
    categoryName: string;
    disciplineName:string;
    teacherName: string;
}