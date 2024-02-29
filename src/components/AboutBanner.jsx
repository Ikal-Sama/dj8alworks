import Hero2 from "../assets/images/img5.jpg";
import React from "react";

const AboutBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Hero2})` }}
      className="h-screen object-cover bg-cover"
    >
      <div className=" text-center   flex flex-col justify-center items-center bg-black/40 h-screen  ">
        <h1 className="text-2xl w-[12rem] md:text-3xl lg:text-6xl font-bold lg:w-[34rem] leading-[3rem] text-white ">
          About
        </h1>
        <p className=" w-[10rem] lg:w-[22rem] text-white py-2 text-lg font-medium">
          Home /<span className="text-amber-500">About</span>
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
