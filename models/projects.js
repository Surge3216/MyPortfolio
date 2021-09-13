const mongoose = require("mongoose");
const { model, Schema } = require('mongoose');

const projectsSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      require: true
    },
    image: {
      type: String,
      required: true
    },
    gitLink: {
        type: String,
        required: true
      },
    deployedLink: {
       type: String
    },
  }
);
const Projects = mongoose.model('Projects', projectsSchema)
module.exports.Projects = Projects;