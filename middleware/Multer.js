import multer from 'multer';
import path from 'path';

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.image + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage }).single('image');

export const config = {
    api: {
        bodyParser: false,
    },
};