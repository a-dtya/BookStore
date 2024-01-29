const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();
const cloudinary = require('../config/uploadConfig');


const uploadImage = (req, res, next) => {
  try {
    if (!req.file) {
      res.json({ Message: `Please select an image to be uploaded` });
      return;
    }

    // Checking if the uploaded file is an image
    if (!req.file.mimetype.startsWith('image/')) {
      res.json({ Message: `Only image files are allowed` });
      return;
    }

    const ext = req.file.originalname.split('.').pop(); // Getting the original file extension to use it later

    const dataUri = parser.format(`.${ext}`, req.file.buffer); // Use the original file extension from 'ext' :)

    cloudinary.uploader.upload(dataUri.content, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ Message: `Failed to upload image` });
        return;
      }

      res.json({ imageUrl: result.secure_url });
    });
  } catch (error) {
    next(error);
    res.status(500).json({ Message: `An unexpected error occurred` });
  }
};

module.exports = {
  uploadImage
};
