const mongoose=require('mongoose')

const connectDB=()=>{
    mongoose.set('debug',true)
 return mongoose.connect(process.env.DATABASE_URL)
}

module.exports=connectDB