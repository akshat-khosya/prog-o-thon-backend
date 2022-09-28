import { findAllQuery } from "../repo/gate_entry.mjs";



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
    const checkHistory = await findOneQuery({ rollNo: rollNo, out: true });
    if (checkHistory) {
        return false;
    }
    const checkSession = await findOneQuery({ rollNo: rollNo });
    if (checkSession) {

    }



}
export { checkForPurpose };