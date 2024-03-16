import React from "react";
import Cards from "../components/Cards";
import Img2 from "../assets/images/img2.jpg";
import Img3 from "../assets/images/services/img5.jpg";
import Img5 from "../assets/images/hero3.png";
import Img4 from "../assets/images/img4.jpg";
import { GrDeploy, GrCpu } from "react-icons/gr";
import { FaCheckCircle } from "react-icons/fa";
import Services from "../components/Services";

import { FaUsersCog, FaBriefcase } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { PiSealCheckFill } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Banner from "../components/Banner";

const LandingPage = () => {
  return (
    <div id="home" className="container">
      <Banner />
      <div className="flex w-full py-28 lg:py-20">
        <Cards />
      </div>
      {/* ***********ABOUT US ************** */}
      <div className="max-w-screen-xl mx-auto px-5 lg:px-14 flex flex-col lg:flex-row-reverse gap-5 py-20">
        <div className="w-full lg:w-1/2">
          <div>
            <p className="font-medium border-b border-amber-500 uppercase">
              About Us
            </p>
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold my-3">
                Provide the Best Easy Solution for Your IT Problem
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                libero illum labore earum sit eligendi architecto consequuntur
                nulla nemo ducimus porro mollitia id quo vero repellat beatae
                fuga, non nostrum.
              </p>
              <div className="flex lg:flex-row flex-col py-9 lg:gap-0 gap-10 relative">
                <div className="">
                  <div className="px-5 py-5 bg-zinc-900 text-white hover:text-amber-500 duration-300">
                    <h1 className="mb-4 mt-3 font-medium text-xl">
                      Manage Tech Service
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Deleniti harum quasi animi itaque eligendi ipsam.
                    </p>
                    <div className="flex justify-center rounded-br-xl bg-amber-500 text-zinc-900 p-2 w-[5rem] my-5 absolute top-0 left-[11rem]">
                      <GrCpu fontSize={30} />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="px-5 py-5 bg-amber-500 text-black  hover:text-white duration-300">
                    <h1 className="mb-4 mt-3 font-medium text-xl">
                      IT Consulting
                    </h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Deleniti harum quasi animi itaque eligendi ipsam.
                    </p>
                    <div className="flex justify-center rounded-br-xl bg-zinc-800 text-amber-500 p-2 w-[5rem] my-5 absolute top-[13.5rem] lg:top-0 right-[11rem] lg:right-7 ">
                      <GrDeploy fontSize={30} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-amber-500" />
                  <span className="font-medium text-zinc-600">
                    Many Variations Of Passages Of Lorem Ipsum
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-amber-500" />
                  <span className="font-medium text-zinc-600">
                    Many Variations Of Passages Of Lorem
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-amber-500" />
                  <span className="font-medium text-zinc-600">
                    Expert Many Variations Teacher
                  </span>
                </div>
              </div>
              <button className="my-6 bg-zinc-900 text-white py-4 px-8 font-medium hover:bg-amber-500 hover:text-zinc-900 duration-300">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={Img2}
            alt=""
            className="w-full h-64 lg:h-screen object-cover"
          />
        </div>
      </div>
      {/* ***********END ABOUT US ************** */}

      {/* ***********SERVICES ************** */}

      <div className="max-w-screen-xl mx-auto">
        <div className="my-10 text-center flex justify-center flex-col items-center">
          <p className="text-lg uppercase font-semibold border-b-[2px] border-amber-500 mb-3">
            Service
          </p>
          <h1 className=" text-3xl lg:text-4xl font-semibold w-[20rem] lg:w-[32rem]">
            Services We’re Providing to Our Customers
          </h1>
        </div>
        <Services />
      </div>
      {/* ***********END SERVICES ************** */}

      {/* WHY OUR COMMPNAY ? */}
      <div
        style={{ backgroundImage: `url(${Img3})` }}
        className="bg-cover bg-no-repeat mt-20 max-w-screen-2xl w-screen"
      >
        <div className="text-white bg-zinc-800/45 py-20 w-full flex flex-col lg:flex-row gap-10 px-10">
          <div className="w-full lg:w-1/2">
            <p className="uppercase text-sm border-b border-amber-500 w-28 mb-3">
              Why choose us
            </p>
            <h1 className="text-4xl font-extrabold">
              Why Our Technology Solutions Company Stands Out?
            </h1>
            <div className="mt-14 flex items-center justify-between  gap-2">
              <div className="bg-black py-10 px-8 text-amber-500 hover:bg-amber-500 hover:text-black">
                <FaComputer fontSize={40} />
              </div>
              <div className="flex flex-col lg:flex-row gap-10 items-center border-b border-zinc-500 pb-10">
                <h3 className="text-lg lg:text-xl font-bold lg:w-[22rem] ">
                  We're Navigating IT Solutions with Precise and best Excellence
                </h3>
                <div className="bg-amber-500 rounded-full p-3 hover:bg-zinc-200 hover:text-amber-500">
                  <IoIosArrowRoundForward fontSize={30} />
                </div>
              </div>
            </div>
            <div className="mt-14 flex items-center justify-between gap-2">
              <div className="bg-black py-10 px-8 text-amber-500 hover:bg-amber-500 hover:text-black">
                <FaUsersCog fontSize={40} />
              </div>
              <div className="flex flex-col lg:flex-row gap-10 items-center border-b border-zinc-500 pb-10">
                <h3 className="text-lg lg:text-xl font-bold lg:w-[22rem]">
                  We’re Resolving Your Technology Woes with Expert Care
                </h3>
                <div className="bg-amber-500 rounded-full p-3 hover:bg-zinc-200 hover:text-amber-500">
                  <IoIosArrowRoundForward fontSize={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div>
              <p className="text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                voluptatem voluptatibus delectus in molestiae facere soluta
                ducimus reprehenderit! Cupiditate asperiores aspernatur officiis
                hic quos eveniet tempora fugiat quibusdam id perspiciatis.
              </p>

              <div className="bg-amber-500 mt-10">
                <img
                  src={Img5}
                  alt=""
                  className="w-[30rem] h-full opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
