import { feeSearchQuery, feeSaveData } from "../repo/fee_receipt.repo.mjs";
import sendMail from "../utils/email.utils.mjs";



const createFeeRecipt = async (data) => {

    const validateData = await feeSearchQuery({ rollNo: data.rollNo, semester: data.semester });
    
    if (validateData) {
        return false;
    }
    const feeReceipt = await feeSaveData(data);
    return true;

}

const sendEmailRecipt = async (data) => {
    const email = `${data.rollNo}@iiitu.ac.in`;
    
    const feeReceipt = await feeSearchQuery({ receiptNo: data.receiptNo });
   
    const link = `http://192.168.137.135:3000/fee-receipt/download/${feeReceipt._id.toString()}/${data.receiptNo}/${data.rollNo}/${data.semester}`;
    await sendMail(email, "Fee Recipt", link);
    return true;
}

export { createFeeRecipt, sendEmailRecipt };