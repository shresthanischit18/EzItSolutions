import React, { useState } from "react";
import logo from "../assest/logo.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import imageTobase64 from "../helpers/imageTobase64";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import signup from "../assest/signup.jpg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageTobase64(file);

    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.signUP.url, {
        method: SummaryApi.signUP.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/login");
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } else {
      toast.error("Please check password and confirm password");
    }
  };

  return (
    <section id="signup">
      <div className="w-full lg:p-10 ">
        <div className="lg:flex items-center justify-center order-2 relative">
          <div className="container p-4 lg:w-[30%] my-auto ">
            <div className="bg-white p-5 max-w-sm ">
              <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
                <div>
                  <img src={data.profilePic || logo} alt="login icons" />
                </div>
                <form>
                  <label>
                    <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                      Upload Photo
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleUploadPic}
                    />
                  </label>
                </form>
              </div>

              <form
                className="pt-6 flex flex-col gap-5"
                onSubmit={handleSubmit}
              >
                <div className="grid">
                  <div className="border border-slate-300 rounded-xl p-2">
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      value={data.name}
                      onChange={handleOnChange}
                      required
                      className="w-full h-full outline-none bg-transparent"
                    />
                  </div>
                </div>
                <div className="grid">
                  <div className="border border-slate-300 rounded-xl0 p-2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={data.email}
                      onChange={handleOnChange}
                      required
                      className="w-full h-full outline-none bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <div className="border border-slate-300 rounded-xl p-2 flex">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={data.password}
                      name="password"
                      onChange={handleOnChange}
                      required
                      className="w-full h-full outline-none bg-transparent"
                    />
                    <div
                      className="cursor-pointer text-xl"
                      onClick={() => setShowPassword((preve) => !preve)}
                    >
                      <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="border border-slate-300 rounded-xl p-2 flex">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password "
                      value={data.confirmPassword}
                      name="confirmPassword"
                      onChange={handleOnChange}
                      required
                      className="w-full h-full outline-none bg-transparent"
                    />

                    <div
                      className="cursor-pointer text-xl"
                      onClick={() => setShowConfirmPassword((preve) => !preve)}
                    >
                      <span>
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="bg-[#0068c8] hover:bg-blue-900 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
                  Sign Up
                </button>
              </form>

              <p className="my-5">
                Already have account ?{" "}
                <Link
                  to={"/login"}
                  className=" text-[#0068c8] hover:text-blue-900 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
          <img
            src={signup}
            alt=""
            className="w-[30%] object-cover border invisible lg:visible"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
