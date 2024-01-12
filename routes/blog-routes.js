const express=require('express')
const {createBlog}=require('../Controllers/blogController')
const authMiddleware=require ('../middleware/auth')
const routes=express.Router()

routes.post('/',authMiddleware,createBlog)

module.exports=routes