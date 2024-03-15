import React from "react";
import Bg1 from "../../assets/images/footer.png";
import Logo from "../../assets/images/logo3.png";

// images
import Image1 from "../../assets/images/hero2.png";
import Image3 from "../../assets/images/hero3.png";
import Image4 from "../../assets/images/img1.jpg";
import Image2 from "../../assets/images/img2.jpg";
import Image5 from "../../assets/images/services/img5.jpg";
import Image6 from "../../assets/images/services/img6.jpg";

import { CgFacebook } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mt-10 max-w-screen-2xl w-screen ">
      <div
        className=" bg-cover bg-no-repeat relative h-[93.5rem] md:h-[55rem] lg:h-[39rem] xl:h-[35rem]"
        style={{ backgroundImage: `url(${Bg1})` }}
      >
        <div className="bg-zinc-900/90 absolute h-[93.5rem] md:h-[54.5rem] lg:h-[35rem] top-0 right-0 left-0 ">
          <div className="bg-black/40 flex justify-between lg:flex-row flex-col items-center mx-10 px-10">
            <div className="flex items-center  gap-5 py-5">
              <img src={Logo} alt="" className="w-14" />
              <h1 className="text-xl text-white">DJ8AL.Works</h1>
            </div>
            <div className="flex items-center gap-5 text-zinc-300 py-5">
              <div className="bg-zinc-700 p-2 rounded-full">
                <CgFacebook />
              </div>
              <div className="bg-zinc-700 p-2 rounded-full">
                <AiFillInstagram />
              </div>
              <div className="bg-zinc-700 p-2 rounded-full">
                <FaXTwitter />
              </div>
              <div className="bg-zinc-700 p-2 rounded-full">
                <IoLogoLinkedin />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 py-20 px-10">
            <div>
              <h1 className="text-white font-bold uppercase text-lg">
                About us
              </h1>
              <p className="text-zinc-300 text-sm  mt-3">
                There are many variations passages of Lorem Ipsum available, but
                the majority have suffered alteration
              </p>
              <div className="flex lg:flex-row flex-col gap-5 items-center mt-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="h-9 px-7 py-6 bg-black/40 focus:outline-none text-zinc-200"
                />
                <button className="bg-amber-500 p-5 hover:bg-black hover:text-amber-500 duration-700 ease-in-out transition-all">
                  <MdOutlineArrowOutward fontSize={20} />
                </button>
              </div>
            </div>
            <div className="lg:px-20 mt-3 lg:mt-0">
              <div>
                <h1 className="text-white font-bold uppercase text-lg">
                  Links
                </h1>
              </div>
              <div className="mt-4 text-zinc-400">
                <ul className="flex flex-col gap-2">
                  <li>About Us</li>
                  <li>Meet Our Team</li>
                  <li>latest News</li>
                  <li>Our Projects</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-white font-bold uppercase text-lg lg:mt-0 mt-5">
                  Gallery
                </h1>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <img src={Image1} alt="" className="w-20 h-20 object-cover" />
                <img src={Image2} alt="" className="w-20 h-20 object-cover" />
                <img src={Image5} alt="" className="w-20 h-20 object-cover" />
                <img src={Image3} alt="" className="w-20 h-20 object-cover" />
                <img src={Image4} alt="" className="w-20 h-20 object-cover" />
                <img src={Image6} alt="" className="w-20 h-20 object-cover" />
              </div>
            </div>
            <div className="bg-black/50 px-6 py-5 mt-10 lg:mt-0">
              <div>
                <h1 className="text-white font-bold uppercase text-lg">
                  Contact
                </h1>
              </div>
              <div className="mt-5">
                <div className="flex gap-3">
                  <div className="bg-zinc-800 p-3 rounded-full text-amber-500 hover:bg-amber-500 hover:text-zinc-900 duration-700 transition-all ease-in-out">
                    <FaPhoneVolume />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-zinc-400">
                      +63 9184898185
                    </span>
                    <span className="text-sm text-zinc-400">
                      +63 9357237298
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <div className="bg-zinc-800 p-3 rounded-full text-amber-500 hover:bg-amber-500 hover:text-zinc-900 duration-700 transition-all ease-in-out">
                    <TfiWorld />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-zinc-400">
                      dj8alworks@gmail.com
                    </span>
                    <span className="text-sm text-zinc-400">
                      www.dj8alworks.com
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <div className="bg-zinc-800 p-3 rounded-full text-amber-500 hover:bg-amber-500 hover:text-zinc-900 duration-700 transition-all ease-in-out">
                    <IoLocationSharp />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-zinc-400">
                      Cordova, CebuPhilippines
                    </span>
                    <span className="text-sm text-zinc-400">6017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/40 text-zinc-500 text-center">
            <p className="py-5">©CopyRight 2024 by Dj8al.Works</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
