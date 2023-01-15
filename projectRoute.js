const express = require('express');
const Router = express.Router();
const Project = require('./Project');
const {
    validateOffsetAndLimit,
    validateTypeProject
} = require('./validate');

Router.get('/', async (req, res) => { //Get all projects
    try {
        const projects = await Project.find();
        res.json({
            Projects: projects
        });
    } catch (err) {
        res.json({
            message: err
        })
    }
});

Router.get('/limited', validateOffsetAndLimit, async (req, res) => { //Get limited number of projects
    try {
        const offset = parseInt(req.query.offset);
        const limit = parseInt(req.query.limit);
        const projects = await Project.find().skip(offset).limit(limit);
        res.json({
            Limit: limit,
            Offset: offset,
            Projects: projects
        });
    } catch (err) {
        res.json({
            message: err
        })
    }
});

Router.get('/:projectID', async (req, res) => {
    try {
        const existingProject = await Project.findOne({ _id: req.params.projectID });
        if (existingProject) {
            const project = await Project.findById(req.params.projectID);
            res.json(project);
        } else {
            res.json({ message: "No project found with that ID" });
        }
    } catch (err) {
        res.json({ message: err });
    }
});


Router.post('/', async (req, res) => {
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const savedProject = await project.save();
        res.json(savedProject);
    } catch (err) {
        res.json({ message: err });
    }
});

Router.delete('/:projectID', async (req, res) => {
    try {
        const removedProject = await Project.deleteOne({ _id: req.params.projectID });
        res.json(removedProject);
    } catch (err) {
        res.json({ message: err });
    }
});

Router.put('/:projectID', validateTypeProject, async (req, res) => { //Update a project
    try {
        const project = await Project.findById(req.params.projectID);
        if (!project) {
            res.json({
                message: "No project found with that ID!"
            });
        }
        else {
            project.idea = req.body.idea;
            project.for = req.body.for;
            await project.save();
            res.json(project);
        }
    } catch (err) {
        res.json({
            message: err
        });
    }
});




module.exports = Router;