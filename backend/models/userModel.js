import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        // match:[/.+\@.+\..+\1.+\2+\3+\4+\5+\6+\7\8\9\0/,'please enter the valid email']
    },
    username:{
      type:String,
      required:true,
      unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePhoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male", "female"],
        required:true
    }
}, {timestamps:true});
export const User = mongoose.model("User", userModel);