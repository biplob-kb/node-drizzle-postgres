import express, { NextFunction, Request, Response } from "express";
import createError, { HttpError } from "http-errors";
import { errorResponse } from "./utils/responseSender";
import router from "./routes";

const app = express();

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Ts server is running...");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404, "Route not found"));
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
    stack: err.stack,
  });
});

export default app;
