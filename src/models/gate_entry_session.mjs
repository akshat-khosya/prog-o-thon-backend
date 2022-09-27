import mongoose from "mongoose";


const sessionSchema = new mongoose.Schema({
    rollNo:{
        type: String,
        required: true
    },
    historyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'History'
    }
    
},{timestamps:true});

const session = mongoose.model("session", sessionSchema);

export default session;