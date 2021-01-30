import { validationResult} from "express-validator";
import { HttpCodes } from "../utils/HttpCodes";
import {Request, Response, RequestHandler, NextFunction} from "express";
import BaseHandler from "../utils/BaseHandler";

export default function(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (errors.isEmpty()) return next();

  return BaseHandler(res, errors.array(), "Validation Error", HttpCodes.BAD_REQUEST);
}