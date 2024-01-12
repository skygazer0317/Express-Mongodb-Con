const Blog=require('../models/blog')
const User=require('../models/user')
const createBlog=async (req,res)=>{
    const blog=req.body;
    const user=req.user
    console.log(user)

    try{
        const userId=await User.findOne({'email':user.email1})
        blog.author=userId
        const createdBlog=await Blog.create(blog)
        res.status(200).json(createdBlog)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports={createBlog}