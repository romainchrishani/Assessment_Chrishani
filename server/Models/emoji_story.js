const mongoose = require('mongoose')
const EmojiStorySchema = new mongoose.Schema({

    emojiSequence:{
        type:String
    },
    authorNickname:{
        type:String
    },
    createdAt:{
        type:Date
    }
})

const EmojiStory= mongoose.model('EmojiStory',EmojiStorySchema)
module.exports = EmojiStory