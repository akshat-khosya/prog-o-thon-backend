import { findAllQuery } from "../repo/gate_entry.mjs";



const checkForPurpose = async (data)=>{
    const queryReponse = await findAllQuery({rollNo:data.rollNo});
    if(queryReponse.length===0){
        return true;
    }
    let validSet = new Set();
    queryReponse.forEach((item)=>{
        validSet.add(item.purpose);
    });
    if(validSet.has(data.purpose)){
        return false;
    }
    return true;
}

export {checkForPurpose};