var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAll);
router.post('/', userController.create);
router.put('/:userId', userController.update);
router.delete('/:userId', userController.delete);
router.post('/authen', userController.authen)


module.exports = router;
