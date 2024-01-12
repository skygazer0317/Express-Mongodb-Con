const customApiError = require('../error/customApiError');
const student=require('../models/student')

const createstudent=async(req,res)=>{
    try{
        const stu=await student.create(req.body);
        res.status(201).json(stu)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

const getAllStudents=async(req,res)=>{
    try{
        const students=await student.find();
        res.status(200).json(students)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

const updateStudent=async(req,res,next)=>{
    const studentId=req.params.id;
    try{
        console.log(req.body);
        const updateStud = await student.findByIdAndUpdate(studentId,req.body,{new:true});
        if(!updateStud)
        next(new customApiError(`cannot be updated..${studentId}doesnt exsits..`,400))
    else
        res.status(200).json(updateStud)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }

}

const deleteStudentById=async(req,res,next)=>{
    const studentId=req.params.id;
    try{
     const result =await student.deleteOne({ _id: studentId});
     if(result.deletedCount===0)
     next(new customApiError(`${studentId} doesnot exists`,400))
    else
        res.status(200).json({"message":"deleted successfully"})
    }
    catch(err){
        console.log(err)
        //res.status(500).json(err)
        next(new customApiError('objectID is not valid',500))
    }
}


module.exports={createstudent,getAllStudents,updateStudent,deleteStudentById}