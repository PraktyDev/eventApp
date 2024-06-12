import multer from 'multer';

// Multer configuration
const storage = multer.diskStorage({
    destination: 'public/images',
    filename: (req, file, cb) => {
       return cb(null, `${Date.now()}${file.originalname}`);
    },
});

const upload = multer({ storage: storage }).single('image');

export const config = {
    api: {
        bodyParser: false,
    },
};