import React, { useState } from 'react';

const Category = () => {
  // category from api pass to state
  const [category, setCategory] = useState([]);

  return (
    <div className="container p-16 m-auto">
      <h2 className="text-2xl font-medium text-rose-600 uppercase mb-6 text-center">
        shop by category
      </h2>
      <div className="  flex flex-wrap md:grid grid-cols-3 gap-3  justify-center ">
        {/* loop through each category from state !bubble check img location */}
        <div className="relative rounded-sm overflow-hidden group max-h-[30vh] ">
          <img
            src="https://images.pexels.com/photos/8531230/pexels-photo-8531230.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="category 1"
            className="w-[100%] h-[100%] object-cover object-center "
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            category1
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group max-h-[30vh] ">
          <img
            src="https://images.pexels.com/photos/14604370/pexels-photo-14604370.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="category 1"
            className="w-[100%] h-[100%] object-cover object-center "
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            category1
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group max-h-[30vh] ">
          <img
            src="https://images.pexels.com/photos/8916600/pexels-photo-8916600.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="category 1"
            className="w-[100%] h-[100%] object-cover object-center "
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            category1
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group max-h-[30vh] ">
          <img
            src="https://images.pexels.com/photos/14604370/pexels-photo-14604370.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="category 1"
            className="w-[100%] h-[100%] object-cover object-center "
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            category1
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
