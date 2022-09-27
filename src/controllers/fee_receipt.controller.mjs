import { feeSearchQuery, feeSearchQueryAll } from "../repo/fee_receipt.repo.mjs";
import { createFeeRecipt,sendEmailRecipt } from "../service/fee_receipt.service.mjs";

const createFeeReciptData = async (req,res)=>{
    // check for reciept number
    const data = req.body.data;
    if(data.length===0){
        return res.status(400).json({message:"No data found"});
    }
    let inValidSet = new Set();
    for(let [index,element] of data.entries()){
        let checkReciptNo = await feeSearchQuery({receiptNo:element.receiptNo});
        
        if(checkReciptNo){
            
            inValidSet.add(index);
            
        }
    }
    // data.forEach(async (element,index )=> {
        
    // });

    if(inValidSet.size===data.length){
        return res.status(400).json({message:"All Invalid receipt number"});
    }
    for(let [index,element] of data.entries()){
        if(!inValidSet.has(index)){
            let feeReponse = await createFeeRecipt(element);
            if(!feeReponse){
                inValidSet.add(index);
            }

        }
    }
    // data.forEach(async(element,index)=>{
        
    // });
    for(let [index,element] of data.entries()){
        if(!inValidSet.has(index)){
            let emailResponse = await sendEmailRecipt(element);
          }
    }
   
    
    if(inValidSet.size===0){
        return res.status(200).json({message:"All data inserted successfully",size:0});
    }
    else{
        console.log(inValidSet);
        let result = [];
        for(let value of inValidSet){
            result.push(value);
        }
        return res.status(200).json({message:`${inValidSet.size} data not inserted `,size:inValidSet.size,data:result});
    }
    

}

const getFeeReciptData = async (req,res)=>{
    const {id,receiptNo,rollNo,semester} = req.params;
    let query = {};
    if(id){
        query._id = id;
    }
    if(receiptNo){
        query.receiptNo = receiptNo;
    }
    if(rollNo){
        query.rollNo = rollNo;
    }
    if(semester){
        query.semester = semester;
    }
    let feeReciptData = await feeSearchQuery(query);
    if(feeReciptData){
        return res.status(200).json({message:"Data found",data:feeReciptData});
    }
    else{
        return res.status(400).json({message:"No data found"});
    }
}

const getAllFeeReciptData = async (req,res)=>{
    const data = await feeSearchQueryAll({});
    return res.status(200).json({message:"Data found",data:data});
}
export {createFeeReciptData,getFeeReciptData,getAllFeeReciptData};