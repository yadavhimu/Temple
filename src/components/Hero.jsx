import React, { useState,useEffect } from 'react';


const Hero = () => {
  const slides = [

    {
      url: "./aarti/kalash.jpg" ,
    },

    {
      url: "./aarti/Aarti_Banner.jpg" ,
    },

    {
      url: "./images/Temple.jpeg" ,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === slides.length - 1 ? 0 : prevIndex + 1
			);
		}, 2000);
		return () => clearInterval(interval);
	}, [currentIndex, slides.length]);


  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div  className=' h-[160px] md:h-[250px]  lg:h-[600px]  relative group'>
       <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='sm:w-full h-full bg-center bg-cover duration-1000'
      ></div>
     
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          </div>
        ))}
        
      </div>

      {/* <div className="w-full relative">
        <img
          className="w-full lg:h-[600px] opacity-75"
          src="./aarti/kalash.jpg"
          alt=""
        />
        <div className="absolute top-14 left-40 lg:left-[700px] lg:top-52  lg:w-[600px] font-medium">
          <p className="text-sm lg:text-4xl ">
            {" "}
            <span className="text-orange-600 font-extrabold">Mandir,</span> a
            Devotional Platform connecting Devotees with Temples and Tirth
            Kshetras
          </p>
          <button className="lg:w-40 mt-5 lg:text-2xl lg:font-semibold border-orange-600 border-2 text-white bg-orange-500 rounded-md lg:h-14 ">Book Now</button>
        </div>
      </div> */}

      
    </div>
  );
};

export default Hero;
