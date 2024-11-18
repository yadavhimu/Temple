import React from "react";

const MidSection = () => {
  return (
    <div className="w-full h-[700px]">
      <div>
        <p className="flex justify-center text-4xl mt-10 font-bold">
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
      <div className="flex gap-10 mt-20 w-full h-auto">
        <div className="w-[33%]">
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
          <button className="w-full rounded-md bg-green-600 mt-5 h-10 text-xl text-white font-medium">
            {" "}
            Participate
          </button>
        </div>
        <div className="w-[33%] ">
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
          <button className="w-full rounded-md bg-green-600 mt-12 h-10 text-xl text-white font-medium">
            {" "}
            Participate
          </button>
        </div>
        <div className="w-[33%]">
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
          <button className="w-full rounded-md bg-green-600 mt-5 h-10 text-xl text-white font-medium">
            {" "}
            Participate
          </button>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
