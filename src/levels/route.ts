import {
  Request,
  Response,
  Router
} from "express";
import BaseHandler from "../framework/utils/BaseHandler";
import LevelRepository from "./controller";
import Token from "../framework/middleware/Token";

const router = Router();

router.use(new Token().init());

router.get("/", function(req: Request, res: Response) {
  LevelRepository
    .getPage(req.query)
    .then(response => BaseHandler(res, response, "Level list"))
    .catch(err => res.status(500).send(err));
});

router.get("/:id", function(req: Request, res: Response) {
  LevelRepository
    .getById(req.params.id)
    .then(response => BaseHandler(res, response, "Level retrieve"))
    .catch(err => res.status(500).send(err));
});

router.post("/", function(req: Request, res: Response) {
  LevelRepository
    .create(req.body)
    .then(response => BaseHandler(res, response, "Level created"))
    .catch(err => res.status(500).send(err));
});

router.put("/:id", function(req: Request, res: Response) {
  LevelRepository
    .update(req.params.id, req.body)
    .then(response => BaseHandler(res, response, "Level updated"))
    .catch(err => res.status(500).send(err));
});

router.delete("/:id", function(req: Request, res: Response) {
  LevelRepository
    .delete(req.params.id)
    .then(response => BaseHandler(res, response, "Level deleted"))
    .catch(err => res.status(500).send(err));
});

export default router;
