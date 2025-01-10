const EmojiStorys = require('../Models/emoji_story')
const express = require('express')
const router = express.Router()

router.post('/create-story',async(req,res)=>{
    const story = new EmojiStorys(
        req.body
    )
    try{await story.save()
        res.status(201).json({
            status:'success',
            data:{
                story
            }
        })
    }
    catch(err){
        res.status(500).json({
            status:'failed',
            message:err
        })
    }
})
module.exports=router