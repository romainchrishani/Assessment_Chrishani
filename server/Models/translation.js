const mongoose = require('mongoose')
const TranslationSchema = new mongoose.Schema({

    storyId:{
        type:String
    },
    translation:{
        type:String
    },
    
    translation:{
        type:String
    },
    votes:{
        type:Number
    }
})

const Translation= mongoose.model('Translation',TranslationSchema)
module.exports = Translation