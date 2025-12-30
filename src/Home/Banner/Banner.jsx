import React from "react";
import busBanner from "../../assets/busImageBanner.jpg";
import { NavLink } from "react-router";

const Banner = () => {
  return (
    <div className="relative">
      <div>
        <img
          className="w-full max-h-[800px] object-cover"
          src={busBanner}
          alt="bus"
        />
        <div className="  absolute md:top-50 top-20 md:left-50 left-5 text-black">
          <h2 className="md:text-8xl text-4xl font-bold text-yellow-600">
            Bangladesh
          </h2>
          <h2 className="md:text-8xl text-4xl font-bold "> InterCity </h2>
          <div className="md:flex items-center">
            <h2 className="md:text-8xl text-4xl font-bold text-white">
              {" "}
              Routes{" "}
            </h2>
            <span className=" text-white md:pt-6 md:ml-2">
              Book Tickets Online And <br /> Travel With Ease <br />
              Around All Europe
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="md:flex shadow-2xl shadow-white mx-auto text-center  md:w-10/12 rounded-xl bg-gray-600">
          <div className="stat">
            <div className="stat-title">Total Bus Available</div>
            <div className="stat-value">31</div>
            <div className="stat-desc">Jan 1st - Dec 31</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Customer</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">Jan 1st - Dec 31</div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Ticket Sale</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">Jan 1st - Dec 31</div>
          </div>
        </div>
      </div>
      <div className="mt-3 ">
        <NavLink className='w-full flex justify-center items-center'>
          <button className="btn bg-white/40 text-green-300 hover:bg-base-100 text-3xl px-4 py-7">
            Buy Ticket Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Banner;
