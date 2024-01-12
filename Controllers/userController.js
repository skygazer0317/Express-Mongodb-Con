const User=require('../models/user')
const jwt=require('jsonwebtoken')

const register=async(req,res)=>{
    const user=req.body;
    try{
        const createdUser=await User.create(user)
        res.status(200).json(createdUser)
    }
    catch(error){
        console.log(error)
        res.status(500).json({'message':error.message})
    }
}

const login=async (req,res)=>{
    const {email,password}=req.body
    try{
       const validUser= await User.findOne({'email':email,'password':password})
        if(!validUser) res.status(401).json({'msg':'Invalid email/password'})
        else{
    console.log(validUser)
    //GENERATE Json Web Token
    
    console.log(validUser.username)
    const email=validUser.email
    const role=validUser.role
    const username=validUser.username;
    console.log({email,role,username})
    const token=jwt.sign({email,role,username},process.env.JSON_SECRETKEY,{expiresIn:'1800s'})
    console.log(token);
    res.status(200).json(token)
        }
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}

module.exports={login,register}