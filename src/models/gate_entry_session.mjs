import mongoose from "mongoose";


const sessionSchema = new mongoose.Schema({
    
    historyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'History'
    },
    rollNo:{
        type: String,
        required: true,
        unique:true
    },
    purpose:{
        type:String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    type:{
        type: String,
        default:"0",
        required: true
        // 0 means one day and 1 days means leaves;
    },
    url:{
        type: String,
    },
    sentTime:{
        type:Date,
        required:true
    }
    
},{timestamps:true});

const session = mongoose.model("session", sessionSchema);

export default session;