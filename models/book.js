const mongoose=require('mongoose')
const BookSchema=new mongoose.Schema({
    "bookname":String,
    "price":Number,
    "author":String
})

module.exports=mongoose.model('book',BookSchema)