import express from  "express";
import cors from "cors";
import routes from "../routes/index.mjs";

const app = ()=>{
    const app=express();
    const corsOptions = {
        origin: "*"
    };
    app.use(cors(corsOptions));
    app.use(express.json());
    routes(app);
    return app;

}

export default app;