import React from "react";
import { SlCalender } from "react-icons/sl";

const Glass = () => {
  return (
    <div>
      <div className="flex gap-4 mt-8">
        <div className="w-[50%] ">
          <img className="rounded-l-lg" src="./images/Glass.jpeg" alt="" />
        </div>
        <div className="w-[50%]">
          <div className="flex gap-2">
            <img className="w-[50%]" src="./images/G1.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/G2.jpeg"
              alt=""
            />
          </div>
          <div className="flex gap-2 mt-2 ">
            <img className="w-[50%]" src="./images/G3.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/G4.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="lg:px-[14vw] mt-10">
        <p className="flex justify-center text-4xl font-bold">Glass Temple</p>
        <p className="lg:ml-10 mt-4 text-xl text-gray-600">
          {" "}
          This Jain temple is frequently visited by people across faiths and
          religions .Indore, Madhya Pradesh, India
        </p>
        <p className="text-lg font-bold mt-4 underline">Overview</p>
        <p className="mt-2 text-gray-600">
          Located in the Indore district of Madhya Pradesh, Kanch Temple is
          known for its uniqueness across the world. The interiors of this
          102-year-old temple are completely made up of glass. From the roof to
          pillars, doors, windows and chandeliers, everything is ornamented with
          glass. Though it is a temple of the Jain community, it is frequented
          by people from across faiths and religions. You cannot escape being
          spellbound by the enchanting beauty and craftsmanship embodied by the
          temple.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          History of the temple
        </p>
        <p className="mt-4 text-gray-600">
          The construction of Kanch Temple was started in 1903 by Sir Seth
          Hukumchand, a noted industrialist and a resident of Indore. He built a
          grand residence at Itwaria Bazaar, named Sheesh Mahal and the Kanch
          Mandir was constructed next to it. While Seth Hukumchand built it with
          a wish for a personal temple, it was later opened to the entire
          public. Notably, the temple was built at an astounding cost of 1 lakh
          62 thousand rupees, with the involvement of nearly 250 workers. The
          temple is adorned with eye-catching artworks and murals that speak of
          Jain philosophy and spirituality.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Significance of the temple
        </p>
        <p className="mt-4 text-gray-600">
          The temple premises are filled with depictions of Jain Gurus and Munis
          and ornamented portrayals of tales from Jain philosophy and mythology.
          A golden chariot and carriage are also present here, which are taken
          out every year for the annual Rath Yatra. Further, Further, the
          festivals of Sugandh Dashmi and Collective Kshamavani are also
          observed here. The temple is known as Chaityalaya because the complete
          consecration of the Gods could not be performed there.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Architecture of the temple
        </p>
        <p className="mt-4 text-gray-600">
          Notably, Seth Hukumchand himself prepared the architectural design of
          the Kanch Temple. Its sanctum houses an alluring idol of Shree
          Chandrapha Bhagwan, who is accompanied by Adinath Bhagwan on his
          right. The statue of Adinath Bhagwan (Lord Mahavira) is made up of
          shining black onyx, which was sourced from Jaipur. The glass used for
          the construction of the temple was brought from Belgium and the
          carvings were done by artists from Iran and Jaipur. Given the
          glasswork, the interiors of the temple resound with a 3D effect that
          heightens its appeal. Interestingly, cement was not used for building
          this temple and the rocks have been joined using a mixture of lime.
          <hr className="border-4 mt-4 border-orange-500" />
        </p>
      </div>
      <div className="lg:px-[14vw]  mt-10 ">
        <p className="text-xl font-bold mt-8 underline">Temple Timings</p>
        <div className="flex ml-5 justify-between">
          <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Temple Timing</p>
              <p>10:00AM - 05:00PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glass;
