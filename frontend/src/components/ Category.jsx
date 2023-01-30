import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCategory } from '../services/categoryServices';

const Category = () => {
  const [categoriesList, setCategoriesList] = useState('');
  const navigate = useNavigate();
  // category from api pass to state

  useEffect(() => {
    getAllCategory().then((data) => {
      console.log(data);
      setCategoriesList(data);
    });
  }, []);

  console.log(categoriesList);
  return (
    <div className="container p-16 m-auto">
      <h2 className="text-2xl font-medium text-rose-600 uppercase mb-6 text-center">
        shop by category
      </h2>

      <div className="  flex flex-wrap md:grid grid-cols-3 gap-3  justify-center ">
        {/* loop through each category from state !bubble check img location */}

        {categoriesList.categories &&
          categoriesList.categories.map((category, i) => (
            <div
              key={category._id}
              onClick={() => navigate('/products')}
              className="relative rounded-sm overflow-hidden group max-h-[30vh] "
            >
              <img
                src={category.image}
                alt="category 1"
                className="w-[100%] h-[100%] object-cover object-center "
              />
              <a
                href="#"
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
              >
                {category.name}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
