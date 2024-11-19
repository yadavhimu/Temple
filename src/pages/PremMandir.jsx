import React from "react";
import { SlCalender } from "react-icons/sl";

const PremMandir = () => {
  return (
    <div>
      <div className="flex gap-4 mt-8">
        <div className="w-[50%] ">
          <img className="rounded-l-lg" src="./images/Premmandir.jpeg" alt="" />
        </div>
        <div className="w-[50%]">
          <div className="flex gap-2">
            <img className="w-[50%]" src="./images/Prem1.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/Prem2.jpeg"
              alt=""
            />
          </div>
          <div className="flex gap-2 mt-2 ">
            <img className="w-[50%]" src="./images/Prem3.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/Prem4.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="lg:px-[14vw] mt-10">
        <p className="flex justify-center text-4xl font-bold">Prem Mandir</p>
        <p className="lg:ml-24 mt-4 text-xl text-gray-600">
          {" "}
          Built in a vast area of ​​55 acres, Prem Mandir is famous all over the
          world. Vrindavan, Uttar Pradesh, India{" "}
        </p>
        <p className="text-lg font-bold mt-4 underline">Overview</p>
        <p className="mt-2 text-gray-600">
          Prem Mandir, also known as the Temple of Divine Love, is a Hindu
          temple located in Vrindavan, Uttar Pradesh, India. Founded by
          Jagadguru Shri Kripalu Ji Maharaj, it is a spiritual haven maintained
          by the Jagadguru Kripalu Parishat. Situated on a sprawling 55-acre
          site on the outskirts of Vrindavan, the temple is dedicated to Radha
          Krishna and Sita Ram. The divine deities of Radha Krishna reside on
          the first level, while Sita Ram are enshrined on the second level. The
          temple's main structure beautifully showcases the various Leelas of
          Lord Krishna and revered saints, depicted across its walls.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          History of the temple
        </p>
        <p className="mt-4 text-gray-600">
          On January 14, 2001, Jagadguru Shri Kripalu Ji Maharaj placed the
          cornerstone in the presence of thousands of followers. The building's
          construction, which involved about 1000 artisans, took about 12 years.
          Kripalu Ji Maharaj, whose primary ashram was in Vrindavan, created the
          Vrindavan site. To Shri Vrindavan Dham, he committed his act of love.
          Shri Kripalu Ji Maharaj arranged for the collection of holy water from
          various sacred places and conducted a Kalash Yatra (procession) with
          108 filled water pots. The temple was purified by performing the
          consecration ceremony using this water, transforming it into a sacred
          abode. As you can see, the beauty of this temple is captivating, and
          devotees are filled with deep reverence as they behold it, chanting
          the divine name of "Radhe Radhe" with utmost devotion.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Significance of the temple
        </p>
        <p className="mt-4 text-gray-600">
          Prem Mandir holds profound significance as a temple dedicated to the
          divine embodiment of love, Lord Shri Radha Krishna. Unlike other
          temples that bear names based on different divine forms, this unique
          establishment was aptly named "Prem Mandir" by Shri Maharaj Kripalu
          Ji. It signifies that love reigns supreme, and Lord Shri Radha Krishna
          embodies the essence of love itself.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Architecture of the temple
        </p>
        <p className="mt-4 text-gray-600" >
          Italian marble was used in the construction of Prem Mandir. The
          two-story white monument is seated on a raised platform that is 128
          feet wide, and the temple is 125 feet high and 190 feet long overall.
          The 48 panels representing Shri Radha Krishna's pastimes that are
          carved on the temple's outer walls can be seen by tourists, thanks to
          a circumambulation trail that has been built on the mandir praga, or
          platform, of the temple. The walls are 3.25 feet thick and composed of
          pure Italian marble. The garbha-griha's walls are 8 feet thick to
          support the weight of the enormous Shikhar, Swarna Kalash, and the
          flag. 84 panels have been installed on the temple's façade and show
          Shri Radha Krishna's devoted deeds. In addition to this, the temple
          also contains various images of the Radha Krishna Leela and the
          miracles of Lord Krishna.
          <hr className="border-4 mt-4 border-orange-500" />
        </p>
      </div>
      <div className="lg:px-[14vw]  mt-10 ">
        <p className="text-xl font-bold mt-8 underline">Temple Timings</p>
        <div className="sm:flex ml-5 justify-between">
            <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
                <div className=" ml-4">
                    <p className="text-lg font-medium">Prem Mandir Opening timings</p>
                    <p>05:30AM - 12:00PM</p>
                </div>
            </div>
            <div className="mt-5 flex mr-1">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
                <div className=" ml-4">
                    <p className="text-lg font-medium">Morning Aarti Parkrama timings</p>
                    <p>05:30AM - 06:30 AM</p>
                </div>
            </div>
        </div>
        <div className="sm:flex ml-5 justify-between">
            <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
                <div className=" ml-4">
                    <p className="text-lg font-medium">Temple evening timings</p>
                    <p>04:30PM - 08:30PM</p>
                </div>
            </div>
            <div className="mt-5 flex mr-20">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
                <div className=" ml-4">
                    <p className="text-lg font-medium">Evening closed timings</p>
                    <p>08:10PM - 08:30 PM</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PremMandir;
