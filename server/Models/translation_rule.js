const mongoose = require('mongoose')
const TranslationRuleSchema = new mongoose.Schema({

    pattern:{
        type:String
    },
   templated:{
        type:String
    }
})

const TranslationRule= mongoose.model('TranslationRule',TranslationRuleSchema)
module.exports = TranslationRule