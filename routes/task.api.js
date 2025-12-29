
const express = require('express');
const { createTask, getTask, updateTask, deleteTask } = require('../controllers/task.controller');
const router = express.Router();

router.get('/', getTask);

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
