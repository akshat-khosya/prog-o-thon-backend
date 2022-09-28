import History from "../models/gate_entry_history.mjs";


const findOneQueryHistory = async (query) => {
    const data = await History.findOne(query);
    return data;
}

const findAllQueryHistory = async (query) => {
    const data = await History.find(query);
    return data;
}
export { findOneQueryHistory,findAllQueryHistory };