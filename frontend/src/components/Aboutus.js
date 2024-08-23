import React, { useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import video from "../assest/video.mp4";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when in view
    delay: 500, // Delay before triggering in milliseconds
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="mb-[80px] bg-cover bg-[url('https://img.freepik.com/free-vector/vector-abstract-black-gold-luxury-background_361591-3874.jpg?t=st=1724057230~exp=1724060830~hmac=8e437987b74d3dd6e1325d3ea0b36a394e5d6bf7a445f48314dba1fd89d9f589&w=1380')]">
      <div className="relative overflow-hidden min-h-[800px] lg:min-h-[680px] flex justify-center items-center">
        {/* Hero Section */}
        <div className="container lg:pb-0">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 relative z-10 ml-0 lg:ml-[60px] lg:w-[80%] p-5">
                <h1
                  className="text-[35px] lg:text-[60px] text-white font-semibold"
                  data-aos="fade-up"
                >
                  Why Us?
                </h1>

                <p
                  className="text-[15px] lg:text-[18px] text-[#9d9d9d] my-5 text-justify"
                  data-aos="fade-up"
                >
                  Ezee IT Solutions is passionately committed to achieving 100%
                  customer delight. We understand that every interaction counts,
                  which is why we go above and beyond to ensure that your entire
                  experience with us is nothing short of exceptional. From the
                  moment you place your order to the instant it arrives at your
                  doorstep, we meticulously oversee every detail to guarantee a
                  smooth, seamless, and hassle-free process. Our mission is not
                  just to meet your expectations but to exceed them at every
                  turn, reflecting our unwavering dedication to excellence and
                  your complete satisfaction. With Ezee IT Solutions, you can
                  trust that your needs are our top priority, and we are here to
                  make your journey as effortless and enjoyable as possible.
                </p>
              </div>
              {/* Image Section */}
              <div
                className="order-1 lg:order-2 lg:mb-0 mb-10 mt-[100px]"
                data-aos="zoom-in"
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  className="object-cover mx-auto w-[330px] h-[250px] lg:w-full lg:h-[550px]"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-40 lg:py-12 pb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center font-semibold">
          <div ref={ref}>
            <h2 className="text-[40px] lg:text-[84px] text-white">
              {inView && <CountUp start={0} end={200} duration={2.75} />}K
            </h2>
            <p className="text-[14px] lg:text-[18px]  text-white">
              Happy Clients
            </p>
          </div>
          <div ref={ref}>
            <h2 className="text-[40px] lg:text-[84px] text-white">
              {inView && <CountUp start={0} end={20} duration={2.75} />}+
            </h2>
            <p className="text-[14px] lg:text-[18px] text-white">Brands</p>
          </div>
          <div ref={ref}>
            <h2 className="text-[40px] lg:text-[84px] text-white">
              {inView && <CountUp start={0} end={102} duration={2.75} />}+
            </h2>
            <p className="text-[14px] lg:text-[18px] text-white">
              Winning Awards
            </p>
          </div>
          <div ref={ref}>
            <h2 className="text-[40px] lg:text-[84px] text-white">
              {inView && <CountUp start={0} end={10} duration={2.75} />}K
            </h2>
            <p className="text-[14px] lg:text-[18px] text-white">Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
