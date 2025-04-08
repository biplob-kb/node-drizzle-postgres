import { NextFunction, Request, Response } from "express";
import { successResponse } from "../../utils/responseSender";

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return successResponse(res, {
      statusCode: 200,
      message: "All products get successfully",
      data: [],
    });
  } catch (error) {
    next(error);
  }
};

const productController = { getAllProducts };
export default productController;
