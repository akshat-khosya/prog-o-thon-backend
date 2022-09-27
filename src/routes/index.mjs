import feeReceiptRoute from "./fee_receipt.route.mjs";
import gateEnteryRoute from "./gate_entry.route.mjs";

const routes =(app)=>{
    app.use(feeReceiptRoute());
    app.use(gateEnteryRoute());
}

export default routes;