import { Router } from 'express';
import { addProduct, getAllProducts } from '../controllers/productsController.js';
import { upload } from '../middlewares/fileUpload.js';

const router = Router();

// Add a new product
router.post('/addproduct', upload.single('picture'), addProduct);
router.get('/', getAllProducts);

export default router;
