import {
    Request,
    Response,
    Router
  } from "express";
  import BaseHandler from "../framework/utils/BaseHandler";
  import CurrencyController from "./controller";
  import Token from "../framework/middleware/Token";
import { HttpCodes } from "../framework/utils/HttpCodes";
  
  const router = Router();
  router.use(new Token().init());
  
  router.get("/", function(req: Request, res: Response) {
    CurrencyController
      .getPage(req.query)
      .then(response => BaseHandler(res, response, "Currencies list"))
      .catch(err => BaseHandler(res, err, "Currencies list", HttpCodes.INTERNAL_ERROR))
  });
  
  router.get("/:id", function(req: Request, res: Response) {
    CurrencyController
      .getById(req.params.id)
      .then(response => BaseHandler(res, response, "Currencies list"))
      .catch(err => BaseHandler(res, err, "Currencies list", HttpCodes.INTERNAL_ERROR))
  });
  
  router.post("/", function(req: Request, res: Response) {
    CurrencyController
      .create(req.body)
      .then(response => BaseHandler(res, response, "Currency created"))
      .catch(err => BaseHandler(res, err, "Currency created", HttpCodes.INTERNAL_ERROR))
  });
  
  router.put("/:id", function(req: Request, res: Response) {
    CurrencyController
      .update(req.params.id, req.body)
      .then(response => BaseHandler(res, response, "Currency updated"))
      .catch(err => BaseHandler(res, err, "Currency updated", HttpCodes.INTERNAL_ERROR))
  });
  
  router.delete("/:id", function(req: Request, res: Response) {
    CurrencyController
      .delete(req.params.id)
      .then(response => BaseHandler(res, response, "Currency deleted"))
      .catch(err => BaseHandler(res, err, "Currency deleted", HttpCodes.INTERNAL_ERROR))
  });
  
  export default router;
  