const express=require('express')
const createbook=require('../Controllers/bookcontroller')
const router= express.Router();

router.post('/',createbook)
module.exports=router