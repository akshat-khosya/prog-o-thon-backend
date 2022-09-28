import { findAllQuery, findOneQueryPurpose } from "../repo/gate_entry.mjs";
import { createHistoryQuery, findOneQueryHistory, updateHistoryQuery } from "../repo/gate_entry_history.repo.mjs";
import { createSessionQuery, deleteSessionQuery, findOneQuerySession } from "../repo/gate_entry_session.repo.mjs";



const checkForPurpose = async (data) => {
    const queryReponse = await findAllQuery({ rollNo: data.rollNo });
    if (queryReponse.length === 0) {
        return true;
    }
    let validSet = new Set();
    queryReponse.forEach((item) => {
        validSet.add(item.purpose);
    });
    if (validSet.has(data.purpose)) {
        return false;
    }
    return true;
}

// const reCheckPurpose = async (data)=>{

// }

const validateForQr = async (rollNo, id) => {
    const checkHistory = await findOneQueryHistory({ rollNo: rollNo, out: true });
    if (checkHistory) {
        return false;
    }
    const checkSession = await findOneQuerySession({ rollNo: rollNo });
   
    if (checkSession) {
        let time = new Date();
        let time1 = new Date(checkSession.sentTime);
        let diff = time - time1;
        let diffInMinutes = Math.floor(diff / 1000 / 60);
        console.log(diffInMinutes);
        console.log(checkSession.historyId);
        if (diffInMinutes < 1) {
            if (!checkSession.historyId) {
                return checkSession._id;
            } else {
                return false;
            }

        } else {
            console.log("time out");
            const deleteSession = await deleteSessionQuery({_id:checkSession._id});
            console.log(deleteSession);
        }
    }
    const { _id, ...others } = await findOneQueryPurpose({ _id: id });
    const sessionData = {
        sentTime:new Date(),
        ...others._doc
    }
   
    const newSession = await createSessionQuery(sessionData);
    console.log(newSession);
    return newSession._id;



}

const validateForSessionQrCode = async(data)=>{
    if(data.historyId){
        const time = new Date();
        const updatedHistory = await updateHistoryQuery({_id:data.historyId},{incomingTime:time,out:false});
        const deleteSession = await deleteSessionQuery({_id:data._id});
        return true ;
    }
    let historyData={
        rollNo:data.rollNo,
        purpose:data.purpose,
        destination:data.destination,
        type:data.type,
        outgoingTime:new Date(),
        out:true,
    
    };
    if(data.url){
        historyData[url]=data.url;
    }
    const newHistory = await createHistoryQuery(historyData);
    return true;
    
}
export { checkForPurpose, validateForQr,validateForSessionQrCode };