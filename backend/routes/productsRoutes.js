import { Router } from 'express';
import { addProduct } from '../controllers/productsController.js';
import { upload } from '../middlewares/fileUpload.js';

const router = Router();

// Add a new product
router.post('/addproduct', upload.single('picture'), addProduct);

export default router;
