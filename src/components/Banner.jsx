import React from "react";
import Hero2 from "../assets/images/hero2.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Hero2})` }}
      className="h-screen object-cover bg-cover"
    >
      <div className=" text-center   flex flex-col justify-center items-center bg-black/40 h-screen  ">
        <p className="uppercase my-3 text-amber-500 bg-black w-[10rem] lg:w-[22rem] py-2 animate__animated animate__fadeInLeft">
          Efficient Solutions, Exceptional Results
        </p>
        <h1 className="text-2xl w-[12rem] md:text-3xl lg:text-4xl font-bold lg:w-[34rem] leading-[3rem] text-white animate__repeat-5  animate__animated animate__fadeInRight ">
          <span className="text-amber-500">DJ8AL WORKS</span>/ IT SOLUTIONS &
          WEB SERVICES
        </h1>
        <div className="flex justify-center">
          <button className="font-medium  my-20 bg-amber-500 py-3 px-10 hover:bg-black hover:text-amber-500">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
