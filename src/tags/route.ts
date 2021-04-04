import {
  Request,
  Response,
  Router
} from "express";
import {check, param} from 'express-validator';
import { HttpCodes } from "../framework/utils/HttpCodes";
import BaseHandler from "../framework/utils/BaseHandler";
import TagController from "./controller";
import TagRepository from "./repository";
import Token from "../framework/middleware/Token";
import middlewareValidator from '../framework/middleware/Validator';

const router = Router();

router.get(
  "/",
  [
    param('page').default(1),
    param('pageSize').default(50)
  ],
  middlewareValidator,
  function(req: Request, res: Response) {
    TagController
      .getPage(req.query)
      .then(response => BaseHandler(res, response, "Tag list"))
      .catch(err => BaseHandler(res, err, "Tag list", HttpCodes.INTERNAL_ERROR))
  }
);

router.use(new Token().init());

router.get(
  "/:id",
  check('id').custom(
    async (value) =>
      TagRepository
        .getById(value)
        .then(user => !user && Promise.reject('Tag not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    TagController
      .getById(req.params.id)
      .then(response => BaseHandler(res, response, "Tag retrieve"))
      .catch(err => BaseHandler(res, err, "Tag retrieve", HttpCodes.INTERNAL_ERROR))
  }
);

router.post(
  "/",
  check('name').isLength({ min: 5, max: 20 }),
  middlewareValidator,
  function(req: Request, res: Response) {
    TagController
      .create(req.body)
      .then(response => BaseHandler(res, response, "Tag created"))
      .catch(err => BaseHandler(res, err, "Tag created", HttpCodes.INTERNAL_ERROR));
  }
);

router.put(
  "/:id",
  check('id').custom(
    async (value) =>
      TagRepository
        .getById(value)
        .then(user => !user && Promise.reject('Tag not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    TagController
      .update(req.params.id, req.body)
      .then(response => BaseHandler(res, response, "Tag updated"))
      .catch(err => BaseHandler(res, err, "Tag updated", HttpCodes.INTERNAL_ERROR))
  }
);

router.delete(
  "/:id",
  check('id').custom(
    async (value) =>
      TagRepository
        .getById(value)
        .then(user => !user && Promise.reject('Tag not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    TagController
      .delete(req.params.id)
      .then(response => BaseHandler(res, response, "Tag deleted"))
      .catch(err => BaseHandler(res, err, "Tag deleted", HttpCodes.INTERNAL_ERROR))
  }
);

export default router;
