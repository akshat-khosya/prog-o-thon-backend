import express from "express";
import { attendanceHandler } from "../controllers/hostel_attendance.mjs";
import upload from "../middleware/multer.middleware.mjs";



const hostelAttendanceRoute = ()=>{
    const router = express.Router();
    router.post("/api/hostel-attendance",upload.single('file'),attendanceHandler);
    router.get("/api/hostel-attendance/user/:rollNo");
    router.get("/api/hostel-attendance/admin/");
    return router;
}

export default hostelAttendanceRoute;