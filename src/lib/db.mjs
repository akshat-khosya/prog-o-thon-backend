import mongoose from "mongoose";
import config from "./config.mjs";

const connect=()=>{
    const uri = config.get("db_uri");
    return mongoose
        .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Connected to database");
    })
    .catch((err)=>{
        console.log(err);
    });
}

export default connect;