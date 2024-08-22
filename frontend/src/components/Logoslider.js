import React from "react";
import "tailwindcss/tailwind.css";
import logo1 from "../assest/logo1.png";
import logo2 from "../assest/logo2.png";
import logo3 from "../assest/logo3.png";
import logo4 from "../assest/logo4.png";
import logo5 from "../assest/logo5.png";
import logo6 from "../assest/logo6.png";
import logo7 from "../assest/logo7.png";
import logo8 from "../assest/logo8.png";
import logo9 from "../assest/logo9.png";
import logo10 from "../assest/logo10.png";
import logo11 from "../assest/logo11.png";
import logo12 from "../assest/logo12.png";
import logo13 from "../assest/logo13.png";
import logo14 from "../assest/logo14.png";

function LogoSlider() {
  const row1 = [
    <img
      key="1"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo1}
      alt="Logo 1"
    />,
    <img
      key="2"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo2}
      alt="Logo 2"
    />,
    <img
      key="3"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo3}
      alt="Logo 3"
    />,
    <img
      key="3"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo4}
      alt="Logo 3"
    />,
    <img
      key="3"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo5}
      alt="Logo 3"
    />,
    <img
      key="3"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo6}
      alt="Logo 3"
    />,
    <img
      key="3"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo7}
      alt="Logo 3"
    />,
    <img
      key="3"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo8}
      alt="Logo 3"
    />,
    <img
      key="3"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo9}
      alt="Logo 3"
    />,
    <img
      key="3"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo10}
      alt="Logo 3"
    />,
    <img
      key="3"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo11}
      alt="Logo 3"
    />,
    <img
      key="3"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo12}
      alt="Logo 3"
    />,
    <img
      key="3"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo13}
      alt="Logo 3"
    />,
    <img
      key="3"
      className="object-contain w-full h-full rounded-md aspect-[16/9] p-5 shadow-md"
      src={logo14}
      alt="Logo 3"
    />,
  ];

  return (
    <div className="text-center font-semibold">
      {/* <h1 className="text-[20px] lg:text-[30px] ">Our Brands</h1> */}
      <div className="mt-5 flex items-center justify-center text-black relative">
        <div className="flex w-[1200px] overflow-hidden select-none mask-gradient">
          <div className="flex shrink-0 animate-scroll-x">
            {row1.map((el, idx) => (
              <div
                key={idx}
                className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
              >
                {el}
              </div>
            ))}
          </div>
          <div className="flex shrink-0 animate-scroll-x">
            {row1.map((el, idx) => (
              <div
                key={idx}
                className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
              >
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSlider;
