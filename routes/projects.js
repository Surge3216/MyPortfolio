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

module.exports = router;