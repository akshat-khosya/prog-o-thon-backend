import hostelAttendance from "../models/hostel_attendance.mjs"

const searchAllQueryAttendance = async (query)=>{
    const data = await hostelAttendance.find(query);
    return data;
}

export {searchAllQueryAttendance};