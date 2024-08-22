import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Items = ({ Links, title }) => {
  return (
    <ul className="lg:ml-[80px]">
      <h1 className="lg:mb-5 font-semibold text-white lg:mt-10 text-[18px] lg:text-[22px]">
        {title}
      </h1>
      {Links.map((link) => (
        <li key={link.name}>
          <div className="flex my-8">
            <MdKeyboardDoubleArrowRight />
            <a
              className="text-gray-300 hover:text-[#0068c8] duration-300
          text-sm lg:text-[18px] cursor-pointer leading-6"
              href={link.link}
            >
              {link.name}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Items;
