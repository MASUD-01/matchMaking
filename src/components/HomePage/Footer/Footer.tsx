import { Input } from "antd";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsDot } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 gap-y-6 sm:gap-0  sm:grid-cols-3 container mx-auto justify-center">
      <div className="space-y-5">
        <h3 className="text-white font-bold text-xl">
          WedMeGood - Your Personal Wedding Planner
        </h3>
        <p>
          Plan Your Wedding With Us WedMeGood Is An Indian Wedding Planning
          Website
        </p>
        <button className="border border-white-300 p-2 rounded-sm text-white">
          Register As a Vendor
        </button>
        <div className="flex gap-2">
          <BsFacebook style={{ fontSize: "25px", color: "white" }} />
          <BsInstagram style={{ fontSize: "25px", color: "white" }} />
          <BsLinkedin style={{ fontSize: "25px", color: "white" }} />
        </div>
      </div>

      <div>
        <h3 className="text-white font-bold text-xl">Our Location</h3>
        <ul>
          <li className="flex items-center">
            <BsDot />

            <span>Anand</span>
          </li>
          <li className="flex items-center">
            {" "}
            <BsDot />
            Vadodara
          </li>
          <li className="flex items-center">
            {" "}
            <BsDot />
            Mumbai
          </li>
          <li className="flex items-center">
            {" "}
            <BsDot />
            Ahemdabad
          </li>
          <li className="flex items-center">
            {" "}
            <BsDot />
            Dhaka
          </li>
          <li className="flex items-center">
            {" "}
            <BsDot />
            khulna
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        <h3 className="text-white font-bold text-xl">Our Newsletter</h3>
        <p>Subscribe For Latest Updates</p>
        <Input placeholder="Enter Your Email" width={200}></Input>
        <button className="border border-white-300 p-2 rounded-sm text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Footer;
