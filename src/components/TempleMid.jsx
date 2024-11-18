import React from "react";
import { Link } from "react-router-dom";

const TempleMid = () => {
  return (
    <div>
      <div className=" flex justify-between p-4 mt-14">
        <Link to="/premmandir">
        <div className="w-[296px]">
          <img className="rounded-lg" src="./images/Premmandir.jpeg" alt="" />
          <div>
            <p className="text-2xl font-medium mt-4">Prem Mandir</p>
            <p className="text-lg font-medium">Vrindavan, Uttar Pradesh</p>
            <p className="mt-3 text-gray-700">
              A huge building has been constructed for satsang in the temple, in
              which 25000 people can sit together. The walls of the sanctum
              sanctorum are 8 feet thick to bear the weight of the huge
              shikhara, golden kalash and flag.
            </p>
          </div>
        </div>
        </Link>
        <Link to='/bankebihari'>
        <div className="w-[296px]">
          <img className="rounded-lg" src="./images/Bankebihari.jpeg" alt="" />
          <div>
            <p className="text-2xl font-medium mt-4">Banke Bihari Temple</p>
            <p className="text-lg font-medium">Vrindavan, Uttar Pradesh</p>
            <p className="mt-3 text-gray-700">
              The construction of Banke Bihari Temple was done in 1864 by Swami
              Haridas. Swami Haridas was a devoted devotee of Lord Krishna and
              Radha.
            </p>
          </div>
        </div>
        </Link>
        <Link to='/kalabhairav'>
        <div className="w-[296px]">
          <img className="rounded-lg" src="./images/Kalabhairav.jpeg" alt="" />
          <div>
            <p className="text-2xl font-medium mt-4">Shri Kalabhairav Temple</p>
            <p className="text-lg font-medium">Ujjain, Madhya Pradesh</p>
            <p className="mt-3 text-gray-700">
              In this temple of Bhairav Baba, alcohol is offered to him, but
              where the alcohol goes, this has remained a mystery today.
            </p>
          </div>
        </div>
        </Link>
        <Link to="/takshkeshwer">
        <div className="w-[296px]">
          <img
            className="rounded-lg"
            src="./images/Takshakeshwar.jpeg"
            alt=""
          />
          <div>
            <p className="text-2xl font-medium mt-4">
              Takshkeshwer Nath Temple
            </p>
            <p className="text-lg font-medium">Prayagraj, Uttar Pradesh</p>
            <p className="mt-3 text-gray-700">
              It is a belief that two decades ago, the presence of snakes at the
              Takshakeshwar Nath temple increased significantly during the month
              of Sawan.
            </p>
          </div>
        </div>
        </Link>
      </div>
      <div className=" flex justify-between p-4 mt-14">
        <Link to="/glass">
        <div className="w-[296px]">
          <img className="rounded-lg" src="./images/Glass.jpeg" alt="" />
          <div>
            <p className="text-2xl font-medium mt-4">Glass Temple</p>
            <p className="text-lg font-medium">Indore, Madhya Pradesh</p>
            <p className="mt-3 text-gray-700">
              The interiors of this 102-year-old temple are completely made up
              of glass. From the roof to pillars, doors, windows and
              chandeliers, everything is ornamented with glass.
            </p>
          </div>
        </div>
        </Link>
        <Link to='/chintaman'>
        <div className="w-[296px]">
          <img className="rounded-lg" src="./images/Chintaman.png" alt="" />
          <div>
            <p className="text-2xl font-medium mt-4">Chintaman Ganesh Temple</p>
            <p className="text-lg font-medium">Ujjain, Madhya Pradesh</p>
            <p className="mt-3 text-gray-700">
              At the temple, Lord Ganesh is seated in three forms. First
              Chintaman, second Ichhaman, and third Siddhivinayak.
            </p>
          </div>
        </div>
        </Link>
        <Link to='/iskcon'>
        <div className="w-[296px]">
          <img className="rounded-lg" src="./images/ISKCON.jpeg" alt="" />
          <div>
            <p className="text-2xl font-medium mt-4">Iskcon Temple</p>
            <p className="text-lg font-medium">Vrindavan, Uttar Pradesh</p>
            <p className="mt-3 text-gray-700">
              ISKCON Vrindavan, known as Sri Sri Krishna Balaram Mandir, is a
              revered temple in Vrindavan dedicated to Lord Krishna and Lord
              Balaram.
            </p>
          </div>
        </div>
        </Link>
        <Link to='/vrindavan'>
        <div className="w-[296px]">
          <img className="rounded-lg" src="./images/Veni.jpeg" alt="" />
          <div>
            <p className="text-2xl font-medium mt-4">
              Vrindavan Chandrodaya Temple
            </p>
            <p className="text-lg font-medium">Vrindavan, Uttar Pradesh</p>
            <p className="mt-3 text-gray-700">
              The main attraction of the temple will be a capsule elevator that
              will take visitors to the top, offering panoramic views of the
              entire Braj Mandal.
            </p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default TempleMid;
