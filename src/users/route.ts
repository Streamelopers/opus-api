import { Request, Response, Router } from 'express';
import UserController from './controller';

const router = Router();

router.post('login', function(req: Request, res: Response){
  UserController.login(req.body).then(response => {
    res.status(201).send(response);
  }).catch(error => {
    res.status(500).send(error);
  })
});

router.post('signup', function(req, res){
  UserController.signup(req.body).then(response => {
    res.status(201).send(response);
  }).catch(error => {
    res.status(500).send(error);
  })
});


router.get('', function(req, res) {
  UserController.getPage(req.query).then(response => {
    res.status(200).send(response);
  }).catch(error => {
    res.status(500).send(error);
  })
});


router.get('/:id', function(req, res) {
  UserController.getById(req.params.id).then(response => {
    res.status(200).send(response);
  }).catch(error => {
    res.status(500).send(error);
  })
});

router.post('', function(req, res) {
  UserController.create(req.body).then(response => {
    res.status(201).send(response);
  }).catch(error => {
    res.status(500).send(error);
  })
});

router.put('/:id', function(req, res) {
  UserController.update(req.params.id, req.body).then(response => {
    res.status(201).send(response);
  }).catch(error => {
    res.status(500).send(error);
  })
});

router.delete('/:id', function(req, res) {
  UserController.delete(req.params.id).then(response => {
    res.status(200).send(response);
  }).catch(error => {
    res.status(500).send(error);
  })
});

export default router;
