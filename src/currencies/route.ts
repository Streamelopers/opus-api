import {
  Request,
  Response,
  Router
} from "express";
import {check, param} from "express-validator";
import { HttpCodes } from "../framework/utils/HttpCodes";
import BaseHandler from "../framework/utils/BaseHandler";
import CurrencyController from "./controller";
import CurrencyRepository from "./repository";
import Token from "../framework/middleware/Token";
import middlewareValidator from "../framework/middleware/Validator";
  
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
    CurrencyController
      .getPage(req.query)
      .then(response => BaseHandler(res, response, "Currencies list"))
      .catch(err => BaseHandler(res, err, "Currencies list", HttpCodes.INTERNAL_ERROR))
    }
);

router.get(
  "/:id",
  check('id').custom(
    async (value) =>
      CurrencyRepository
        .getById(value)
        .then(user => !user && Promise.reject('Currency not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    CurrencyController
      .getById(req.params.id)
      .then(response => BaseHandler(res, response, "Currencies list"))
      .catch(err => BaseHandler(res, err, "Currencies list", HttpCodes.INTERNAL_ERROR))
  }
);

router.post(
  "/",
  [
    check('name').isLength({ min: 5, max: 20 }),
    check('symbol').isLength({ min: 1, max: 10 }),
    check('isoCode').isLength({ min: 3, max: 3 })
  ],
  middlewareValidator,
  function(req: Request, res: Response) {
    CurrencyController
      .create(req.body)
      .then(response => BaseHandler(res, response, "Currency created"))
      .catch(err => BaseHandler(res, err, "Currency created", HttpCodes.INTERNAL_ERROR))
  }
);

router.put(
  "/:id",
  check('id').custom(
    async (value) =>
      CurrencyRepository
        .getById(value)
        .then(user => !user && Promise.reject('Currency not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    CurrencyController
      .update(req.params.id, req.body)
      .then(response => BaseHandler(res, response, "Currency updated"))
    .catch(err => BaseHandler(res, err, "Currency updated", HttpCodes.INTERNAL_ERROR))
  }
);

router.delete(
  "/:id",
  check('id').custom(
    async (value) =>
      CurrencyRepository
        .getById(value)
        .then(user => !user && Promise.reject('Currency not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    CurrencyController
      .delete(req.params.id)
      .then(response => BaseHandler(res, response, "Currency deleted"))
      .catch(err => BaseHandler(res, err, "Currency deleted", HttpCodes.INTERNAL_ERROR))
  }
);

export default router;
