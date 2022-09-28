import mongoose from "mongoose";


const HistorySchema = new mongoose.Schema({
    rollNo:{
        type: String,
        required: true
    },
    outgoingTime:{
        type: String,
        required: true
    },
    incomingTime:{
        type: String,
        
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
    out:{
        type:Boolean,
        default:true,
        required:true
        // if out true
    }
    
},{timestamps:true});

const History = mongoose.model("History", HistorySchema);

export default History;