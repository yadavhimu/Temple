import React from "react";
import { IoMdPeople } from "react-icons/io";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineTempleHindu } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <div className="w-full relative">
        <img
          className="w-full h-[600px] opacity-75"
          src="./images/Temple.jpeg"
          alt=""
        />
        <div className="absolute  top-52 right-40 w-[600px] font-medium">
          <p className="text-4xl ">
            {" "}
            <span className="text-orange-600 font-extrabold">Mandir,</span> a
            Devotional Platform connecting Devotees with Temples and Tirth
            Kshetras
          </p>
          <button className="w-40 mt-5 text-2xl font-semibold border-orange-600 border-2 text-white bg-orange-500 rounded-md h-14 ">Book Now</button>
        </div>
      </div>
      <div className="lg:flex justify-evenly h-20 mt-8 items-center text-2xl text-white font-medium bg-orange-500">
        <div className="flex items-center gap-2">
        <IoMdPeople />
        <p>  Trusted By 1 Million + People </p>
        </div>
        <div className="flex items-center gap-2">
        <VscWorkspaceTrusted />
        <p>100% Secure</p>
        </div>
        <div className="flex items-center gap-2">
        <MdOutlineTempleHindu />
        <p>World's Largest Hindu Devotees</p>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;