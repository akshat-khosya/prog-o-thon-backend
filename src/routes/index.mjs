import feeReceiptRoute from "./fee_receipt.route.mjs";
import gateEnteryRoute from "./gate_entry.route.mjs";
import hostelAttendanceRoute from "./hostel_attendance.route.mjs";

const routes =(app)=>{
    app.use(feeReceiptRoute());
    app.use(gateEnteryRoute());
    app.use(hostelAttendanceRoute());
}

export default routes;