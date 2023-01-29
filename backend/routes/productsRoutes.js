import { Router } from 'express';
import {
  addProduct,
  getAllProducts,
  getProducts,
} from '../controllers/productsController.js';
import { upload } from '../middlewares/fileUpload.js';

const router = Router();

// Add a new product
router.post('/addproduct', upload.single('picture'), addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProducts);

export default router;
