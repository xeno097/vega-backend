import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandlerMiddleware } from "./middlewares/error.middleware";
dotenv.config();

const app = express();
app.use(cors());

app.use(errorHandlerMiddleware);

export { app };
