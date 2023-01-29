import Category from '../models/Category.js';
import uploadS3 from '../utils/s3.js';

// add category
export const addCategory = async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  try {
    if (req.file) {
      // uploading the file in s3 then the the path url save to db with other details
      const response = await uploadS3(req.file);

      console.log(response);
      const { name } = req.body;
      const category = new Category({ name, image: response.Location });
      await category.save();
      return res.status(201).json({ category });
    } else {
      return res.status(500).json({ error: 'Image is require' });
    }
  } catch (error) {
    console.log('err');
    return res.status(500).json({ error });
  }
};

// get category
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ categories });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
