import express from "express";
import {cratePurposeHandeler, deletePurposeHandeler, genrateQrHandler, getAllUserHistory, getUserHistory} from "../controllers/gate_entry_controller.mjs";
const gateEnteryRoute = ()=>{
    const router = express.Router();
    router.post("/api/gate-entrance/saved-purpose",cratePurposeHandeler);
    router.delete("/api/gate-entrance/saved-purpose/:id",deletePurposeHandeler);
    //router.patch("/ap/gate-entrance/saved-purpose/",updatePurposeHandeler);
    router.get("/api/gate-entrance/genrate-qr/:rollNo/:id",genrateQrHandler);
    router.get("/api/gate-entrance/scan-qr/:id");
    router.get("/api/gate-entrance/genrate-qr/incoming/:rollNo/:id");
    router.get("/api/gate-entrance/user-history/:rollNo",getUserHistory);
    router.get("/api/gate-entrance/all-history/",getAllUserHistory);
    return router;
}

export default gateEnteryRoute;