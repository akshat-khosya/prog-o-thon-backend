import savedPurpose from "../models/gate_entry_purpose.mjs";

const createPurpose = async (data) => {
    try {
        const purpose = new savedPurpose(data);
        return await purpose.save();
    } catch (error) {
        throw new Error(error);
    }

};

const findAllQuery = async (data) => {

    try {
        return await savedPurpose.find(data);
    } catch (error) {
        throw new Error(error);
    }
};
const findOneQueryPurpose = async (data) => {

    try {
        return await savedPurpose.findOne(data);
    } catch (error) {
        throw new Error(error);
    }
};

const deletePurpose = async (id) => {
    try {
        return await savedPurpose.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
};

const updatePurpose = async (query,data) => {
    try {
        return await savedPurpose.findOneAndUpdate(query,{
            $set:data
        });
    } catch (error) {
        throw new Error(error);
    }
};
export { createPurpose, findAllQuery,deletePurpose,updatePurpose,findOneQueryPurpose };