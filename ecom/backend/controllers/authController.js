import User from "../models/User.js";
import jwt from "jsonwebtoken";


// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn:"30d"
    })
};

// @desc Register User
// @ route POST /api/auth/register

export const registerUser = async(req, res) => {
    try{

        const { name, email, password } = req.body;

        console.log(name, email, password);

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
                token:generateToken(user._id)
            })
        }

    }catch(err){
        console.log(err);
        res.status(400).json({message:`Invalid user data`});
    }

}

// @desc Login User
// @ route POST /api/auth/login

export const loginUser = async(req, res) => {
    try{

        const { email, password } = req.body;

        const user = await User.findOne({email});

        if(user){
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token:generateToken(user._id)
            })
        }else{
            res.status(401).json({message:"Invalid email or password"});
        }

    }catch(err){
        res.status(400).json({message:`Invalid user data`});
    }

}

// @desc    Get user profile
// @route   GET /api/auth/profile

export const getUserProfile = async(req, res) => {

    console.log("from get", req.user);

    try{

        const user = await User.findById(req.user._id).select("-password");
        res.json(user);

    }catch(err){
        res.status(400).json({message:err.message});
    }


}


