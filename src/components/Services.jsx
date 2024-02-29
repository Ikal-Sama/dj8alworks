import React from "react";
import serviceData from "../assets/data/ServicesData";

const Services = () => {
  return (
    <div className="px-14 lg:px-14">
      <div className="flex flex-row lg:flex-nowrap flex-wrap gap-5">
        {serviceData.map((item) => (
          <div key={item.id} className="w-[20rem]  relative rounded-md">
            <div>
              <img
                src={item.image}
                alt=""
                className="w-full object-cover h-[25rem] hover:scale-105 duration-500"
              />
            </div>
            <div className="absolute bottom-0 text-white text-center py-5 bg-black/80">
              <h1 className="text-xl font-medium">{item.title}</h1>
              <p className="text-sm px-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
