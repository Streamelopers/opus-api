import Token from '../framework/middleware/Token';
import middlewareValidator from '../framework/middleware/Validator';
import BaseHandler from '../framework/utils/BaseHandler';
import UserController from './controller';
import UserRepository from './repository';
import {check} from 'express-validator';
import { Request, Response, Router } from 'express';

const router = Router();

router.post(
  '/login',
  function(req: Request, res: Response){
    UserController
      .login(req.body)
      .then(response => res.status(201).send(response))
      .catch(error => res.status(500).send(error))
  }
);

router.post(
  '/signup',
  [
    check('email').isEmail().normalizeEmail(),
    check('email').custom(
      async (value) =>
        UserRepository
          .getByEmail(value)
          .then(user => user && Promise.reject('E-mail already in use'))
    ),
    check('firstname').isLength({ min: 2, max: 40 }),
    check('lastname').isLength({ min: 2, max: 40 }),
    check('password').isLength({ min: 8 }).isAlphanumeric()
  ],
  middlewareValidator,
  function(req: Request, res: Response) {
    UserController
      .signup(req.body)
      .then(response => res.status(201).send(response))
      .catch(error => res.status(500).send(error))
  }
);

router.use(new Token().init());

router.get('', function(req, res) {
  UserController.getPage(req.query).then(response => {
    BaseHandler(res, response, 'User list');
  }).catch(error => {
    res.status(500).send(error);
  })
});

router.get(
  '/:id',
  check('id').custom(
    async (value) =>
      UserRepository
        .getById(value)
        .then(user => !user && Promise.reject('User not found!'))
  ),
  middlewareValidator,
  function(req, res) {
    UserController
      .getById(req.params.id)
      .then(response => BaseHandler(res, response, "User Retrieve"))
      .catch(error => BaseHandler(res, error, "User Retrieve"))
  }
);

router.put(
  '/:id',
  [
    check('id').custom(
      async (value) =>
        UserRepository
          .getById(value)
          .then(user => !user && Promise.reject('User not found!'))
    ),
    check('firstname').isLength({ min: 2, max: 40 }),
    check('lastname').isLength({ min: 2, max: 40 }),
  ],
  middlewareValidator,
  function(req: Request, res: Response) {
    UserController
      .update(req.params.id, req.body)
      .then(response => BaseHandler(res, response, "User Updated"))
      .catch(error => BaseHandler(res, error, "User Updated"))
});

router.delete(
  '/:id',
  check('id').custom(
    async (value) =>
      UserRepository
        .getById(value)
        .then(user => !user && Promise.reject('User not found!'))
  ),
  middlewareValidator,
  function(req, res) {
    UserController
      .delete(req.params.id)
      .then(response => BaseHandler(res, response, "User Deleted"))
      .catch(error => BaseHandler(res, error, "User Deleted"))
});

export default router;
