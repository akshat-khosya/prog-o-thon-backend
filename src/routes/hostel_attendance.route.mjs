import express from "express";
import { attendanceHandler, getAllStudentAttendance } from "../controllers/hostel_attendance.mjs";
import upload from "../middleware/multer.middleware.mjs";



const hostelAttendanceRoute = ()=>{
    const router = express.Router();
    router.post("/api/hostel-attendance",upload.single('file'),attendanceHandler);
    router.get("/api/hostel-attendance/user/:rollNo",getUser);
    router.get("/api/hostel-attendance/admin/",getAllStudentAttendance);
    return router;
}

export default hostelAttendanceRoute;