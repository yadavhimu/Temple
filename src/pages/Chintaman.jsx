import React from "react";
import { SlCalender } from "react-icons/sl";

const Chintaman = () => {
  return (
    <div>
      <div className="flex gap-4 mt-8">
        <div className="w-[50%] ">
          <img className="rounded-l-lg" src="./images/Chintaman.png" alt="" />
        </div>
        <div className="w-[50%]">
          <div className="flex gap-2">
            <img className="w-[50%]" src="./images/C1.png" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/C2.jpeg"
              alt=""
            />
          </div>
          <div className="flex gap-2 mt-2 ">
            <img className="w-[50%]" src="./images/C3.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/C4.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="lg:px-[14vw] mt-10">
        <p className="flex justify-center text-4xl font-bold">
          Chintaman Ganesh Temple
        </p>
        <p className="lg:ml-44 mt-4 text-xl text-gray-600">
          {" "}
          3 Forms of Lord Ganesha resides here. . Ujjain, Madhya Pradesh, India
        </p>
        <p className="text-lg font-bold mt-4 underline">Overview</p>
        <p className="mt-2 text-gray-600">
          Chintaman Ganesh Temple, one of the famous Ganesh temples of India, is
          in the religious city of Ujjain in Madhya Pradesh, India. This oldest
          temple of Lord Ganesha is built in the village of Jawasya, at a
          distance of about 6 kilometres from the Mahakaleshwar temple of
          Ujjain. As soon as we enter the sanctum sanctorum of the Chintaman
          Ganesh temple, we see three idols of Shri Ganesh. Here the Lord Ganesh
          is seated in three forms. First Chintaman, second Ichhaman and third
          Siddhivinayak. In Chintaman Ganesh Temple, a fair is held on every
          Wednesday of Chaitra month. According to mythological beliefs,
          Chintaman Ganesha is one of the Shat (6) Vinayak established by Mata
          Sita.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          History of the temple
        </p>
        <p className="mt-4 text-gray-600">
          Chintaman Ganesh ji in Chintaman Ganesh Temple was established by Lord
          Shri Ram and Mata Sita during their exile. Ichhaman and Siddhivinayak
          Ganesh ji were established by Laxman ji and Sita Mata. It is said that
          for the devotees who offer prayers at Chintaman Ganesh Temple on
          Wednesdays of Chaitra month, Lord Ganesha fulfils all their wishes and
          frees them from all kinds of worries. Chintaman Ganesha located in the
          temple gives relief from worries to the devotees, the Siddhivinayak
          Swaroop help the devotees to achieve and Ichhaman Ganesha fulfils the
          wish.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Significance of the temple
        </p>
        <p className="mt-4 text-gray-600">
          Following the age-old belief, after the Rabi crop ripens in the month
          of Chaitra, local farmers first offer their harvest to Lord Chintaman
          Ganesh. They only proceed to the market to sell that. It is thought
          that by doing this, Lord Chintaman Ganesh removes all barriers to the
          farmers' work. The worshippers also make a reverse swastika and tie a
          thread of vow in this temple for their wishes to come true.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Architecture of the temple
        </p>
        <p className="mt-4 text-gray-600">
          Chintaman Ganesh Temple is believed to be from the middle of the 9th
          century to the 13th i.e. Parmar period. Lion is also sitting on the
          top of this temple along with the domes. This temple was built in
          Vikram Samvat, i.e. in 155 by Maharaja Vikramaditya according to
          Sriyantra. After that, it was renovated during the Peshwa period.
          Whereas the present temple was renovated during the reign of Ahilyabai
          Holkar, the idol of Shri Ganesh ji installed in the temple was
          standing. Today, the idol is half sunken inside the ground, due to
          which half of the idol can be seen.
          <hr className="border-4 mt-4 border-orange-500" />
        </p>
      </div>
      <div className="lg:px-[14vw]  mt-10 ">
        <p className="text-xl font-bold mt-8 underline">Temple Timings</p>
        <div className="flex ml-5 justify-between">
          <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Temple Morning Timing</p>
              <p>06:00AM - 09:30PM</p>
            </div>
          </div>
          <div className="mt-5 flex mr-0">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">First Aarti</p>
              <p>08:00AM - 09:00 AM</p>
            </div>
          </div>
        </div>
        <div className="flex ml-5 justify-between">
          <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Bhog Aarti</p>
              <p>12:00PM - 12:30PM</p>
            </div>
          </div>
          <div className="mt-5 flex ">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Night Aarti</p>
              <p>09:00PM - 09:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chintaman;
