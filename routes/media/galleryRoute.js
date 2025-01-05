import express from 'express';
import { getGalleries  } from '../../controllers/Media/galleryController.js'; 

const router = express.Router(); 

router.route('/').get(getGalleries); 


export default router; 
