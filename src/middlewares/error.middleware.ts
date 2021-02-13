import { Request, Response, NextFunction } from "express";
import { IResponsePayload } from "../common/interfaces/response-payload.interface";

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const response: IResponsePayload = {
    ok: false,
    data: null,
    errors: [{ message: "An error ocurred" }],
  };

  res.status(400).send(response);
};
