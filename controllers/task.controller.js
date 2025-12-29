const Task = require('../models/Task');

const taskController = {};

taskController.createTask = async (req, res) => {
    try {
        const {task, isComplete} = req.body;
        const newTask = new Task({task, isComplete});
        await newTask.save();
        return res.status(200).json({status:"ok", data:newTask});
    } catch (error) {
        return res.status(400).json({message: 'Error creating task', error});
    }
};

taskController.getTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json({status:"ok", data:tasks});
    } catch (error) {
        return res.status(400).json({message: 'Error fetching tasks', error});
    }
};

taskController.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status(200).json({status:"ok", data:updatedTask});
    } catch (error) {
        return res.status(400).json({message: 'Error updating task', error});
    }
};

taskController.deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        return res.status(200).json({status:"ok", data:deletedTask});
    } catch (error) {
        return res.status(400).json({message: 'Error deleting task', error});
    }
};

module.exports = taskController;
