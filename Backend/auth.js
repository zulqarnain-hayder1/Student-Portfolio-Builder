import express from "express";
import { collection, connectDB } from "./db_config.js";
import jwt from "jsonwebtoken";
const router = express.Router();
import cookieParser from "cookie-parser";

router.use(cookieParser());

router.post("/register", async (req, res) => {
  const { fullname, email, password } = req.body;
  if (!fullname || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
      success: false,
    });
  }

  try {
    const db = await connectDB();
    const collectiondata = db.collection(collection || "Users_data");

    const existingUser = await collectiondata.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }
    const user = await collectiondata.insertOne({
      fullname,
      email,
      password,
    });
    // check if user is created successfully
    if (user) {
      jwt.sign({ email }, "Google", { expiresIn: "3d" }, (error, token) => {

        if (error || !token) {
          return res.status(500).json({
            message: "Error in token generation",
            success: false,
          });
        }
          // Log the generated token for debugging purposes
       console.log("Generated token:", token);
        return res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
          }).status(201).json({
            message: "User registered successfully",
            success: true,
            token,
          });
      
      });
      
    } else {
      return res.status(500).json({
        message: "User registration failed",
        success: false,
      });
    }
  } catch (error) {
    console.log("Error in user registration:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});

// *? Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
      success: false,
    });
  }

  try {
    const db = await connectDB();
    const collectiondata = db.collection(collection || "Users_data");
    const user = await collectiondata.findOne({email, password});
    if (user) {
      jwt.sign({email},"Google",{expiresIn:"3d"},(error,token)=>{
        if(error || !token){
          return res.status(500).json({
            message:"Error in token generation",
            success:false,
          })
        }
        return res.cookie("login-token",token,{
          httpOnly:true,
          sameSite:"lax",

        }).status(200).json({
          message:"Login successful",
          success:true,
          token
        })
      })
    } else {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }
  } catch (error) {
    console.log("Error in user login:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});
export default router;
