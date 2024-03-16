import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo3.png";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
// images
import Hero from "../../assets/images/hero.png";
import Hero2 from "../../assets/images/hero2.png";
import Hero3 from "../../assets/images/hero3.png";

const Header = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const animatedElement = document.querySelector(".animate__fadeInRight");
  //     if (animatedElement) {
  //       // Remove the animation class before adding it again
  //       animatedElement.classList.remove("animate__fadeInRight");
  //       // Force a reflow, flushing the CSS changes
  //       void animatedElement.offsetWidth;
  //       // Re-add the animation class
  //       animatedElement.classList.add("animate__fadeInRight");
  //     }
  //   }, 8000);

  //   return () => clearInterval(intervalId);
  // }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const animatedElement = document.querySelector(".animate__fadeInLeft");
  //     if (animatedElement) {
  //       // Remove the animation class before adding it again
  //       animatedElement.classList.remove("animate__fadeInLeft");
  //       // Force a reflow, flushing the CSS changes
  //       void animatedElement.offsetWidth;
  //       // Re-add the animation class
  //       animatedElement.classList.add("animate__fadeInLeft");
  //     }
  //   }, 8000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-2xl w-full  object-cover bg-cover relative bg-zinc-900 ">
        <div className="bg-black/40   ">
          <div className="flex  justify-between items-center px-10 mx-auto py-5 border-b border-zinc-200">
            <div>
              <img src={Logo} alt="" className="w-20" />
            </div>
            <div className="lg:block hidden">
              <ul className="flex gap-10 uppercase font-bold">
                <Link
                  to="/"
                  className={` ${
                    activePath === "/"
                      ? "text-amber-500 underline underline-offset-8 "
                      : "text-zinc-200 hover:text-amber-500 hover:underline underline-offset-8 duration-300"
                  }`}
                >
                  <li>Home</li>
                </Link>
                <Link
                  to="/about"
                  className={` ${
                    activePath === "/about"
                      ? "text-amber-500 underline underline-offset-8 "
                      : "text-zinc-200 hover:text-amber-500 hover:underline underline-offset-8 duration-300"
                  }`}
                >
                  <li>About</li>
                </Link>
                <Link
                  to="/services"
                  className={` ${
                    activePath === "/services"
                      ? "text-amber-500 underline underline-offset-8 "
                      : "text-zinc-200 hover:text-amber-500 hover:underline underline-offset-8 duration-300"
                  }`}
                >
                  <li>Services</li>
                </Link>
                <Link>
                  <li
                    className={` ${
                      activePath === "/blog"
                        ? "text-amber-500 underline underline-offset-8 "
                        : "text-zinc-200 hover:text-amber-500 hover:underline underline-offset-8 duration-300"
                    }`}
                  >
                    Blog
                  </li>
                </Link>
                <Link>
                  <li
                    className={` ${
                      activePath === "/contact"
                        ? "text-amber-500 underline underline-offset-8 "
                        : "text-zinc-200 hover:text-amber-500 hover:underline underline-offset-8 duration-300"
                    }`}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex gap-3 items-center">
              <Link className="bg-amber-500 p-2 rounded-full">
                <FaPhoneVolume />
              </Link>
              <div className="hidden lg:block">
                <p className=" text-sm text-zinc-400">Call us Anytime</p>
                <Link className=" text-lg font-medium text-white hover:text-amber-500 hover:border-b">
                  +63 9357237298
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
