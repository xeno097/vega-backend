import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandlerMiddleware } from "./middlewares/error.middleware";
import { NotFoundError } from "./errors/not-found.error";
dotenv.config();

const app = express();
app.use(cors());

app.all("*", (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandlerMiddleware);

export { app };
