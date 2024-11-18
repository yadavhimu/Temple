import React from "react";
import { SlCalender } from "react-icons/sl";

const Iskcon = () => {
  return (
    <div>
      <div className="flex gap-4 mt-8">
        <div className="w-[50%] ">
          <img className="rounded-l-lg" src="./images/ISKCON.jpeg" alt="" />
        </div>
        <div className="w-[50%]">
          <div className="flex gap-2">
            <img className="w-[50%]" src="./images/I1.png" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/I2.png"
              alt=""
            />
          </div>
          <div className="flex gap-2 mt-2 ">
            <img className="w-[50%]" src="./images/I3.jpeg" alt="" />
            <img
              className="w-[50%] rounded-r-lg"
              src="./images/I4.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="lg:px-[14vw] mt-10">
        <p className="flex justify-center text-4xl font-bold">Iskcon Temple</p>
        <p className="ml-0 mt-4 text-xl text-gray-600">
          {" "}
          ISKCON was founded by Bhaktivedanta Swami Prabhupada in 1966 in New
          York. . Vrindavan, Uttar Pradesh, India
        </p>
        <p className="text-lg font-bold mt-4 underline">Overview</p>
        <p className="mt-2 text-gray-600">
          ISKCON Vrindavan, known as Sri Sri Krishna Balaram Mandir, is a
          revered temple in Vrindavan dedicated to Lord Krishna and Lord
          Balarama. It embodies the vision of Srila Prabhupada, the founder of
          ISKCON, who desired to create a temple of extraordinary beauty.
          Devotees from around the world gather here to experience spiritual
          solace and connect with the divine presence. The temple hosts sacred
          ceremonies, devotional programs, and festivals, fostering a sense of
          unity and devotion among its visitors. With enchanting rituals and
          soul-stirring kirtans, ISKCON Vrindavan offers a profound spiritual
          journey for all who seek the divine grace of Lord Krishna and Lord
          Balarama.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          History of the temple
        </p>
        <p className="mt-4 text-gray-600">
          In 1975, A. C. Bhaktivedanta Swami Prabhupada, the founder-acharya of
          the International Society for Krishna Consciousness (ISKCON),
          established the Krishna Balaram Mandir in Vrindavan. On the auspicious
          occasion of Ram Navami, he inaugurated the temple and installed the
          divine deities of Krishna-Balaram, Radha-Shyamasundar, Lalita Devi,
          Vishakha Devi, and Gaura-Nitai. This momentous event marked the
          beginning of a spiritual legacy that continues to inspire and attract
          devotees from all over the world. The ISKCON temple Mathura stands as
          a testament to Swami Prabhupada's vision and his dedication to
          spreading the message of Krishna consciousness.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Significance of the temple
        </p>
        <p className="mt-4 text-gray-600">
          This temple attracts pilgrims from around the world, as it stands as a
          beacon of strength and devotion. ISKCON Vrindavan temple proudly joins
          the esteemed landmarks of Banke Bihari as a destination recognized by
          the government and cherished by devotees worldwide.
        </p>
        <hr className="border-4 mt-4 border-orange-500" />
        <p className="text-xl font-bold mt-8 underline">
          Architecture of the temple
        </p>
        <p className="mt-4 text-gray-600">
          The temple entrance features a stunning marble archway leading to
          Srila Prabhupada's samadhi, adorned with exquisite peacock stairways
          and intricately carved walls. Inside, visitors are enchanted by the
          grandeur of Krishna Balaram's palace, with its unique black and white
          chequered marble courtyard and a majestic tamal tree. The
          soul-stirring kirtan melodies fill the air, inspiring everyone to
          dance in blissful ecstasy. As pilgrims ascend the steps, they behold
          the radiant forms of Sri Sri Gaura Nitai, Krishna Balaram, and Radha
          Shyamasundar, adorned with unparalleled opulence. This dynamic temple
          complex also houses various facilities, including a guesthouse,
          museum, book stalls, bakery, restaurant, broadcast studio, ashram, and
          a dedicated team of devotees engaged in the highest standard of
          worship.
          <hr className="border-4 mt-4 border-orange-500" />
        </p>
      </div>
      <div className="lg:px-[14vw]  mt-10 ">
        <p className="text-xl font-bold mt-8 underline">Temple Timings</p>
        <div className="flex ml-5 justify-between">
          <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Temple morning Timing</p>
              <p>04:00AM - 12:45PM</p>
            </div>
          </div>
          <div className="mt-5 flex mr-0">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Mangala Aarti </p>
              <p>04:30AM - 05:00 AM</p>
            </div>
          </div>
        </div>
        <div className="flex ml-5 justify-between">
          <div className="mt-5 flex">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Sandhya Aarti</p>
              <p>06:30PM - 07:00PM</p>
            </div>
          </div>
          <div className="mt-5 flex ">
            <SlCalender className="mt-4 text-yellow-700 text-2xl" />
            <div className=" ml-4">
              <p className="text-lg font-medium">Shayan Aarti</p>
              <p>08:00PM - 08:15 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iskcon;
