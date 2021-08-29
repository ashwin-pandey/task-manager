const express = require('express');
const router = express.Router();
const { List } = require('../models');

/**
 * GET /lists
 * Purpose: Get all lists
 */
router.get('/', (req, res) => {
    // Return an array of all the lists in the database.
    List.find({}, (error, lists) => {
        if (error) {
            console.log(error);
        }
        res.send(lists);
    });
});

/**
 * POST /lists
 * Purpose: Create a list
 */
router.post('/', (req, res) => {
    // Create a new list and return the new lists record (which includes the id).
    // The list information (fields) will be passed in via the JSON request body.
    List.create(req.body, (error, list) => {
        if (error) {
            console.log(error);
        }
        res.sendStatus(201).json({
            message: "Created successfully",
            list});
    });
});

/**
 * PATCH /lists/:id
 * Purpose: Update a specified list
 */
router.patch('/:id', (req, res) => {
    // Update the specified list with the new values specified in the JSON body.
    List.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }, (error) => {
        if (error) {
            console.log(error);
        }
        res.sendStatus(200);
    });
});

/**
 * DELETE /lists/:id
 * Purpose: Delete the specified list
 */
router.delete('/:id', (req, res) =>  {
    // Delete the specified list
    List.findOneAndRemove({ _id: req.params.id }, (error, removedList) => {
        res.sendStatus(204).json({
            message: "List deleted!",
            removedList});
    });
});

const ListRoutes = router;
module.exports = { ListRoutes };