import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(13).fill(null);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.categoryProduct.url);
    const dataResponse = await response.json();
    setLoading(false);
    setCategoryProduct(dataResponse.data);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <>
      <div className="container mx-auto my-10 lg:my-0 lg:mb-[80px]">
        <div className="lg:mt-[80px] lg:text-start text-center">
          <h1 className="text-[20px] lg:text-[30px] font-semibold mb-5">
            Categories
          </h1>
        </div>
        <hr />
        <div className="flex items-center gap-4 justify-between overflow-scroll scrollbar-none mt-5">
          {loading
            ? categoryLoading.map((el, index) => {
                return (
                  <div
                    className="h-16 w-16 md:w-38 md:h-38 rounded-md overflow-hidden bg-blue-200 animate-pulse "
                    key={"categoryLoading" + index}
                  ></div>
                );
              })
            : categoryProduct.map((product, index) => {
                return (
                  <Link
                    to={"/product-category?category=" + product?.category}
                    className="cursor-pointer"
                    key={product?.category}
                  >
                    <div className="w-16 h-16 md:w-40 md:h-40 rounded-md overflow-hidden p-4 bg-slate-200 flex items-center justify-center">
                      <img
                        src={product?.productImage[0]}
                        alt={product?.category}
                        className="h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
                      />
                    </div>
                    <p className="text-center text-sm md:text-base font-semibold mt-2 capitalize">
                      {product?.category}
                    </p>
                  </Link>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
