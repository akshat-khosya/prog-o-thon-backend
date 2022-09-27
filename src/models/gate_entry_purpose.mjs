import mongoose from "mongoose";


const savedPurposeSchema = new mongoose.Schema({
    rollNo:{
        type: String,
        required: true
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
    }
    
},{timestamps:true});

const savedPurpose = mongoose.model("savedPurpose", savedPurposeSchema);

export default savedPurpose;