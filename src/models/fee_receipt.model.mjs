import mongoose from "mongoose";


const feeReceiptSchema = new mongoose.Schema({
    rollNo:{
        type: String,
        required: true
    },
    receiptNo:{
        type:String,
        unique:true,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    amount:{
        type: String,
        required: true
    },
    tutionFee:{
        type:String,
        required: true
    },
    name:{
        type: String,
        required: true
    
    },
    branch:{
        type: String,
        required: true
    },
    semester:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    paidThrough:{
        type: String,
        required: true
    }
});

const FeeReceipt = mongoose.model("FeeReceipt", feeReceiptSchema);

export default FeeReceipt;