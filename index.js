const express=require('express')
const cors=require('cors')
require('dotenv').config()
const connectDB=require('./util/database')
const studentRouter=require('./routes/student-routes')
const bookRouter=require('./routes/book-routes')
const userRouter=require('./routes/user-routes')
const  blogRouter=require('./routes/blog-routes')
const app=express();
const errorhandler=require('./error/error-handler')
app.use(express.json())
app.use(cors())
app.use('/student',studentRouter)
app.use('/books',bookRouter)
app.use('/user',userRouter)
app.use('/blog',blogRouter)
app.use(errorhandler)
const start=async()=>{
    try{
        const connect=await connectDB();
        console.log(connect)
        app.listen(8084,()=>{
            console.log('server listening at port number 8084')
        })
     }
      catch(err){
    console.log(err)
        }
    
}
start()

