import Banner2 from "../assets/images/services/banner.jpg";
import { IoMdArrowRoundForward } from "react-icons/io";
import { CiCloud } from "react-icons/ci";
import LineDesign from "../components/LineDesign";
import Data from "../assets/data/Data";
import { useState } from "react";

const ServicesPage = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div className="container w-screen">
      <div
        style={{ backgroundImage: `url(${Banner2})` }}
        className="h-screen object-cover bg-cover w-screen"
      >
        <div className="flex flex-col justify-center px-20  bg-black/20 h-screen  ">
          <p className=" w-[10rem] lg:w-[22rem] text-white py-2 text-lg font-medium">
            Home / <span className="text-amber-500">Services</span>
          </p>
          <h1 className="text-2xl font-fira   w-[12rem] md:text-3xl lg:text-5xl mt-9 lg:w-[49rem] uppercase leading-[3rem] text-zinc-800 ">
            Web Development Services
          </h1>
        </div>
      </div>

      <div className="py-20 flex lg:flex-row flex-col md:flex-col items-center justify-center  px-10 gap-[10rem]">
        <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row items-center gap-10">
          <div>
            <div className="relative bg-zinc-100 rounded-full py-3 px-3 -z-10">
              <CiCloud fontSize={50} className="-z-10" />
              <div className="bg-amber-500 w-5 h-5 rounded-full absolute top-10 right-3 -z-40"></div>
            </div>
          </div>
          <p className="text-xl text-zinc-700 w-[17rem] md:w-[38rem] lg:w-[40rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqu quis ipsum
            suspendisse ultrices gravida.
          </p>
        </div>
        <div>
          <button className="border-2 border-amber-500 rounded-full py-5 px-12 text-xl text-zinc-600 font-medium  hover:border-[3px] duration-300">
            Get in Touch
          </button>
        </div>
      </div>
      <LineDesign />

      <div className="py-20 px-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
          <h1 className="text-zinc-900 font-medium">Services and Solutions</h1>
        </div>
        <h1 className="my-5 tracking-wider text-4xl font-medium font-fira">
          Our Web Development Services Let You Win Big
        </h1>
        <p className="text-zinc-600 w-[13rem] md:w-[25rem] lg:w-[38rem] text-md font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        <div className="flex flex-wrap justify-center mt-10 gap-12">
          {Data.map((item) => (
            <div key={item.id} className="w-[22rem] mt-10">
              <div className="w-16">
                <div className="relative bg-zinc-100 rounded-full py-3 px-3 -z-10">
                  <h1 className="text-4xl font-fira text-center">0{item.id}</h1>
                  <div className="bg-amber-500 w-5 h-5 rounded-full absolute top-8 right-1 -z-40"></div>
                </div>
              </div>
              <h1 className="text-2xl my-3 font-fira text-zinc-900 font-medium">
                {item.title}
              </h1>
              <p className="text-lg text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center  px-10 py-20">
          <div>
            <button className="font-fira py-2 px-10 lg:py-4 lg:px-14 border-2 border-amber-500 rounded-full text-xs lg:text-lg font-medium hover:border-[3px] transition-all ease-in-out duration-300">
              Tell us about your project
            </button>
          </div>
          <div
            className="flex items-center gap-3 cursor-pointer "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="font-fira font-semibold text-zinc-700">See More</h1>
            <div
              className={`bg-amber-600 p-2 text-white rounded-full 
                   ${isHovering ? "translate-x-1" : ""} 
                   transition-all ease-in-out duration-300 cursor-pointer hover:bg-amber-500 flex items-center`}
            >
              <IoMdArrowRoundForward />
            </div>
          </div>
        </div>
        <LineDesign />
      </div>
    </div>
  );
};

export default ServicesPage;
