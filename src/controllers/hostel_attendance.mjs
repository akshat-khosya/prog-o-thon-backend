import { fileURLToPath } from "url";
import path, { dirname } from "path";
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
const attendanceHandler = async (req,res)=>{
    const filePath = path.join(__dirname, "images", req.file.filename);
   console.log(filePath);
    res.send("File uploaded successfully");
}

export {attendanceHandler};