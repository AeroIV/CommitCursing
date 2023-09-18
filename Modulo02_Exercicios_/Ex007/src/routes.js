const { Router } = require('express');
const UserController = require('./controller/UserController');
const router = Router();

router.post('/createUser', UserController.createUsuario);
router.get('/searchUser/:id', UserController.searchUser);
router.get('/searchUser', UserController.searchUsers);
router.put('/updateUser/:id', UserController.updateUser);
router.delete('/deleteUser/:id', UserController.deleteUser);

module.exports = { router };

