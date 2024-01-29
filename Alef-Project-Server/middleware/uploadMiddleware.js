const multer = require('multer');
const DatauriParser = require('datauri/parser');
const path = require('path');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const parser = new DatauriParser();

const uploadMiddleware = upload.single('image');

const dataUri = (req) => {
  if (!req.file) {
    return null;
  }
  return parser.format(path.extname(req.file.originalname).toString(), req.file.buffer);
};

module.exports = {uploadMiddleware,dataUri};
