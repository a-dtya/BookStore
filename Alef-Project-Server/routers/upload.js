const express = require('express');
const router = express.Router();
const { uploadMiddleware } = require('../middleware/uploadMiddleware');
const { uploadImage } = require('../controllers/uploadController')


router.post('/', uploadMiddleware, uploadImage);

module.exports = router;
