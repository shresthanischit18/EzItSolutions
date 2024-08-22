import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import Context from "../context";
import logo from "../assest/logo.png";
import login from "../assest/login.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate("/");
      fetchUserDetails();
      fetchUserAddToCart();
    }

    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  console.log("data login", data);

  return (
    <section id="login">
      <div className="w-full lg:p-10 ">
        <div className="lg:flex items-center justify-center">
          <img
            src={login}
            alt=""
            className="w-[30%] object-cover border invisible lg:visible"
          />

          <div className="container p-4 lg:w-[30%] my-auto">
            <div className="bg-white p-5 max-w-sm ">
              <div className="w-full h-20 text-center">
                <h1 className="font-semibold text-[20px]">
                  Login into account
                </h1>
              </div>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid">
                  <div className="border border-slate-300 rounded-xl p-2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={data.email}
                      onChange={handleOnChange}
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
                      className="w-full h-full outline-none bg-transparent"
                    />
                    <div
                      className="cursor-pointer text-xl"
                      onClick={() => setShowPassword((preve) => !preve)}
                    >
                      <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                  </div>
                  <Link
                    to={"/forgot-password"}
                    className="block w-fit ml-auto hover:underline hover:text-[#0068c8]"
                  >
                    Forgot password ?
                  </Link>
                </div>

                <button className="bg-[#0068c8] hover:bg-blue-900 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
                  Login
                </button>
              </form>

              <p className="my-5">
                Don't have account ?{" "}
                <Link
                  to={"/sign-up"}
                  className=" text-[#0068c8] hover:text-blue-900 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
