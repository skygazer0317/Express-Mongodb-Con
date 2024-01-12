 const customApiError=require('./customApiError')
 const errorhandler=require=(err,req,res,next)=>{
    //different error types-if error type is customerApiError
    //it contains statusCOde and message
    if(err instanceof customApiError)
    res.status(err.statusCode).json({msg:err.message});
else    res.status(500).json({'msg':err.message})
};

module.exports=errorhandler