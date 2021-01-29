import {
  Request,
  Response,
  Router
} from "express";
import BaseHandler from "../framework/utils/BaseHandler";
import TagController from "./controller";
import Token from "../framework/middleware/Token";

const router = Router();

router.get("/", function(req: Request, res: Response) {
  TagController
    .getPage(req.query)
    .then(response => BaseHandler(res, response, "Tag list"))
    .catch(err => res.status(500).send(err));
});

router.use(new Token().init());

router.get("/:id", function(req: Request, res: Response) {
  TagController
    .getById(req.params.id)
    .then(response => BaseHandler(res, response, "Tag retrieve"))
    .catch(err => res.status(500).send(err));
});

router.post("/", function(req: Request, res: Response) {
  TagController
    .create(req.body)
    .then(response => BaseHandler(res, response, "Tag created"))
    .catch(err => res.status(500).send(err));
});

router.put("/:id", function(req: Request, res: Response) {
  TagController
    .update(req.params.id, req.body)
    .then(response => BaseHandler(res, response, "Tag updated"))
    .catch(err => res.status(500).send(err));
});

router.delete("/:id", function(req: Request, res: Response) {
  TagController
    .delete(req.params.id)
    .then(response => BaseHandler(res, response, "Tag deleted"))
    .catch(err => res.status(500).send(err));
});

export default router;
