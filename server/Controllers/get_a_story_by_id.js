const EmojiStorys = require('../Models/emoji_story')
const express = require('express')
const router = express.Router()

router.get('/get-story:id',async(req,res)=>{
    try{
        const storyID = req.params.id
        const story = await EmojiStorys.findById(storyID)
        res.status(200).json({
            status:'success',
            data:{
                story
            }
        });
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            status:'failed',
            message:err
        });
    }
})
module.exports = router