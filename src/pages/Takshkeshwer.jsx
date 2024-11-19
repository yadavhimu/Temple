import React from "react";
import { SlCalender } from "react-icons/sl";

const Takshkeshwer = () => {
  return (
    <div>
      <div className="flex gap-4 mt-8">
        <div className="w-[50%] ">
          <img
            className="rounded-l-lg"
            src="./images/Takshakeshwar.jpeg"
            alt=""
          />
        </div>
        <div className="w-[50%]">
          <div className="flex gap-2">
            <img className="w-[50%]" src="./images/T1.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/T2.jpeg"
              alt=""
            />
          </div>
          <div className="flex gap-2 mt-2 ">
            <img className="w-[50%]" src="./images/T3.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/T4.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="lg:px-[14vw] mt-10">
        <p className="flex justify-center text-4xl font-bold">
          Takshkeshwer Nath Temple
        </p>
        <p className="lg:ml-44 mt-4 text-xl text-gray-600">
          {" "}
          This place in Prayagraj is known as "Bada Shivala". Prayagraj, Uttar
          Pradesh, India
        </p>
        <p className="text-lg font-bold mt-4 underline">Overview</p>
        <p className="mt-2 text-gray-600">
          Takshakeshwar Nath Temple, located in Daryabad along the Yamuna river
          in the Prayag district of Uttar Pradesh, is a renowned Shiva temple
          where devotees worship Lord Shiva, seeking blessings and fulfillment
          of their wishes. This temple holds great significance during the month
          of Sawan, with elaborate rituals performed to honor Lord Shiva. The
          temple is closely associated with Shri Takshak Nag, the ruler of the
          snake race, who is believed to be the rightful owner of this sacred
          site. The temple is also known for Takshakeshwar Kund, a pond where
          Takshak Nag sought refuge after being driven from Mathura by Lord Shri
          Krishna.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          History of the temple
        </p>
        <p className="mt-4 text-gray-600">
          Takshakeshwar Nath Temple has a rich historical background and is
          believed to have ancient origins. Archaeological digs in the area have
          uncovered rare and ancient stone sculptures, highlighting the temple's
          historical significance. Takshakershwar Temple not only is known to
          hold Takshak Nath but in the temple, you can find numerous Shiva
          Lingas and other deities like Maa Durga, Lord Ganesha, Lord Kartikeya
          and Lord Hanuman. Local legends claim that the temple hasn't been
          always in sight. It was situated in the middle of the dense jungle. It
          was later cleared up for more space and for devotees to visit.
          Interestingly, according to the priests, snakes visit Takshakeshwar
          Nath every day for darshan and move silently through the crowds
          without causing harm to anyone. on the auspicious occasions of Naga
          Panchami, Shukla Paksha Panchami in the months of Margashirsha and
          Shravan, Lunar and Solar eclipses, Amavasya, and Purnima, this
          phenomenon has been witnessed multiple times.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Significance of the temple
        </p>
        <p className="mt-4 text-gray-600">
          It is a belief that two decades ago, the presence of snakes at the
          Takshakeshwar Nath temple increased significantly during the month of
          Sawan. It is believed that the darshan of Shivling here gives freedom
          from Kalsarp dosha. It is believed that the devotees who visit Lord
          Shiva in Takshakeshwar Nath temple and their descendants get freedom
          from 'Sarp Vish Badha'.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Architecture of the temple
        </p>
        <p className="mt-4 text-gray-600">
          The temple's structure is designed in a manner that is typical of
          Hindu temple architecture found across India. While specific details
          about the temple's architecture may vary, it typically features
          intricate carvings and sculptures, showcasing the craftsmanship of
          ancient artisans. The idols of various deities within the temple
          contribute to its aesthetic appeal.
          <hr className="border-4 mt-4 border-orange-500" />
        </p>
      </div>
      <div className="lg:px-[14vw]  mt-10 ">
        <p className="text-xl font-bold mt-8 underline">Temple Timings</p>
        <div className="flex ml-5 justify-between">
          <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Morning Temple Timing</p>
              <p>07:00AM - 12:00PM</p>
            </div>
          </div>
          <div className="mt-5 flex mr-0">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Evening Temple Timing</p>
              <p>04:00PM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Takshkeshwer;
