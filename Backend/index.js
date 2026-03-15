import express from 'express';
import router from './auth.js';
import intern_router from './Interns.js';
import cookiesParser from 'cookie-parser';
import cors from 'cors'

const app = express();
// ** <<<------------ Middleware -------------->>> */
app.use(express.json())
app.use(cors())
app.use(cookiesParser())
app.use("/uploads", express.static("uploads"));


app.get("/",(req,res)=>{
    res.send({
        message:"Hello World",
        success:true
    })
})

app.use("/auth",router)
app.use("/interns",intern_router) 


app.listen(3000,()=>console.log(`Server is running on : http://localhost:3000`))