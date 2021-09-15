const router = require('express').Router();
const { Projects } = require('../models/projects');

// Post a project
router.post('/', async (req, res)=>{
    const newProject = new Projects(req.body);
    try{
        const savedProject = await newProject.save();
        res.status(200).json(savedProject)
    } catch(err){
        res.status(500).json(err)
    }
})

// Get all projects

router.get('/', async (req, res)=>{
    try{
        const project = await Projects.find()
        res.status(200).json(project)
    }catch (err){
        res.status(500).json
    }
})

module.exports = router;