import { Response } from "express";

type TErrorRes<T> = {
  statusCode?: number;
  message?: string;
  stack?: T;
};

type TPagination = {
  totalRecords: number;
  currentPage: number;
  totalPages: number;
};

type TSuccessRes<T> = {
  statusCode?: number;
  message?: string;
  meta?: TPagination;
  data?: T;
};

export const errorResponse = <T>(
  res: Response,
  { statusCode = 500, message = "Internal server error", stack }: TErrorRes<T>
) => {
  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message,
    stack: stack || undefined,
  });
};

export const successResponse = <T>(
  res: Response,
  { statusCode = 200, message, meta, data }: TSuccessRes<T>
) => {
  res.status(statusCode).json({
    success: true,
    message: message || undefined,
    meta: meta || undefined,
    data: data || undefined,
  });
};
