import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            provident beatae nisi, sequi voluptatem illum?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Magni, dolore.
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9862631105</li>
            <li>aritradebnath1@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="">
        <hr className="" />
        <p className="py-5 text-sm text-center">
          &copy; Copyright 2024 - All rights rederved by Aritra Debnath
        </p>
      </div>
    </div>
  );
};

export default Footer;
