const express = require('express');
const router = express.Router();
const Task = require('../models/task.model');

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    } catch(e) {
        res.status(400).send(e);
    }
})

router.get('/tasks', async (req, res) => {
    const match = {}
    if (req.query.Completed) {
        match.Completed = req.query.Completed=== true
    }
    try {
        const tasks = await Task.find({
            path: 'tasks',
            match
        });
        res.send(tasks);
    } catch(e) {
        res.status(500).send(e);
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id);
        res.send(task);
    } catch {
        res.status(500).send(e);
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const updateTask = Object.keys(req.body);
    const allowedUpdatesTask = ['Description', 'Completed'];
    const isValidTask = updateTask.every((updatetask) => allowedUpdatesTask.includes(updatetask));

    if(!isValidTask) {
        res.status(400).send({error: 'Invalid Task'});
    }
    try {
        const task = await Task.findById(req.params.id);
        updateTask.forEach((taskUpdate) => task[taskUpdate] = req.body[taskUpdate]);
        await task.save();
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(400).send(e);
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(500).send();
    }
})

module.exports = router;