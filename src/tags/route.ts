import {
  Request,
  Response,
  Router
} from "express";
import { Tags } from "../framework/entities/Tags";
import BaseHandler from "../framework/utils/BaseHandler";
import TagController from "./controller";
import Token from "../framework/middleware/Token";

const router = Router();

// router.use(new Token().init());

router.post("/", function(req: Request, res: Response) {
  TagController
    .create(req.body)
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
});

router.get("/", function(req: Request, res: Response) {
  TagController
    .getPage(req.query)
    .then(response => BaseHandler(res, response, "Tag list"))
    .catch(err => res.status(500).send(err));
});

router.get("/:id", function(req: Request, res: Response) {
  TagController
    .getById(req.params.id)
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
});

router.put("/:id", function(req: Request, res: Response) {
  TagController
    .update(req.params.id, req.body)
    .then(response => res.status(201).send(response))
    .catch(err => res.status(500).send(err));
});

router.delete("/:id", function(req: Request, res: Response) {
  TagController
    .delete(req.params.id)
    .then(response => res.status(201).send(response))
    .catch(err => res.status(500).send(err));
});

export default router;