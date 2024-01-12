const book=require('../models/book')

const createbook=async(req,res)=>{
    try{
        const books=await book.create(req.body);
        res.status(201).json(books)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports=createbook