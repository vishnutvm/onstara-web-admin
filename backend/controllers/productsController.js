import Category from '../models/Category.js';
import Product from '../models/Product.js';
import uploadS3 from '../utils/s3.js';

export const addProduct = async (req, res) => {
  console.log(req.body);
  console.log('tes1');
  try {
    const { name, price, category } = req.body;
    if (!req.file) {
      return res.status(500).json({ error: 'Product image is require' });
    }
    const response = await uploadS3(req.file);
    const categoryId = await Category.findOne({ name: category }).select('_id');
    console.log(categoryId);
    if (!categoryId) {
      return res.status(500).json({ error: 'Category not avilable' });
    }
    const product = new Product({
      name,
      price,
      category: categoryId,
      image: response.Location,
    });
    await product.save();
    return res.status(201).json({ product });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
