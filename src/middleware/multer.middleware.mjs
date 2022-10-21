import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./video");
    },
    filename: (req, file, cb) => {
        cb(null, "VID20220929024020.mp4");
    },
});
const upload = multer({ storage: storage });

export default upload;