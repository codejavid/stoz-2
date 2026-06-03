
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import cors from "cors";

import User from "./models/User.js";


dotenv.config();

const app = express();


app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        msg:"Hello"
    })
});

app.post("/register", async (req, res) => {
    try{

        const { name, email, password } = req.body;

        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({message:"User already exist"});
        }

        const user = await User.create({
            name,
            email,
            password
        })

        if(user){
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token:"this a token"
            })
        }

    }catch(err){
        res.status(400).json({message:`Invalid user data`});
    }
})


app.post("/login", async (req, res) => {
    try{

        const { email, password } = req.body;

        const user = await User.findOne({email});

        if(user){
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token:"this a token"
            })
        }else{
            res.status(401).json({message:"Invalid email or password"});
        }

    }catch(err){
        res.status(400).json({message:`Invalid user data`});
    }
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
