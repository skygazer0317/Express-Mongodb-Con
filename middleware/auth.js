const jwt =require ('jsonwebtoken');
const customApiError = require('../error/customApiError');

const authorizeMiddleware=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    //if there is no token
    //there is a token, but it doesnot starts with bearer
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        next( new customApiError('NOT AUTHORIZED',401))//go to error handler
    }
    //take the payload which contains the data.
    
    try {
        const token=authHeader.split(' ')[1];
         console.log (token)
        const decoded=jwt.verify(token,process.env.JSON_SECRETKEY);
        console.log(decoded)
        const email1=decoded.email
        const username1=decoded.username
        const role1=decoded.role
        //fetch the user details
        
        req.user={email1,username1,role1}
        console.log(req.user)
        next()
    }
    catch(err){
        console.log(err)
        next(new customApiError('NOT A VALID TOKEN',401))
    }
}
module.exports=authorizeMiddleware