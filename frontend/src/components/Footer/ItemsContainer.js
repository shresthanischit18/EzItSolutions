import Items from "./Items.js";
import { SHOP, CONTACT } from "./Menu.js";
import { FaPhoneVolume } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import logo from "../../assest/logo.png";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[60px] md:gap-[80px] px-5 py-16 text-[22px] font-semibold ml-0 lg:ml-[100px] mx-auto">
      <div className="flex flex-col">
        <img className="h-[80px] w-[80px] mb-8" src={logo} alt="Logo" />
        <p className="mb-5 text-sm lg:text-[18px] text-gray-400">
          Ezee IT Solutions is dedicated to 100% Customer delight Ensuring that
          Everything from placing your order to delivering it right to your
          doorstep is smooth and hassle-free.
        </p>
        <div className="flex">
          <FaPhoneVolume className="text-[18px] lg:text-[30px] mt-3 mr-5" />
          <div>
            <p className="text-sm lg:text-[18px] text-gray-400">Make a Call</p>
            <a href="" className="lg:text-[18px] text-sm text-gray-400">
              +97450029140
            </a>
          </div>
        </div>
      </div>

      <Items Links={CONTACT} title="QUICK LINKS" />
      <Items Links={SHOP} title="OUR SERVICES" />
      <div className="lg:mt-10">
        <h1 className="mb-8 text-white text-[18px] lg:text-[22px]">FOLLOW US</h1>
        <div className="flex gap-5">
          <a href="facebook.com">
            <FaFacebook className="text-[30px] hover:text-[#0068c8] hover:scale-110" />
          </a>
          <a href="">
            <FaXTwitter className="text-[30px] hover:text-[#0068c8] hover:scale-110" />
          </a>
          <a href="">
            <RiLinkedinFill className="text-[30px] hover:text-[#0068c8] hover:scale-110" />
          </a>
          <a href="">
            <FaPinterestP className="text-[30px] hover:text-[#0068c8] hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemsContainer;
