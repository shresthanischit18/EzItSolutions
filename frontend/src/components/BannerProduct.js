import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSwapRight } from "react-icons/ai";
import video from "../assest/video.mp4";
import banner from "../assest/banner.jpg";

const BannerProduct = () => {
  return (
    <>
      <div className="relative overflow-hidden min-h-[600px] lg:min-h-[760px] flex justify-center items-center bg-cover bg-[url('https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_52683-76100.jpg?t=st=1724053908~exp=1724057508~hmac=1a3ea1e56047457d86f72dbb5a98447b06599701be625df0656a7d1f136fa9b7&w=996')]">
        {/*Hero Section */}
        <div className="container lg:pb-0 ">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 relative z-10 ml-0 lg:ml-[100px]">
                <h1 className="text-[30px] lg:text-[70px] font-semibold text-white">
                  Exclusive Deals on{" "}
                </h1>
                <h1 className="text-[30px] lg:text-[70px] font-semibold text-white lg:w-[700px]">
                  Electronic Accessories
                </h1>
                <p className="text-[15px] my-5 lg:p-0 text-gray-500">
                  Explore different categories. Fint the best deals.
                </p>
                <div>
                  <button className="bg-[#0E59F2] text-lg border-0 rounded-3xl py-3 px-12 text-white">
                    Find Solution
                  </button>
                </div>
              </div>
              {/*Image Section */}
              <div className="order-2 lg:order-2">
                <img
                  src={banner}
                  alt=""
                  className="w-[200px] h-[200px] lg:h-[400px] lg:w-[400px] lg:scale-125 object-contain mx-auto border rounded-full bg-white mt-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerProduct;
