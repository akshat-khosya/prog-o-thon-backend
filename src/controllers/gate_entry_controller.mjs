import { createPurpose, deletePurpose, updatePurpose } from "../repo/gate_entry.mjs";
import { checkForPurpose } from "../service/gate_entry.service.mjs";


const cratePurposeHandeler = async (req,res) =>{
    const validatePurpose = await checkForPurpose(req.body);
    if(!validatePurpose){
        return res.status(401).json({message:"Purpose already exists"});
    }
    const purpose = await createPurpose(req.body);
    return res.status(200).json({message:"Purpose created successfully",purpose});

}

const deletePurposeHandeler = async (req,res) =>{
    const purpose = await deletePurpose(req.params.id);
    return res.status(200).json({message:"Purpose deleted successfully",purpose});
}

const updatePurposeHandeler = async (req,res) =>{
    const validatePurpose = await checkForPurpose(req.body);
    if(!validatePurpose){
        return res.status(401).json({message:"Purpose already exists"});
    }
    const updatedPurpose = await updatePurpose({_id:req.params.id},req.body);
    return res.status(200).json({message:"Purpose updated successfully",updatedPurpose});
}
export {cratePurposeHandeler,deletePurposeHandeler,updatePurposeHandeler};