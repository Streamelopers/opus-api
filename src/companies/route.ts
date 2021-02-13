import {
  Request,
  Response,
  Router
} from "express";
import BaseHandler from "../framework/utils/BaseHandler";
import CompanyController from "./controller";
import Token from "../framework/middleware/Token";
import { HttpCodes } from "../framework/utils/HttpCodes";
import middlewareValidator from '../framework/middleware/Validator';
import { check, param } from 'express-validator';
import UserRepository from "../users/repository";
import CompanyRepository from "./repository";
  
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
    CompanyController
      .getPage(req.query)
      .then(response => BaseHandler(res, response, "Companies list"))
      .catch(err => BaseHandler(res, err, "Companies list", HttpCodes.INTERNAL_ERROR))
  }
);

router.get(
  "/:id",
  check('id').custom(
    async (value) =>
      CompanyRepository
        .getById(value)
        .then(company => !company && Promise.reject('Company not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    CompanyController
      .getById(req.params.id)
      .then(response => BaseHandler(res, response, "Companies list"))
      .catch(err => BaseHandler(res, err, "Companies list", HttpCodes.INTERNAL_ERROR))
  }
);

router.post(
  "/",
  [
    check('name').isLength({ min: 5, max: 20 }),
    check('website').isURL(),
    check('description').isLength({ min: 10, max: 200 }),
    check('userId').isNumeric(),
    check('userId').custom(
      async (value) =>
        UserRepository
          .getById(value)
          .then(user => !user && Promise.reject('User not found!'))
    )
  ],
  middlewareValidator,
  function(req: Request, res: Response) {
    CompanyController
      .create(req.body)
      .then(response => BaseHandler(res, response, "Company created"))
      .catch(err => BaseHandler(res, err, "Company created", HttpCodes.INTERNAL_ERROR))
  }
);

router.put(
  "/:id",
  [
    check('name').isLength({ min: 5, max: 20 }),
    check('website').isURL(),
    check('description').isLength({ min: 10, max: 200 }),
    check('userId').isNumeric(),
    check('userId').custom(
      async (value) =>
        UserRepository
          .getById(value)
          .then(user => !user && Promise.reject('User not found!'))
    ),
    check('id').custom(
      async (value) =>
        CompanyRepository
          .getById(value)
          .then(company => !company && Promise.reject('Company not found!'))
    )
  ],
  middlewareValidator,
  function(req: Request, res: Response) {
    CompanyController
      .update(req.params.id, req.body)
      .then(response => BaseHandler(res, response, "Company updated"))
      .catch(err => BaseHandler(res, err, "Company updated", HttpCodes.INTERNAL_ERROR))
  }
);

router.delete(
  "/:id",
  check('id').custom(
    async (value) =>
      CompanyRepository
        .getById(value)
        .then(company => !company && Promise.reject('Company not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    CompanyController
      .delete(req.params.id)
      .then(response => BaseHandler(res, response, "Company deleted"))
      .catch(err => BaseHandler(res, err, "Company deleted", HttpCodes.INTERNAL_ERROR))
  }
);

export default router;
