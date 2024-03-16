import React, { useState } from "react";
import cardData from "../assets/data/WhatweDoData";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

const WhatweDoCard = () => {
  const [isHovering, setIsHovering] = useState(
    Array(cardData.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const newIsHovering = [...isHovering]; // Copy the array
    newIsHovering[index] = true;
    setIsHovering(newIsHovering);
  };

  const handleMouseLeave = (index) => {
    const newIsHovering = [...isHovering];
    newIsHovering[index] = false;
    setIsHovering(newIsHovering);
  };
  return (
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {cardData.map((item, index) => (
          <div
            key={item.id}
            className="border relative "
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div>
              <img
                src={item.image}
                alt=""
                className="w-full h-[14rem] object-cover"
              />
            </div>
            <div className="px-6 py-6 ">
              <h1 className="text-xl font-bold text-zinc-900 hover:text-amber-500 transition duration-300">
                {item.title}
              </h1>
              <p className="mt-3 text-lg text-zinc-500">{item.desc}</p>
              <Link className="flex gap-3 items-center mt-4 font-semibold hover:text-amber-500 transition duration-300">
                Read More <FiPlus fontSize={20} fontWeight={300} />
              </Link>
            </div>
            <div
              className={`absolute top-3 left-5  text-white p-3 rounded-full border-[5px] ${
                isHovering[index] ? "bg-amber-500 duration-300" : "bg-zinc-900"
              }`}
            >
              <span className="text-4xl ">{item.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatweDoCard;
