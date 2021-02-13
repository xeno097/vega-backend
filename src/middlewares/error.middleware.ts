import { Request, Response, NextFunction } from "express";

const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(400).send({
    ok: false,
    data: {},
    errors: [{ message: "An error ocurred" }],
  });
};
