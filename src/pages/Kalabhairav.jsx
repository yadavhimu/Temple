import React from "react";
import { SlCalender } from "react-icons/sl";

const Kalabhairav = () => {
  return (
    <div>
      <div className="flex gap-4 mt-8">
        <div className="w-[50%] ">
          <img
            className="rounded-l-lg"
            src="./images/Kalabhairav.jpeg"
            alt=""
          />
        </div>
        <div className="w-[50%]">
          <div className="flex gap-2">
            <img className="w-[50%]" src="./images/K1.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/K2.jpeg"
              alt=""
            />
          </div>
          <div className="flex gap-2 mt-2 ">
            <img className="w-[50%]" src="./images/K3.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/K4.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="lg:px-[14vw] mt-10">
        <p className="flex justify-center text-4xl font-bold">
          Shri Kalabhairav ​​Temple
        </p>
        <p className="ml-44 mt-4 text-xl text-gray-600">
          {" "}
          Shri Kalabhairav is the guardian of Ujjain . Ujjain, Madhya Pradesh,
          India
        </p>
        <p className="text-lg font-bold mt-4 underline">Overview</p>
        <p className="mt-2 text-gray-600">
          The temple of Lord Kaal Bhairav is located in Ujjain City of Madhya
          Pradesh, India. The history of this temple, located in the Bhairavgarh
          region on the banks of the Kshipra River, is said to date back around
          6,000 years old. This temple is devoted to Kaal Bhairav, who is also
          regarded as the guardian and is believed as the sole protector of the
          city of Ujjain. The Vaishnava form of Lord Kalabhairava is worshipped
          in this temple.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          History of the temple
        </p>
        <p className="mt-4 text-gray-600">
          The Kaal Bhairav Temple of Ujjain was built by King Bhadrasen, which
          is also mentioned in the Avanti Khanda of Skanda Purana. In this
          temple, idols of Lord Shiva, Mother Parvati, Lord Vishnu, and Ganesha
          from the Parmar era (9th to 13th century) have been discovered. During
          Raja Bhoj's reign, this temple was also rebuilt at the same time.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Significance of the temple
        </p>
        <p className="mt-4 text-gray-600">
          It is popularly believed that King Mahakal of Ujjain appointed
          Kalabhairav to protect the city. For this reason, Kalbhairav is also
          called Kotwal of the city. In this temple of Bhairav Baba, alcohol is
          offered to him, but where the alcohol goes, this mystery has remained
          a mystery today. Thousands of devotees reach here every day to see
          this idol of Kalabhairav drinking alcohol. In this temple, the idol of
          Lord Kalabhairav is seen wearing a Scindia turban. This turban comes
          from the Scindia family of Gwalior for Baba Bhairavnath. This practice
          has been going on for hundreds of years
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Architecture of the temple
        </p>
        <p className="mt-4 text-gray-600">
          The Kaal Bhairav Temple of Ujjain is built according to the Maratha
          architectural style, the remains of magnificent paintings made in the
          Malwa style are still visible in the walls of the temple. At the same
          time, in the sanctum sanctorum of the temple, the idol of Lord Kaal
          Bhairav is sitting in the form of a rock.
          <hr className="border-4 mt-4 border-orange-500" />
        </p>
      </div>
      <div className="lg:px-[14vw]  mt-10 ">
        <p className="text-xl font-bold mt-8 underline">Temple Timings</p>
        <div className="flex ml-5 justify-between">
          <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">
                 Temple Timing
              </p>
              <p>06:00AM - 10:00PM</p>
            </div>
          </div>
          <div className="mt-5 flex mr-0">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Bhasm Aarti</p>
              <p>04:00AM - 06:00 AM</p>
            </div>
          </div>
        </div>
        <div className="flex ml-5 justify-between">
          <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">
                Sandhya Aarti
              </p>
              <p>06:30PM - 07:15PM</p>
            </div>
          </div>
          <div className="mt-5 flex ">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">
                Shayan Aarti
              </p>
              <p>10:30PM - 11:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kalabhairav;
