const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
// publico apis
router.get('/users', UserController.fetchUsers);
router.get('/users/:id', UserController.getUserById);

module.exports = router;