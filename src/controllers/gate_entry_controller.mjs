import { createPurpose, deletePurpose, findAllQuery } from "../repo/gate_entry.mjs";
import { findAllQueryHistory, findOneQueryHistory } from "../repo/gate_entry_history.repo.mjs";
import { createSessionQuery, deleteSessionQuery, findOneQuerySession } from "../repo/gate_entry_session.repo.mjs";
import { checkForPurpose, validateForQr, validateForSessionQrCode } from "../service/gate_entry.service.mjs";


const cratePurposeHandeler = async (req, res) => {
    const validatePurpose = await checkForPurpose(req.body);
    if (!validatePurpose) {
        return res.status(401).json({ message: "Purpose already exists" });
    }
    const purpose = await createPurpose(req.body);
    return res.status(200).json({ message: "Purpose created successfully", purpose });

}

const deletePurposeHandeler = async (req, res) => {
    const purpose = await deletePurpose(req.params.id);
    return res.status(200).json({ message: "Purpose deleted successfully", purpose });
}
const getSavedPurpose = async (req,res)=>{
    const rollNo = req.params.rollNo;
    const data = await findAllQuery({rollNo:rollNo});
    return res.status(200).json({message:"Saved purpose",data});
}
// const updatePurposeHandeler = async (req,res) =>{
//     const validatePurpose = await checkForPurpose(req.body);
//     if(!validatePurpose){
//         return res.status(401).json({message:"Purpose already exists"});
//     }
//     const updatedPurpose = await updatePurpose({_id:req.params.id},req.body);
//     return res.status(200).json({message:"Purpose updated successfully",updatedPurpose});
// }

const genrateQrHandler = async (req, res) => {
    const rollNo = req.params.rollNo;
    const id = req.params.id;

    const check = await validateForQr(rollNo, id);
    if (check === false) {
        return res.status(401).json({ message: "Already checked out" });
    }
    return res.status(200).json({ message: "Qr genrated successfully", id: check });

}

const getAllUserHistory = async (req, res) => {
    const data = await findAllQueryHistory({});
    return res.status(200).json({ message: "All history", data });
}

const getUserHistory = async (req, res) => {
    const rollNo = req.params.rollNo;
    const data = await findAllQueryHistory({ rollNo: rollNo });
    return res.status(200).json({ message: "User history", data });
}

const scanQrCodeHandler = async (req,res)=>{
    const id=req.params.id;
    const session = await findOneQuerySession({_id:id});
    if(!session){
        return res.status(401).json({message:"Invalid QR code"});
    }
    let time = new Date();
    let time1 = new Date(session.sentTime);
    let diff = time - time1;
    let diffInMinutes = Math.floor(diff / 1000 / 60);
    if(diffInMinutes<1){
        // validate for session 
        const validate = await validateForSessionQrCode(session);
        if(validate){
            return res.status(200).json({message:"Valid QR code"});
        }
        return res.status(401).json({message:"Invalid QR code"});
    }
    else{
        const deleteSession = await deleteSessionQuery({_id:session._id}); 
        return res.status(401).json({message:"QR code expired"});
    }
}

const incomingQrCodeGenrator = async(req,res)=>{
    const rollNo=req.params.rollNo;
    
    const history = await findOneQueryHistory({rollNo:rollNo,out:true});
    console.log(history);
    if(!history){
        return res.status(401).json({message:"Can't genrate QR code"});
    }
    const session = await findOneQuerySession({rollNo:rollNo});
    if(session){
        const deletedSession = await deleteSessionQuery({_id:session._id});
    }
    const newSession = await createSessionQuery({rollNo:rollNo,sentTime:new Date(),historyId:history._id});
    return res.status(200).json({message:"QR code genrated successfully",id:newSession._id});
}
export { cratePurposeHandeler, deletePurposeHandeler, genrateQrHandler, getAllUserHistory,getUserHistory,scanQrCodeHandler,incomingQrCodeGenrator,getSavedPurpose };