import {
    Request,
    Response,
    Router
  } from "express";
  import BaseHandler from "../framework/utils/BaseHandler";
  import JobTypesController from "./controller";
  import Token from "../framework/middleware/Token";
import { HttpCodes } from "../framework/utils/HttpCodes";
  
  const router = Router();
  router.use(new Token().init());
  
  router.get("/", function(req: Request, res: Response) {
    JobTypesController
      .getPage(req.query)
      .then(response => BaseHandler(res, response, "Job types list"))
      .catch(err => BaseHandler(res, err, "Job types list", HttpCodes.INTERNAL_ERROR))
  });
  
  router.get("/:id", function(req: Request, res: Response) {
    JobTypesController
      .getById(req.params.id)
      .then(response => BaseHandler(res, response, "Job types list"))
      .catch(err => BaseHandler(res, err, "Job types list", HttpCodes.INTERNAL_ERROR))
  });
  
  router.post("/", function(req: Request, res: Response) {
    JobTypesController
      .create(req.body)
      .then(response => BaseHandler(res, response, "Job type created"))
      .catch(err => BaseHandler(res, err, "Job type created", HttpCodes.INTERNAL_ERROR))
  });
  
  router.put("/:id", function(req: Request, res: Response) {
    JobTypesController
      .update(req.params.id, req.body)
      .then(response => BaseHandler(res, response, "Job type updated"))
      .catch(err => BaseHandler(res, err, "Job type updated", HttpCodes.INTERNAL_ERROR))
  });
  
  router.delete("/:id", function(req: Request, res: Response) {
    JobTypesController
      .delete(req.params.id)
      .then(response => BaseHandler(res, response, "Job type deleted"))
      .catch(err => BaseHandler(res, err, "Job type deleted", HttpCodes.INTERNAL_ERROR))
  });
  
  export default router;
  