const express = require('express');
const router = express.Router();
const { List, Task } = require('../models');

/**
 * GET /lists/:listId/tasks
 * Purpose: Get all tasks in a specific list
 */
router.get('/', (req, res) => {
    // Return all tasks that belong to a specific list
    Task.find({ _listId: req.params.listId }, (error, tasks) => {
        if (error) {
            console.log(error.message);
        }
        res.send(tasks);
    });
});

/**
 * POST /lists/:listId/tasks
 * Purpose: Create a new task in a list
 */
router.post('/', (req, res) => {
    // Create a new task in a list
    // let newTask = new Task({
    //     title: req.body.title, 
    //     _listId: req.params.listId
    // });
    // newTask.save().then((newTaskDoc) => {
    //     res.send(newTaskDoc);
    // });
    Task.create({ title: req.body.title, _listId: req.params.listId }, (error, newTask) => {
        if (error) {
            console.log(error.message);
        }
        res.send(newTask);
    });
});

const TaskRoutes = router;
module.exports = { TaskRoutes };