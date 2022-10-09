const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller')
const createTaskController = require('../controller/create_task_controller');
const deleteTaskController = require('../controller/delete_task_controller');
const { route } = require('./user');

console.log("Router loaded");

router.get('/', homeController.home);
router.post('/create-task', createTaskController.create);
router.get('/delete-task', deleteTaskController.delete)
router.use('/users', require('./user'));

module.exports = router;