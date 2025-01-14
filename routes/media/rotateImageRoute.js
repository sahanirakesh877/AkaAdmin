import express from 'express';
import { getRotateGalleries  } from '../../controllers/Media/rotateimageController.js'; 

const router = express.Router(); 

router.route('/').get(getRotateGalleries); 


export default router; 