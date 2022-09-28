import express from "express";
import {cratePurposeHandeler, deletePurposeHandeler} from "../controllers/gate_entry_controller.mjs";
const gateEnteryRoute = ()=>{
    const router = express.Router();
    router.post("/api/gate-entrance/saved-purpose",cratePurposeHandeler);
    router.delete("/api/gate-entrance/saved-purpose/:id",deletePurposeHandeler);
    //router.patch("/ap/gate-entrance/saved-purpose/",updatePurposeHandeler);
    router.get("/api/gate-entrance/genrate-qr/:rollNo/:id");
    return router;
}

export default gateEnteryRoute;