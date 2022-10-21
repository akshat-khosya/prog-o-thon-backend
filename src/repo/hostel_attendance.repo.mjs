import hostelAttendance from "../models/hostel_attendance.mjs";

const createAttendance = async (data) => {

    const attendance = new hostelAttendance(data);
    return await attendance.save();
}

const searchQueryAttendance =async (query)=>{
    const attendance = await hostelAttendance.find(query);
    return attendance;
}

export {createAttendance,searchQueryAttendance};