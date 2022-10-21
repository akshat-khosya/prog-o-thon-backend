import { fileURLToPath } from "url";
import path, { dirname } from "path";
import * as child from "child_process";
import { createAttendance, searchQueryAttendance } from "../repo/hostel_attendance.repo.mjs";
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
const attendanceHandler = async (req,res)=>{
    const filePath = path.join(__dirname, "src/dl", "Final.py");
    
    child.exec(`python C:/Users/20106/Documents/prog-o-thon-backend/src/dl/Final.py`, async (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        let data ="";
        for(let i=0;i<stdout.length;i++){
            if(stdout[i]<="9" && stdout[i]>="0"){
                data+=stdout[i];
            }
        }
        if(data===""){
           return res.status(400).json({message:"No face detected"});
        }
        else{
            let date =new Date();
            date=date.toString().slice(4,13);
            console.log(data);
            const findAttendance = await searchQueryAttendance({rollNo:data,date:date});
            if(findAttendance.length!==0){
               return res.status(200).json({message:"Attendance is already marked",rollNo:data});
            }
            const attendance = await createAttendance({rollNo:data,date:date});
           return res.status(200).json({message:"Attendance marked",rollNo:data});
        }
        console.log(data);
    });
    
}

const getAllStudentAttedance = async (req,res)=>{
    const attendance = await searchQueryAttendance({});
    return res.status(200).json({attendance});
}

const getStudentAttendance = async (req,res)=>{
    const {rollNo} = req.params;
    const attendance = await searchQueryAttendance({rollNo:rollNo});
    return res.status(200).json({attendance});
}
export {attendanceHandler,getAllStudentAttedance,getStudentAttendance};