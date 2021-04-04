import { NextFunction, Request, RequestHandler, Response } from "express";
import BaseHandler from "../utils/BaseHandler";
import JWT from "jsonwebtoken";
import { HttpCodes } from "../utils/HttpCodes";

export default class Token {
    EXPIRED_TOKEN = "TokenExpiredError";
    INVALID_TOKEN = "JsonWebTokenError";

    constructor() {}

    init(): RequestHandler {
      return async (req: Request, res: Response, next: NextFunction) => {
        try {
          const token = req.headers.authorization.split(" ")[1];
          const _userId: TokenPayload = this.validateToken(token);

          return next();
        } catch (err) {
          return this.errorResponseHandler(res, err);
        }
      }
    }

  private errorResponseHandler(res: Response, error: any) {
    switch (error.name) {
      case this.EXPIRED_TOKEN:
        return BaseHandler(res, undefined, 'User token expired', HttpCodes.AUTH_EXPIRED)
      case this.INVALID_TOKEN:
      default:
        return BaseHandler(res, undefined, 'User not authorizared', HttpCodes.UNAUTHORIZARED)
    }
  }

  private validateToken(token: string): TokenPayload {
    return JWT.verify(token, process.env.OPTUS_JWT_KEY);
  }
}
