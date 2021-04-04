import {
  Request,
  Response,
  Router
} from "express";
import {check, param} from "express-validator";
import BaseHandler from "../framework/utils/BaseHandler";
import LevelController from "./controller";
import LevelRepository from "./repository"
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
    LevelController
      .getPage(req.query)
      .then(response => BaseHandler(res, response, "Level list"))
      .catch(err => res.status(500).send(err));
  }
);

router.get(
  "/:id",
  check('id').custom(
    async (value) =>
      LevelRepository
        .getById(value)
        .then(user => !user && Promise.reject('User not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    LevelController
      .getById(req.params.id)
      .then(response => BaseHandler(res, response, "Level retrieve"))
      .catch(err => res.status(500).send(err));
  }
);

router.post(
  "/",
  check('name').isLength({ min: 5, max: 20 }),
  middlewareValidator,
  function(req: Request, res: Response) {
  LevelController
    .create(req.body)
    .then(response => BaseHandler(res, response, "Level created"))
    .catch(err => res.status(500).send(err));
  }
);

router.put(
  "/:id",
  check('id').custom(
    async (value) =>
      LevelRepository
        .getById(value)
        .then(user => !user && Promise.reject('Tag not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    LevelController
      .update(req.params.id, req.body)
      .then(response => BaseHandler(res, response, "Level updated"))
      .catch(err => res.status(500).send(err));
  }
);

router.delete(
  "/:id",
  check('id').custom(
    async (value) =>
      LevelRepository
        .getById(value)
        .then(user => !user && Promise.reject('Tag not found!'))
  ),
  middlewareValidator,
  function(req: Request, res: Response) {
    LevelController
      .delete(req.params.id)
      .then(response => BaseHandler(res, response, "Level deleted"))
      .catch(err => res.status(500).send(err));
  }
);

export default router;
