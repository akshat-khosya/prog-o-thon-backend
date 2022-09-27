import feeReceiptRoute from "./fee_receipt.route.mjs";

const routes =(app)=>{
    app.use(feeReceiptRoute());
}

export default routes;