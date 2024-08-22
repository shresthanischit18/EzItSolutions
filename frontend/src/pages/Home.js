import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";
import LogoSlider from "../components/Logoslider";
import Aboutus from "../components/Aboutus";
// import CounterPage from "../components/Counterpage.js";

const Home = () => {
  return (
    <div>
      <BannerProduct />
      <LogoSlider />
      <CategoryList />
      <Aboutus />

      <HorizontalCardProduct category={"pos"} heading={"Our Featured POS"} />
      <HorizontalCardProduct category={"software"} heading={"Top Software"} />

      <VerticalCardProduct category={"scanner"} heading={"Scanners"} />
      <VerticalCardProduct category={"computer"} heading={"Computer"} />
      <VerticalCardProduct category={"server"} heading={"Server"} />
      <VerticalCardProduct category={"printer"} heading={"Printers"} />

      <VerticalCardProduct
        category={"biometric devices"}
        heading={"Biometric Devices"}
      />
      <VerticalCardProduct
        category={"access points"}
        heading={"Access Points"}
      />
      <VerticalCardProduct category={"projectors"} heading={"Projectors"} />
      <VerticalCardProduct
        category={"interactive screens"}
        heading={"Interactive Screens"}
      />
    </div>
  );
};

export default Home;
