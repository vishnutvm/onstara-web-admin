import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategoryProducts } from '../../services/productServices';
import LoadingPage from '../LoadingPage';

const ProductsPage = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const response = useParams();
  console.log(response);
  useEffect(() => {
    getCategoryProducts(categoryId)
      .then((data) => {
        console.log(data);
        setProductList(data.products);
        setTimeout(() => {
          setLoading(false);
        }, 300);
        
      })
      .catch((error) => {
        console.log(error);
        navigate('/');
      });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">
              {productList &&
                productList.length > 0 &&
                productList[0].category.name}
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {productList &&
                productList.map((product) => (
                  <div key={product._id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <img
                        src={product.image}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.category.name}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsPage;
