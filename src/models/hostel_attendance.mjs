import mongoose from "mongoose";


const hostelAttendanceSchema = new mongoose.Schema({
    rollNo:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    
},{timestamps:true});

const hostelAttendance = mongoose.model("hostelAttendance", hostelAttendanceSchema);

export default hostelAttendance;