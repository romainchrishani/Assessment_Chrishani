const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const CreateStoryRoute = require('./Controllers/create_story')
const GetAllStoriesRoute = require('./Controllers/get_all_stories')
const GetAllStoriesByIDRoute = require('./Controllers/get_a_story_by_id')

app.use(express.json())
app.use(cors())

app.use(CreateStoryRoute)
app.use(GetAllStoriesRoute)
app.use(GetAllStoriesByIDRoute)


const PORT = 8080;
app.listen(PORT,()=>{
    console.log("App is running");
})



const DB=''
      mongoose.connect(DB).then(()=>{
        console.log("DB connected");
      })
      .catch((err)=>{
        console.log("DB error",err);
      })

