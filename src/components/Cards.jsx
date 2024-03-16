import React from "react";
import cardData from "../assets/data/CardData";

const Cards = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-center gap-10 ">
        {cardData.map((item) => (
          <div key={item.id} className="relative">
            <div>
              <img src={item.image} alt="" className="object-cover" />
            </div>
            <div className="absolute text-center px-5 py-10 bottom-0 bg-black/45 hover:bg-amber-500/95  duration-300">
              <h1 className="text-2xl font-bold mb-4 text-zinc-100">
                {item.title}
              </h1>
              <p className="text-sm font-medium text-zinc-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
