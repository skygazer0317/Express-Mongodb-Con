const express=require('express');
const {createstudent, getAllStudents, updateStudent, deleteStudentById}=require('../Controllers/studentcontroller');
const authorizeMiddleware = require('../middleware/auth');
const router=express.Router();

router.post('/',authorizeMiddleware,createstudent)
router.get('/',getAllStudents)
router.put('/:id',authorizeMiddleware,updateStudent)
router.delete('/:id',authorizeMiddleware,deleteStudentById)
module.exports=router