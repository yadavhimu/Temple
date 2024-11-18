import React from "react";
import { SlCalender } from "react-icons/sl";

const BankeBihari = () => {
  return (
    <div>
      <div className="flex gap-4 mt-8">
        <div className="w-[50%] ">
          <img
            className="rounded-l-lg"
            src="./images/Bankebihari.jpeg"
            alt=""
          />
        </div>
        <div className="w-[50%]">
          <div className="flex gap-2">
            <img className="w-[50%]" src="./images/B1.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/B2.jpeg"
              alt=""
            />
          </div>
          <div className="flex gap-2 mt-2 ">
            <img className="w-[50%]" src="./images/B3.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/B4.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="lg:px-[14vw] mt-10">
        <p className="flex justify-center text-4xl font-bold">
          Banke Bihari Temple
        </p>
        <p className="ml-40 mt-4 text-xl text-gray-600">
          {" "}
          The most revered abode of Shri Krishna. Vrindavan, Uttar Pradesh,
          India
        </p>
        <p className="text-lg font-bold mt-4 underline">Overview</p>
        <p className="mt-2 text-gray-600">
          Banke Bihari Temple is situated in Biharipura, Vrindavan, in the
          Mathura district of Uttar Pradesh, India. This temple is well-known
          and considered one of the ancient temples. Banke Bihari is a divine
          form of Lord Shri Krishna, which is extremely enchanting. The temple
          is globally renowned and believed that anyone who visits this temple
          achieves success in life.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          History of the temple
        </p>
        <p className="mt-4 text-gray-600">
          Behind the history of this temple, there is a fascinating story. The
          construction of Banke Bihari Temple was done in 1864 by Swami Haridas.
          Swami Haridas was a devoted devotee of Lord Krishna and Radha. Due to
          his devotion and dedication, Lord Shri Krishna and Radha had to
          manifest in Nidhivan. The divine form of their union was so
          captivating and attractive that an ordinary person couldn't bear to
          see it. Hence, Swami Haridas requested the Lord to manifest in a more
          accessible form. Acknowledging his request, the divine forms of Lord
          Banke Bihari and Radharani merged into one mesmerising deity. This
          divine image is still worshipped in the temple. In 1921, Swami
          Haridas' followers reconstructed the Banke Bihari Temple.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Significance of the temple
        </p>
        <p className="mt-4 text-gray-600">
          It is believed whoever gets a darshan of Banke Bihari Ji, he becomes
          one with the god forever. The sight of Banke Bihari Ji fills people
          with immense joy and devotion. Worshipping Banke Bihari Ji eradicates
          all sorrows and obstacles from one's life. The term "Banke" means
          someone who has turned in three directions, resembling the posture of
          Lord Krishna playing the flute. When playing the flute, Lord Krishna
          turned one knee to the right and the other knee to the left, holding
          the flute with his right hand. Due to this posture, he was called
          "Banke Bihari."
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Architecture of the temple
        </p>
        <p className="mt-4 text-gray-600">
          The architectural style of the Banke Bihari Temple is inspired by
          Rajasthan's traditional architecture. The mehndi (arch) and pillars of
          this temple are highly attractive. The black stone deity of Banke
          Bihari Ji is incredibly captivating, leaving everyone spellbound. This
          image symbolises the oneness of Radha and Krishna.
          <hr className="border-4 mt-4 border-orange-500" />
        </p>
      </div>
      <div className="lg:px-[14vw]  mt-10 ">
        <p className="text-xl font-bold mt-8 underline">Temple Timings</p>
        <div className="flex ml-5 justify-between">
          <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Summer day timings of the temple</p>
              <p>07:45AM - 12:00PM</p>
            </div>
          </div>
          <div className="mt-5 flex mr-40">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">
                Raj Bhog timings
              </p>
              <p>11:00AM - 11:30 AM</p>
            </div>
          </div>
        </div>
        <div className="flex ml-5 justify-between">
          <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Winter morning timing of the temple</p>
              <p>08:45AM - 01:00PM</p>
            </div>
          </div>
          <div className="mt-5 flex ">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Winter evening timings of the temple</p>
              <p>04:30PM - 08:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankeBihari;
