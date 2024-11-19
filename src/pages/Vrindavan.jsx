import React from "react";
import { SlCalender } from "react-icons/sl";

const Vrindavan = () => {
  return (
    <div>
      <div className="flex gap-4 mt-8">
        <div className="w-[50%] ">
          <img className="rounded-l-lg" src="./images/Veni.jpeg" alt="" />
        </div>
        <div className="w-[50%]">
          <div className="flex gap-2">
            <img className="w-[50%]" src="./images/V1.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/V2.jpeg"
              alt=""
            />
          </div>
          <div className="flex gap-2 mt-2 ">
            <img className="w-[50%]" src="./images/V3.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/V4.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="lg:px-[14vw] mt-10">
        <p className="flex justify-center text-4xl font-bold">
          Vrindavan Chandrodaya Temple
        </p>
        <p className="lg:ml-44 mt-4 text-xl text-gray-600">
          {" "}
          The tallest religious structure in the world! . Vrindavan, Uttar
          Pradesh, India
        </p>
        <p className="text-lg font-bold mt-4 underline">Overview</p>
        <p className="mt-2 text-gray-600">
          Vrindavan Chandrodaya Mandir is a historic temple located in the city
          of Vrindavan, in the Mathura district of Uttar Pradesh, India. It is
          considered the tallest temple in the world and is currently under
          construction in Vrindavan, Mathura. The temple complex covers about 26
          acres of land and stands at a height of 700 feet. Various religious
          festivals and celebrations will be observed here throughout the year,
          making it a significant pilgrimage site for Hindus in the future.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          History of the temple
        </p>
        <p className="mt-4 text-gray-600">
          The construction work of Vrindavan Chandrodaya Mandir began in 2014,
          with the foundation stone laid by the then-President of India, Pranab
          Mukherjee. The construction work is ongoing and is expected to be
          completed between 2024 and 2025. Once completed, the temple will be
          open to all devotees of Lord Krishna.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Significance of the temple
        </p>
        <p className="mt-4 text-gray-600">
          - The main attraction of the temple will be a capsule elevator that
          will take visitors to the top, offering panoramic views of the entire
          Braj Mandal. - The total cost of the temple's construction is
          estimated to be around 300 crores, making it the most expensive temple
          in the world. - The 12 forests surrounding the temple premises will be
          named after the 12 forests of Braj Mandal, such as Mahavan, Vrindavan,
          Lohavan, Kamya Van, Kumud Van, Talvan, Bhandiravan, Madhuvan,
          Kumudvan, Bahulavan, Bilvavan, and Bhadravan.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Architecture of the temple
        </p>
        <p className="mt-4 text-gray-600">
          Vrindavan Chandrodaya Mandir is being built with a combination of
          modern and traditional architectural styles. It is set to become the
          world's tallest religious structure, standing at around 700 feet and
          spanning approximately 213 metres in length. The temple premises will
          cover nearly 26 acres of land, surrounded by lush green forests
          created with fruit-bearing trees, waterfalls, and artificial small
          hills, recreating the descriptions of Krishna's time.
          <hr className="border-4 mt-4 border-orange-500" />
        </p>
      </div>
      <div className="lg:px-[14vw]  mt-10 ">
        <p className="text-xl font-bold mt-8 underline">Temple Timings</p>
        <div className="flex ml-5 justify-between">
          <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Morning  Timing</p>
              <p>06:00AM - 12:00PM</p>
            </div>
          </div>
          <div className="mt-5 flex mr-0">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Afternoon Timing</p>
              <p>01:00PM - 08:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vrindavan;
