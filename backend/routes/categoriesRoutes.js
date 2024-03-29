import { Router } from 'express';
import {
  addCategory,
  getCategories,
} from '../controllers/categoriesController.js';
import { upload } from '../middlewares/fileUpload.js';

const router = Router();

// api for adding category , middleware for adding picture of category

// {
//   name:test,
//   picture:file
// }

router.post('/addcategory', upload.single('picture'), addCategory);

// api for getting all categories
router.get('/', getCategories);
export default router;
