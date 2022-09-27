import express from "express";
import { createFeeReciptData, getAllFeeReciptData, getFeeReciptData } from "../controllers/fee_receipt.controller.mjs";
const feeReceiptRoute = ()=>{
    const router = express.Router();
    router.post("/api/fee-receipts",createFeeReciptData);
    router.get("/api/fee-receipts/:id/:receiptNo/:rollNo/:semester",getFeeReciptData);
    router.get("/api/fee-receipts/all",getAllFeeReciptData);
    return router;
}

export default feeReceiptRoute;