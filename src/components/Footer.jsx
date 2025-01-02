import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-orange-600 rounded-lg ">
      <div className="flex flex-col sm:grid grid-cols-[1fr_1fr_1fr_1fr] gap-14 my-10  text-sm pt-2 pl-2 ">
        <div>

          <p className="text-xl font-bold mb-5 text-white">Mandir</p>
          <p className="w-full md:w-2/3 text-white text-md">
            Mandir is a Devotional Platform to connect you with Temples,
            Pandits and Tirth Kshetra in Bharat. Watch Daily Darshan,
            Participate in LIVE Pujas, Bring Prasad and Abhimantrit Divine
            Products to your Home from Temples and Tirth Kshetras of Bharat.
          </p>
        </div>

        
        <div>
          <p className="text-xl font-bold mb-5 text-white">Explore</p>
          <ul className="flex flex-col gap-1 text-white">
            <Link to={"/"}>
              <li className="text-md">Home</li>
            </Link>
            <Link to={"puja"}>
              <li className="text-md">Puja</li>
            </Link>
            <Link to={"temple"}>
              <li className="text-md">Temple</li>
            </Link>
            <Link to={"contact"}>
              <li className="text-md">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-bold mb-5 text-white">Legal</p>
          <ul className="flex flex-col gap-1 text-white">
            <li className="text-md">Privacy Policy</li>
            <li className="text-md">Terms and Condition</li>
            <li className="text-md">Return and Refund Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-bold mb-5 text-white">Contact Detail</p>
          <ul className="flex flex-col gap-1 text-white">
            <li className="text-lg font-medium text-black"> Phone :</li>
            <li className="text-md">+91-123456789</li>
            <li className="text-lg font-medium text-black">Email :</li>
            <li className="text-md">mandir@gmail.com.com</li>
            <li className="text-lg font-medium text-black">Address :</li>
            <li className="text-md">
              Anand Gooba Garden Rajenclave Kalyanpur,{" "}
            </li>
            <li className="text-md">U.P. , India - 208017</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-white">
          {" "}
          Copyright 2024@ deltasoftsystem.in - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
