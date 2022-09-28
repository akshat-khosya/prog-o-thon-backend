import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { searchAllQueryAttendance } from "../repo/hostel_attendance.repo.mjs";
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
const attendanceHandler = async (req,res)=>{
    const filePath = path.join(__dirname, "images", req.file.filename);
   console.log(filePath);
    res.send("File uploaded successfully");
}

const getAllStudentAttendance = async (req,res)=>{
    const data = await searchAllQueryAttendance({});
    return res.status(200).join(data);
}
export {attendanceHandler,getAllStudentAttendance};