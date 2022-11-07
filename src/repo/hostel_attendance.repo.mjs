<<<<<<< HEAD
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
=======
import hostelAttendance from "../models/hostel_attendance.mjs"

const searchAllQueryAttendance = async (query)=>{
    const data = await hostelAttendance.find(query);
    return data;
}

export {searchAllQueryAttendance};
>>>>>>> d55b6458ea1a59ca81c8184add5c8ef1735cfa4e
