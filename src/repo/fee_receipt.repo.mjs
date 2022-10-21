import FeeReceipt from '../models/fee_receipt.model.mjs';

const feeSearchQuery = async (query) => {
    try {
        console.log(query);
        const data = await FeeReceipt.findOne(query);
        console.log(data);
        if (!data) {
            return false;
        }
        return data;
    } catch (error) {
        
        throw new Error(error);
    }
};
const feeSearchQueryAll = async (query)=>{
    try {
        const data = await FeeReceipt.find(query);
        if(data.length===0){
            return false;
        }
        return data;
    } catch (error) {
        throw new Error(error);
    }
}
const feeSaveData = async (data) => {
    try {
        
        const feeReceipt = new FeeReceipt(data);
        const saveData = await feeReceipt.save();
        return saveData;
    } catch (error) {
        
        throw new Error(error);
    }
}

export { feeSearchQuery, feeSaveData,feeSearchQueryAll };