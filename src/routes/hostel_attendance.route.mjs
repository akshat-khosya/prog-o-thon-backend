import express from "express";
<<<<<<< HEAD
import { attendanceHandler, getAllStudentAttedance, getStudentAttendance } from "../controllers/hostel_attendance.mjs";
=======
import { attendanceHandler, getAllStudentAttendance } from "../controllers/hostel_attendance.mjs";
>>>>>>> d55b6458ea1a59ca81c8184add5c8ef1735cfa4e
import upload from "../middleware/multer.middleware.mjs";



const hostelAttendanceRoute = ()=>{
    const router = express.Router();
<<<<<<< HEAD
    router.post("/api/hostel-attendance",attendanceHandler);
    router.get("/api/hostel-attendance/user/:rollNo",getStudentAttendance);
    router.get("/api/hostel-attendance/admin/",getAllStudentAttedance);
=======
    router.post("/api/hostel-attendance",upload.single('file'),attendanceHandler);
    router.get("/api/hostel-attendance/user/:rollNo",getUser);
    router.get("/api/hostel-attendance/admin/",getAllStudentAttendance);
>>>>>>> d55b6458ea1a59ca81c8184add5c8ef1735cfa4e
    return router;
}

export default hostelAttendanceRoute;