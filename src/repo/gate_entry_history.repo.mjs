import History from "../models/gate_entry_history.mjs";


const findOneQueryHistory = async (query) => {
    const data = await History.findOne(query);
    return data;
}

const findAllQueryHistory = async (query) => {
    const data = await History.find(query);
    return data;
}
const createHistoryQuery = async (data) => {
    const newHistory = new History(data);
    const data1 = await newHistory.save();
    return data1;
}
const updateHistoryQuery = async (query, data) => {
    const data1 = await History.updateOne(query, {
        $set: data
    });
    return data1;
}
export { findOneQueryHistory,findAllQueryHistory,createHistoryQuery,updateHistoryQuery };