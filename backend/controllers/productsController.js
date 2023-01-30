import Category from '../models/Category.js';
import Product from '../models/Product.js';
import uploadS3 from '../utils/s3.js';

// add product
// {
//   name:test,
//   price:20,
//   category:women,
//   picture:file
// }
export const addProduct = async (req, res) => {
  console.log(req.body);
  console.log('tes1');
  try {
    const { name, price, category } = req.body;
    if (!req.file)
      return res.status(500).json({ error: 'Product image is require' });
    const response = await uploadS3(req.file);
    const categoryId = await Category.findOne({ name: category }).select('_id');
    console.log(categoryId);
    if (!categoryId)
      return res.status(500).json({ error: 'Category not avilable' });

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

// get Allproduct
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// get Allproduct
export const getProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.find({ _id: id }).populate('category');
    if (!product) return res.status(404).json({ error: 'Product not found' });
    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
// get product by category
export const getCategoryProducts = async (req, res) => {
  try {
    const { categoryId } = req.params;

    console.log(categoryId);
    const products = await Product.find({ category: categoryId }).populate(
      'category'
    );
    if (!products || products.length === 0)
      return res.status(404).json({ error: 'No Products in this category' });
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
