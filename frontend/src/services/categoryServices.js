import { axiosClientInstance } from '../config/axios';

export const getAllCategory = async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axiosClientInstance.get('/categories');
    return data;
  } catch (error) {
    return error;
  }
};
