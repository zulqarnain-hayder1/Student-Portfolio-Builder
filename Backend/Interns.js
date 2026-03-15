import express from 'express';
import {connectDB} from './db_config.js';
import upload from './mutler.js';

const router = express.Router()
//** <<<------------ test api -------------->>> */
router.get("/",async(req,res)=>{
    res.send({
        message:"Hello World",
        success:true
    })
})

// ? <<<------------ Upload Image -------------->>> */
router.post("/upload-image",upload.single("upload_file"),async(req,res)=>{
    const upload_file = req.file?.filename;
    if(!upload_file){
        return res.status(400).json({
            message:"No file uploaded",
            success:false
        })
    }

    res.status(200).json({
        message:"File uploaded successfully",
        success:true,
        filename:upload_file,
    });

});
router.post("/add-portfolio",upload.single("upload_file"),async(req,res)=>{
    const {title,description,tags} = req.body;
    const upload_file = req.file?.filename;

    if(!title || !description || !tags || !upload_file){
        return res.status(400).json({
            message:"All fields are required",
            success:false
        })
    }

    try{
        const db = await connectDB()
        const collectiondata = db.collection("Interns_project")
        const result = await collectiondata.insertOne({title,description,tags,upload_file,createdAt:new Date()})
        if(result){
         res.status(201).json({
                message:"Project added successfully",
                success:true,
                data:result
            })
        }else{
             res.status(500).json({
                message:"Failed to add project",
                success:false
            })
        }
    }catch(error){
       
         res.status(500).json({
            message:"Error in adding project",
            success:false,
            error:error.message
        })
    }
})


router.get("/projects",async(req,res)=>{
    try{
        const db = await connectDB()
        const collectiondata = db.collection("Interns_project")
        const projects = await collectiondata.find({}).toArray()
        if(projects){
            res.status(200).json({
                message:"Projects fetched successfully",
                success:true,
                data:projects
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error in fetching projects",
            success:false,
            error:error.message
        })
    }
})

export default router