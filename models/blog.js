const mongoose=require('mongoose')
const User=require('../models/user')
const BlogSchema=new mongoose.Schema({
    'title':{required:true,type:String},
    'content':{required:true,type:String},
    'author':{type:mongoose.Schema.Types.ObjectId,ref:User,required:true},
    'createAt':{type:Date,default:Date.now}

})

module.exports=mongoose.model('Blog',BlogSchema)