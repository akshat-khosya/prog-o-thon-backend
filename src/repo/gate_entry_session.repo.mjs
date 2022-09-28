import session from "../models/gate_entry_session.mjs";

const findOneQuerySession = async (query) => {
    const data = await session.findOne(query);
    return data;
}

const createSessionQuery = async (query) => {
    const data = new session(query);
    return await data.save();
}

const deleteSessionQuery = async (query)=>{
    return await session.findByIdAndDelete(query);
}
export { findOneQuerySession,createSessionQuery,deleteSessionQuery };