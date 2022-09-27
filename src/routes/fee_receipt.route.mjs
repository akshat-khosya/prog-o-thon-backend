import express from "express";
import { createFeeReciptData } from "../controllers/fee_receipt.controller.mjs";
const feeReceiptRoute = ()=>{
    const router = express.Router();
    router.post("/api/fee-receipts",createFeeReciptData);
    return router;
}

export default feeReceiptRoute;