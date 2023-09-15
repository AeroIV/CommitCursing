const { Router } = require('express');
const UserController = require('./controller/UserController');
const router = Router();

router.post('/criarUser', UserController.criarUsuario);

module.exports = { router };

