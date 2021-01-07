import { Router } from 'express';
import UserController from './controller';

const router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  UserController.create(req.body).then(response => {
    res.status(201).send(response);
  }).catch(error => {
    res.status(500).send(error);
  })
});

router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
