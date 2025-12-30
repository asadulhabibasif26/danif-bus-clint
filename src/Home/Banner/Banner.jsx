import React from "react";
import busBanner from "../../assets/busImageBanner.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div>
        <img
          className="w-full max-h-[800px] object-cover"
          src={busBanner}
          alt="bus"
        />
        <div className="  absolute top-50 left-50 text-black">
          <h2 className="text-8xl font-bold text-yellow-600">Bangladesh</h2>
          <h2 className="text-8xl font-bold "> InterCity </h2>
          <div className="md:flex items-center">
            <h2 className="text-8xl font-bold text-white"> Routes </h2>
            <span className=" text-white md:pt-6 md:ml-2">Book Tickets Online And <br /> Travel With Ease <br />Around All Europe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
