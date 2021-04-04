import {
  Request,
  Response,
  Router
} from "express";
import {check, param} from "express-validator";
import { HttpCodes } from "../framework/utils/HttpCodes";
import BaseHandler from "../framework/utils/BaseHandler";
import JobTypesController from "./controller";
import JobTypesRepository from "./repository";
import Token from "../framework/middleware/Token";
import middlewareValidator from '../framework/middleware/Validator';
  
const router = Router();

router.use(new Token().init());

router.get(
  "/",
  [
    param('page').default(1),
    param('pageSize').default(50)
  ],
  middlewareValidator,
  function(req: Request, res: Response) {
    JobTypesController
      .getPage(req.query)
      .then(response => BaseHandler(res, response, "Job types list"))
      .catch(err => BaseHandler(res, err, "Job types list", HttpCodes.INTERNAL_ERROR))
  }
);

router.get(
  "/:id",
  check('id').custom(
    async (value) =>
      JobTypesRepository
        .getById(value)
        .then(user => !user && Promise.reject('JobType not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    JobTypesController
      .getById(req.params.id)
      .then(response => BaseHandler(res, response, "Job types list"))
      .catch(err => BaseHandler(res, err, "Job types list", HttpCodes.INTERNAL_ERROR))
  }
);

router.post(
  "/",
  check('name').isLength({ min: 5, max: 20 }),
  middlewareValidator,
  function(req: Request, res: Response) {
    JobTypesController
      .create(req.body)
      .then(response => BaseHandler(res, response, "Job type created"))
      .catch(err => BaseHandler(res, err, "Job type created", HttpCodes.INTERNAL_ERROR))
  }
);

router.put(
  "/:id",
  check('id').custom(
    async (value) =>
      JobTypesRepository
        .getById(value)
        .then(user => !user && Promise.reject('JobType not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    JobTypesController
      .update(req.params.id, req.body)
      .then(response => BaseHandler(res, response, "Job type updated"))
      .catch(err => BaseHandler(res, err, "Job type updated", HttpCodes.INTERNAL_ERROR))
  }
);

router.delete(
  "/:id",
  check('id').custom(
    async (value) =>
      JobTypesRepository
        .getById(value)
        .then(user => !user && Promise.reject('JobType not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    JobTypesController
      .delete(req.params.id)
      .then(response => BaseHandler(res, response, "Job type deleted"))
      .catch(err => BaseHandler(res, err, "Job type deleted", HttpCodes.INTERNAL_ERROR))
  }
);

export default router;
