//import { faker } from "@faker-js/faker";
import supertest from "supertest";
import app from "../src/index";
import { prisma } from "../src/dbStrategy/db";
import { createTheatreTeacherAndTest, createTheatreTwoTeachersAndTwoTests, execute } from "./factories/theatreFactory";
import userFactory from "./factories/userFactory";
import { tokenFactory } from "./factories/tokenFactory";
import { CreateTestTypeInput  , CreateTestType } from "../src/type/testType";

beforeEach(async() => {
  await execute(); 
});



describe("Testa cadastro e login do usuario", () => {
  it("POST /sign-up :Deve retornar status 201 e criar o usuario", async () => {
    const user = {
      email: "lalala@driven.com",
      password: "1234",
      confirmPassword:"1234"
    };

 
  const restul = await supertest(app).post('/sign-up').send(user)

  expect(restul.status).toBe(201)
  })
  it("POST /Login :Deve retornar status 200 e o token no body", async () => {
    const user = {
        email: "lalala@driven.com",
        password: "1234"
    };

    userFactory(user);//Criei o usuario
    const restul = await supertest(app).post('/login').send(user)
    const { token } = restul.body;
    expect(token).not.toBeNull();
    expect(restul.status).toBe(200)

  });
})


describe("Testa o retorno do body com a rota dos testes", () => {
    it("GET /testByDiscipline : Deve retornar status 200 com os testes separados por disciplina", async() => {
      await createTheatreTwoTeachersAndTwoTests();
      const token = await tokenFactory();
  
      const result = await supertest(app)
        .get("/testByDiscipline")
        .set("Authorization", `Bearer ${token}`);

        expect(result.body).not.toBeNull(); 
        expect(result.status).toBe(200)
    })
    it("GET /testByTeacher : Deve retornar status 200 com os testes separados por professor", async() => {
        await createTheatreTwoTeachersAndTwoTests();
        const token = await tokenFactory();
        const result = await supertest(app)
          .get("/testByTeacher")
          .set("Authorization", `Bearer ${token}`);
        
       
        expect(result.body).not.toBeNull(); 
        expect(result.status).toBe(200)
      });
        
  it("POST /test : Deve retornar status 201 para a criacao correta do item", async() => {
    const {category, discipline, teacher} = await createTheatreTeacherAndTest();

    const test: CreateTestTypeInput = {
      name:"Bife acebolado",
      pdfUrl: "https://www.notion.so/Projeto-20-RepoProvas-823933c2d35947f5a5018421332e8246",
      categoryName: category.name,
      disciplineName: discipline.name,
      teacherName: teacher.name}

    const token = await tokenFactory();

    const result = await  supertest(app)
      .post("/test")
      .set("Authorization", `Bearer ${token}`)
      .send(test)

    expect(result.status).toBe(201);
  
});
})
afterAll(async () => {
    await prisma.$disconnect();
  });

