import { axiosClientInstance } from '../config/axios';

export const getCategoryProducts = async (categoryId) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axiosClientInstance.get(
      `/products/getcategoryproducts/${categoryId}`
    );
    return data;
  } catch (error) {
    return error;
  }
};
