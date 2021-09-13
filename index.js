const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const path = require('path');

const { MONGODB } = require('./config')
const projectRoute = require('./routes/projects')

app.use(express.json());
app.use(cors());

app.use('/api/projects', projectRoute)

app.get('/', (req, res)=>{
    res.send('welcome')
})



app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


  mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .then((res) => {
    console.log(`Server running`);
  })
  .catch(err => {
    console.error(err)
  })