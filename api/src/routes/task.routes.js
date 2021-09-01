const express = require('express');
const router = express.Router();
const { List, Task } = require('../models');

/**
 * GET /lists/:listId/tasks
 * Purpose: Get all tasks in a specific list
 */
router.get('/lists/:listId/tasks', (req, res) => {
    // Return all tasks that belong to a specific list
    // const _listId = req.params.listId;
    Task.find({ _listId: req.params.listId }, (error, tasks) => {
        if (error) {
            console.log(error.message);
        }
        res.send(tasks);
    });
});

/**
 * GET /lists/:listId/tasks/:taskId
 * Purpose: Get a specific task
 */
router.get('/lists/:listId/tasks/:taskId', (req, res) => {
    Task.findOne({
        _id: req.params.taskId,
        _listId: req.params.listId
    }, (error, task) => {
        if (error) {
            console.log(error.message);
        }
        res.send(task);
    });
});

/**
 * POST /lists/:listId/tasks
 * Purpose: Create a new task in a list
 */
router.post('/lists/:listId/tasks', (req, res) => {
    // Create a new task in a list
    var newTask = new Task({
        title: req.body.title,
        _listId: req.params.listId
    });
    // console.log(`new task = ${newTask}`);
    Task.create(newTask, (error, newCreatedTask) => {
        if (error) {
            console.log(error.message);
        }
        // console.log(`new created task = ${newCreatedTask}`);
        res.send(newCreatedTask);
    });
});

/**
 * PATCH /lists/:listId/tasks/:taskId
 * Purpose: Update an existing task
 */
router.patch('/lists/:listId/tasks/:taskId', (req, res) => {
    // Update an existing task specified by task id
    Task.findOneAndUpdate({ 
        _id: req.params.taskId, 
        _listId: req.params.listId 
    }, { $set: req.body }, (error, updatedTask) => {
        if (error) {
            console.log(error.message);
        }
        res.sendStatus(200);
    });
});

/**
 * DELETE /lists/:listId/tasks/:taskId
 * Purpose: Delete an existing task
 */
router.delete('/lists/:listId/tasks/:taskId', (req, res) => {
    // Delete an existing task of a list based on taskId and listId
    Task.findOneAndRemove({ 
        _id: req.params.taskId,
        _listId: req.params.listId
    }, (error, removedTask) => {
        if (error) {
            console.log(error.message);
        }
        res.send(removedTask);
    });
});

const TaskRoutes = router;
module.exports = { TaskRoutes };