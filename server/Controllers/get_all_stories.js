const EmojiStorys = require('../Models/emoji_story')
const express = require('express')
const router = express.Router()

router.get('/get-story',async(req,res)=>{
    try{
        const stories = await EmojiStorys.find({});
        res.status(200).json({
            status:'success',
            data:{
                stories
            }
        });
    }
    catch(err){
        res.status(500).json({
            status:'failed',
            message:err
        });
    }
})
module.exports = router