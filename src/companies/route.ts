import {
    Request,
    Response,
    Router
  } from "express";
  import BaseHandler from "../framework/utils/BaseHandler";
  import CompanyController from "./controller";
  import Token from "../framework/middleware/Token";
import { HttpCodes } from "../framework/utils/HttpCodes";
  
  const router = Router();
  router.use(new Token().init());
  
  router.get("/", function(req: Request, res: Response) {
    CompanyController
      .getPage(req.query)
      .then(response => BaseHandler(res, response, "Companies list"))
      .catch(err => BaseHandler(res, err, "Companies list", HttpCodes.INTERNAL_ERROR))
  });
  
  router.get("/:id", function(req: Request, res: Response) {
    CompanyController
      .getById(req.params.id)
      .then(response => BaseHandler(res, response, "Companies list"))
      .catch(err => BaseHandler(res, err, "Companies list", HttpCodes.INTERNAL_ERROR))
  });
  
  router.post("/", function(req: Request, res: Response) {
    CompanyController
      .create(req.body)
      .then(response => BaseHandler(res, response, "Company created"))
      .catch(err => BaseHandler(res, err, "Company created", HttpCodes.INTERNAL_ERROR))
  });
  
  router.put("/:id", function(req: Request, res: Response) {
    CompanyController
      .update(req.params.id, req.body)
      .then(response => BaseHandler(res, response, "Company updated"))
      .catch(err => BaseHandler(res, err, "Company updated", HttpCodes.INTERNAL_ERROR))
  });
  
  router.delete("/:id", function(req: Request, res: Response) {
    CompanyController
      .delete(req.params.id)
      .then(response => BaseHandler(res, response, "Company deleted"))
      .catch(err => BaseHandler(res, err, "Company deleted", HttpCodes.INTERNAL_ERROR))
  });
  
  export default router;
  