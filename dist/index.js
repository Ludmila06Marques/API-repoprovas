import express, { json } from "express";
import dotenv from "dotenv";
import "express-async-errors";
import cors from "cors";
dotenv.config();
import router from "./routes/router.js";
import handleErrorsMiddleware from "./middlewares/error.js";
var app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(handleErrorsMiddleware);
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Server is up on port: ".concat(port));
});
