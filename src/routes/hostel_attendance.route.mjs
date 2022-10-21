import express from "express";
import { attendanceHandler, getAllStudentAttedance, getStudentAttendance } from "../controllers/hostel_attendance.mjs";
import upload from "../middleware/multer.middleware.mjs";



const hostelAttendanceRoute = ()=>{
    const router = express.Router();
    router.post("/api/hostel-attendance",attendanceHandler);
    router.get("/api/hostel-attendance/user/:rollNo",getStudentAttendance);
    router.get("/api/hostel-attendance/admin/",getAllStudentAttedance);
    return router;
}

export default hostelAttendanceRoute;