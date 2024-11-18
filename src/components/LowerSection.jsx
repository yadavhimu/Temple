import React from "react";
import { Link } from "react-router-dom";

const LowerSection = () => {
  return (
    <div>
      <div>
        <p className="flex justify-center text-4xl mt-20 font-bold">
          Read Aarti, Chalisa, Mantra and Ayurvedic & Home Remedies <br /> and
          everything around Sanatan Dharma.
        </p>
      </div>
      <div className="flex justify-evenly gap-10 mt-20">
        <div>
          <img className="w-full h-[55%] rounded-md" src="./images/aarti.jpeg" alt="" />
          <div>
          <p className="text-xl font-medium mt-4">Aarti</p>
          <p className="mt-4 mb-5">
            
            Find Complete lyrics of all the famous Aartis and easily worship
            your beloved God.
          </p>
          <Link to='/puja' className="cursor-pointer text-orange-600"> Read All</Link>

          </div>
          
        </div>
        <div>
          <img className="w-full h-[55%] rounded-md" src="./images/chaalisa.jpeg" alt="" />
          <div>
          <p className="text-xl font-medium mt-4">Chalisa</p>
          <p className="mt-4 mb-5">
            
            You Will get complete Chalisa of all the deities. Read Chalisa during the pooja.
          </p>
          <Link to='/' className="cursor-pointer text-orange-600"> Read All</Link>

          </div>
         
        </div>
        <div>
          <img className="w-full h-[55%] rounded-md" src="./images/mantra.jpeg" alt="" />
          <div>
          <p className="text-xl font-medium mt-4">Mantra</p>
          <p className="mt-4 mb-5">
            
            Here you will find all the powerful mantras for peace of mind.
          </p>
          <Link to='/' className="cursor-pointer text-orange-600"> Read All</Link>

          </div>
        </div>
        <div>
          <img className="w-full h-[55%] rounded-md" src="./images/ayurvedic.jpeg" alt="" />
          <div>
          <p className="text-xl font-medium mt-4">Ayurvedic & Remedies</p>
          <p className="mt-4 mb-5">
            
            We have brought the precious knowledge of ayurveda for you.
          </p>
          <Link to='/' className="cursor-pointer text-orange-600"> Read All</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerSection;
