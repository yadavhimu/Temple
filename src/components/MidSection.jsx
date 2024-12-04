import React from "react";
import { IoMdPeople } from "react-icons/io";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlineTempleHindu } from "react-icons/md";
import { Link } from "react-router-dom";

const MidSection = () => {
  return (
    <div className="w-full lg:h-[800px]">
      <div className="w-full lg:flex justify-evenly lg:h-20 mt-8 items-center text-2xl text-white font-medium bg-orange-500">
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
      <div>
        <p className="flex justify-center text-2xl lg:text-4xl mt-10 font-bold">
          Puja Seva for you and your loved ones
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-xl mt-8 text-gray-600">
          Book Pujas in your and your family's name at 1000+ renowned temples in
          India. <br />
          You will also receive a video of the Puja and Prasad along with divine
          blessings.
        </p>
      </div>
      <div className="lg:flex gap-10 mt-20 w-full h-auto">
        <div className=" lg:w-[33%] mt-5">
          <img
            className="w-full h-[33%] rounded-md"
            src="./images/Garuda.jpg"
            alt=""
          />
          <p className="text-3xl font-medium mt-4">
            Garuda Dhwaja and Sudarshan Chakra Puja
          </p>
          <p className="text-xl mt-3 text-gray-500">
            For Overcoming Negative Effects of Kaal Sarp and Rahu-Ketu Doshas
          </p>
          <Link to='/contact'><button className="w-full rounded-md bg-green-600 mt-5 h-10 text-xl text-white font-medium">
            {" "}
            Book Now
          </button>
          </Link>
        </div>
        <div className="lg:w-[33%] mt-5 ">
          <img
            className="w-full h-[33%] rounded-md"
            src="./images/lakshmi.jpg"
            alt=""
          />
          <p className="text-3xl font-medium mt-4">
            Lakshmi Narayan Puja,Shiv Rudrabhishek{" "}
          </p>
          <p className="text-xl mt-3 text-gray-500">
            For Protection from Adversities and Ill Health
          </p>
          <Link to='/contact'><button className="w-full rounded-md bg-green-600 mt-12 h-10 text-xl text-white font-medium">
            {" "}
            Book Now
          </button>
          </Link>
        </div>
        <div className="lg:w-[33%]  mt-5">
          <img
            className="w-full h-[33%] rounded-md"
            src="./images/kalima.jpg"
            alt=""
          />
          <p className="text-3xl font-medium mt-4">
            Sarva Raksha Pradayak Chandi Havan
          </p>
          <p className="text-xl mt-3 text-gray-500">
            For Fulfilment of all Desires and Protection from Adversities
          </p>
          <Link to='/contact'><button className="w-full rounded-md bg-green-600 mt-5 h-10 text-xl text-white font-medium">
            {" "}
            Book Now
            
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
