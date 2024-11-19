import React from 'react'

const TemPle = () => {
  return (
    <div>
      <div className='lg:flex bg-pink-100'>
        <div className='w-full mt-8 lg:mt-20'>
              <p className='text-4xl font-bold p-4 leading-10'>Connect with major pilgrimage and holy temples of India</p>
              <ol className='p-4 ml-6 list-disc'>
                <li className='text-lg font-medium text-gray-500 '>Learn about the religious culture of the temples</li>
                <li className='text-lg font-medium text-gray-500 mt-3'>Connect with the main temple of your favorite deities</li>
                <li className='text-lg font-medium text-gray-500 mt-3'>Do charity work in temples</li>
              </ol>
              <button className="w-40 mt-5 text-2xl font-semibold border-orange-600 border-2 text-white bg-orange-500 rounded-md h-14 ml-6">Book Now</button>
        </div>
        <div className='w-full'>
          <img src="./images/Map.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default TemPle
