import React from "react";
import AboutBanner from "../components/AboutBanner";
import Bg1 from "../assets/images/bg1.png";
import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/services/img6.jpg";
import { SlUser } from "react-icons/sl";
import { SlBadge } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";

import { IoIosCheckboxOutline } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import WhatweDoCard from "../components/WhatweDoCard";

const AboutPage = () => {
  return (
    <div className="mb-[20rem] lg:mb-0">
      <AboutBanner />

      {/* About our team */}
      <section className="flex flex-col-reverse lg:flex-row py-20 mt-20 px-10 gap-10">
        <div
          className="lg:w-1/2  bg-cover h-[35rem]"
          style={{ backgroundImage: `url(${Bg1})` }}
        >
          <div>
            <div className="flex lg:flex-row flex-col items-center gap-10">
              <img
                src={Img1}
                alt=""
                className="object-cover w-[19rem] h-[18rem]"
              />
              <div className="flex flex-col items-center gap-10">
                <h2 className="text-3xl uppercase font-bold text-amber-500">
                  Best Team
                </h2>
                <div className="bg-amber-500 py-10 px-8 text-black-500 hover:bg-zinc-900 hover:text-amber-500">
                  <SlUser fontSize={50} fontWeight={500} />
                </div>
              </div>
            </div>
            <div>
              <img
                src={Img2}
                alt=""
                className="w-full h-[18rem] mt-5 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div>
            <div className="flex gap-4">
              <div className="bg-amber-500 w-3 h-3 rounded-full mt-2"></div>
              <p className="uppercase mb-2 font-semibold text-lg text-amber-500">
                About our team
              </p>
            </div>
            <h1 className="text-4xl font-bold">
              An Insipiring Team that Build in Trust
            </h1>
            <p className="mt-4 text-zinc-500">
              In an inspiring team that builds in trust, every member plays a
              pivotal role in fostering an environment of collaboration and
              mutual support. Trust forms the cornerstone of their interactions,
              enabling open communication, shared goals, and a collective sense
              of accountability.
            </p>

            <div className="mt-5 flex flex-col lg:flex-row gap-10">
              <div>
                {/* mission and support */}
                <div className="flex  gap-6 relative">
                  <div className="bg-slate-100 h-[5rem] py-2 px-0 pl-8 w-[10rem]">
                    <h1 className="text-md lg:text-lg font-semibold ">
                      Our Mission
                    </h1>
                    <div className="bg-zinc-900 rounded-full w-12 lg:w-14 py-2 lg:py-3 text-center text-white absolute flex items-center justify-center top-14 lg:left-12">
                      <SlBadge fontSize={28} />
                    </div>
                  </div>
                  <div className="bg-slate-100 py-2 px-0 pl-5 relative w-[10rem]">
                    <h1 className="text-md lg:text-lg font-semibold">
                      Team Support
                    </h1>
                    <div className="bg-zinc-900 rounded-full w-12 lg:w-14 py-2 lg:py-3 text-center text-white absolute flex items-center justify-center lg:top-12 left-7 lg:left-16">
                      <BiSupport fontSize={28} />
                    </div>
                  </div>
                </div>

                {/* check boxes*/}
                <div className="mt-16">
                  <div className="flex items-center gap-3">
                    <IoIosCheckboxOutline
                      fontSize={20}
                      className="text-amber-500"
                    />
                    <p className="text-sm lg:text-md text-zinc-500">
                      Media in this area of the solution.
                    </p>
                  </div>
                  <div className="flex my-4 items-center gap-3">
                    <IoIosCheckboxOutline
                      fontSize={20}
                      className="text-amber-500"
                    />
                    <p className="text-sm lg:text-md text-zinc-500">
                      We gives employer management
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoIosCheckboxOutline
                      fontSize={20}
                      className="text-amber-500"
                    />
                    <p className="text-sm lg:text-md text-zinc-500">
                      Business ndisse suscipit sagittis leo
                    </p>
                  </div>
                </div>
              </div>

              {/* prject job */}
              <div className="relative">
                <div className="bg-slate-100 h-[14rem] ">
                  <div className="bg-amber-500 text-white py-2">
                    <h1 className="text-center font-bold text-lg">
                      Project Job
                    </h1>
                  </div>
                  <p className="px-9 mt-8 text-lg text-zinc-500">
                    In handcraft job gives you as front adm in reviews.
                  </p>
                  <div className="bg-amber-500 text-white rounded-full absolute bottom-0 left-24 lg:left-5 p-3">
                    <IoIosArrowDroprightCircle fontSize={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="px-10 mt-[20rem] lg:mt-20">
        <div className="mb-14 text-center">
          <div className="flex  gap-4 justify-center">
            <div className="bg-amber-500 w-3 h-3 rounded-full mt-2.5"></div>
            <p className="uppercase text-lg font-bold text-amber-500 mb-3">
              What we Do
            </p>
          </div>
          <h1 className="text-4xl font-bold">We High Service That Stand</h1>
        </div>
        <WhatweDoCard />

        <div className="py-10 mt-20">
          <div className="text-center">
            <div className="flex  gap-4 justify-center">
              <div className="bg-amber-500 w-3 h-3 rounded-full mt-2.5"></div>
              <p className="uppercase text-lg font-bold text-amber-500 mb-3">
                Team members
              </p>
            </div>
            <h1 className="text-4xl font-bold">Amazing Team Members</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
