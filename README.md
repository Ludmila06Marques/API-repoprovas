# projeto20-repoprovas

npm i express cors dotenv joi express-async-errors nodemon 
ROTEIRO PARA FAZER PROJETO

- Criar um novo projeto: `npm init -y`
- Instalar as dependências: `npm i -D typescript ts-node`
- Criar o arquivo de configuração `tsconfig.json`: `npx tsc -init`

-Rodar :npm i --save-dev @types/express

-Alterar scripts:"dev": "nodemon ./src/index.ts"

{
  "compilerOptions": {
    "esModuleInterop": true,
    "module": "es6",
    "moduleResolution": "node",
    "outDir": "dist"
  },
  "ts-node": {
    "esm": true
  }
}
PRISMA
- Instalar o Prisma: `npm i prisma -D`
- Inicializar o Prisma no projeto: `npx prisma init`
- Gera as models do banco que já possa existir: `npx prisma db pull`
- Gerar uma migração: `npx prisma migrate dev`

TESTES
-npm i -D jest ts-jest typescript @types/jest

-jest.config.js: 
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node'
};

-"scripts": {
    "test": "jest --no-cache"
 }
 
 -npm i -D supertest @types/supertest
