                                                       Category routes

GET /category :
-Caso sucesso : recebe status 200 com todas as categorias cadastradas
-Caso nao existam disciplinas : recebe status 404

GET /category/:id :
-Caso sucesso : recebe status 200 com todas as categorias cadastradas
-Caso id passado nao exista : 404

POST /category :
body{
  name: "nome da categoria"
 
  }
-Caso a category ja exista : recebe status 409
-Caso sucesso: recebe status 201

----------------------------------------------------------------------------------------------------------------------------------
                                                      Discipline routes

GET /discipline :
-Caso sucesso : recebe status 200 com todas as disciplinas cadastradas
-Caso nao existam disciplinas : recebe status 404

GET /discipline/:id :
-Caso sucesso : recebe status 200 com todas as disciplinas cadastradas
-Caso id passado nao exista : 404

POST /discipline :
body{
  name: "nome da disciplina"
  term:"numero do periodo"
  }
-Caso a disciplina ja exista : recebe status 409
-Caso o periodo nao exista : recebe status 404
-Caso sucesso: recebe status 201

DELETE  /discipline/:id :
-Caso sucesso : recebe status 200 e deleta a disciplina 
-Caso id passado nao exista : 404
 ----------------------------------------------------------------------------------------------------------------------------------
                                                                Term routes


GET /term :
-Caso sucesso : recebe status 200 com todas os termos
-Caso nao existam disciplinas : recebe status 404

GET /term/:id :
-Caso sucesso : recebe status 200 com todas  os termos cadastradas
-Caso id passado nao exista : 404

POST /term :
body{
  name: "nome da disciplina"
  term:"numero do periodo"
  }
-Caso a disciplina ja exista : recebe status 409
-Caso o periodo nao exista : recebe status 404
-Caso sucesso: recebe status 201

DELETE  /term/:id :
-Caso sucesso : recebe status 200 e deleta o termo
-Caso id passado nao exista : 404

-----------------------------------------------------------------------------------------------------------------------------------
                                                            Test routes

GET /testByDiscipline :
-Caso sucesso : recebe status 200 com os dados 
-Caso nao existam testes: recebe status 404


GET /testByTeacher :
-Caso sucesso : recebe status 200 com os dados 
-Caso nao existam testes: recebe status 404

GET /test :
-Caso sucesso : recebe status 200 com todas os cadastradas
-Caso nao existam testes : recebe status 404

POST /test :
body{
  name:"",
  pdfUrl:"", 
  categoryName:"",
  disciplineName:"",
  teacherName:""
}
-Caso sucesso: recebe status 201
-Caso algum campo nao exista : recebe status 404

DELETE  /test/:id :
-Caso sucesso : recebe status 200 e deleta a disciplina 
-Caso id passado nao exista : 404


-----------------------------------------------------------------------------------------------------------------------------------
                                                                User routes 

POST /login :
body{
 email: "",
  password: ""
 }
-Caso usuario nao exista ou senha errada  : recebe 422
-Caso sucesso : recebe o token e status 200

POST /sign-up :
body{
  email: "",
  password: "",    
 confirmPassword:""
 }
 -Caso as senhas nao coincidam : 422
 -Caso sucesso : recebe 201
