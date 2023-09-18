const { Router } = require('express');
const UserController = require('./controller/UserController');
const router = Router();

router.post('/criarUser', UserController.criarUsuario);
router.get('/searchUser/:id', UserController.searchUser);
router.get('/searchUser', UserController.searchUsers);
router.put('/updateUser/:id', UserController.updateUser);

module.exports = { router };

