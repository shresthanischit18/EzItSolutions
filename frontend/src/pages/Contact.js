import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Form = () => {
  return (
    <>
      <div className="flex items-center justify-center p-2 mt-10">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mb-[100px]">
          <div className="grid grid-cols-1 bg-white p-5 ">
            <h1 className="font-bold text-start text-gray-900 lg:text-[45px] text-[30px]">
              Drop Us a Message Today<span className="text-[#0068c8]">.</span>
            </h1>
            <br />

            <p className="text-[18px] text-[#9d9d9d] lg:w-[700px] text-start">
              Need support with our products, have a query about our services,
              or just want to say hello, our dedicated team is eager to connect
              with you.
            </p>
            <br />
            <br />
            <div className="lg:flex gap-10 ">
              <input
                type="text"
                placeholder="First Name"
                className="text-black
           lg:w-72 w-full border-0 rounded-xl bg-slate-100 mr-1 lg:mb-0 py-2.5 px-2 focus:outline-none mb-10"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="text-black
           lg:w-72 w-full border-0 rounded-xl bg-slate-100 mr-1 lg:mb-0 mb-4 py-2.5 px-2 focus:outline-none "
              />
            </div>
            <br />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="text-black
           lg:w-[620px] w-full border-0 rounded-xl bg-slate-100 mr-1 lg:mb-0 mb-4 py-2.5  px-2 focus:outline-none"
            />
            <br />
            <input
              type="text"
              placeholder="Message"
              className="text-black
           lg:w-[620px] w-full border-0 bg-slate-100 rounded-xl border-gray-300 mr-1 lg:mb-0 mb-4 py-2.5  px-2 focus:outline-none"
            />
            <button className="border-0 rounded-lg h-[60px] bg-[#0068c8] w-[140px] text-center text-white mt-10 mb-10">
              Send Message
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 p-10">
            <div className="lg:flex gap-10">
              <div className="border-0 w-auto lg:h-[250px] lg:w-[300px] text-center pt-[50px] rounded-2xl bg-white shadow-xl">
                <div className="w-full flex items-center justify-center ">
                  <IoIosMail className="text-[40px] text-[#0068c8] mb-4" />
                </div>

                <h1 className="text-[22px] font-semibold">Email</h1>
                <br />
                <a href="" className="text-[18px] text-[#9d9d9d]">
                  info@ezeeitsolutions.com
                </a>
              </div>
              <div className="border-0 w-auto lg:h-[250px] lg:w-[300px] text-center pt-[50px] rounded-2xl bg-white lg:mt-0 mt-5 shadow-xl">
                <div className="w-full flex items-center justify-center ">
                  <FaPhoneVolume className="text-[40px] text-[#0068c8] mb-4" />
                </div>

                <h1 className="text-[22px] font-semibold">Contacts</h1>
                <br />
                <a href="" className="text-[18px] text-[#9d9d9d]">
                  +97450029140
                </a>
              </div>
            </div>
            <div className="lg:flex gap-10">
              <div className="border-0 w-auto lg:h-[250px] lg:w-[300px] text-center pt-[50px] rounded-2xl bg-white shadow-xl">
                <div className="w-full flex items-center justify-center ">
                  <MdDateRange className="text-[40px] text-[#0068c8] mb-4" />
                </div>

                <h1 className="text-[22px] font-semibold">Date</h1>
                <br />
                <a href="" className="text-[18px] text-[#9d9d9d]">
                  info@gmail.com
                </a>
              </div>
              <div className="border-0 w-auto lg:h-[250px] lg:w-[300px] text-center pt-[50px] rounded-2xl bg-white lg:mt-0 mt-5 shadow-xl">
                <div className="w-full flex items-center justify-center ">
                  <FaLocationDot className="text-[40px] text-[#0068c8] mb-4" />
                </div>

                <h1 className="text-[22px] font-semibold">Location</h1>
                <br />
                <a href="" className="text-[18px] text-[#9d9d9d]">
                  Aziziya Commercial Complex
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6284689240188!2d51.449734875165255!3d25.24943577767732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45da746253bd23%3A0x895aae86eb380be9!2sAzizia%20Commercial%20Complex!5e0!3m2!1sen!2snp!4v1723639561995!5m2!1sen!2snp"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </>
  );
};

export default Form;
