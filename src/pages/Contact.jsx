import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='bg-orange-500 h-20 flex items-center justify-center '>
        <p className='text-4xl font-bold  text-white '>Contact Us</p>
      </div>
      <div className='lg:px-[7vw] lg:flex mt-20'>
        <div className='w-full'>
        <p className='text-4xl  text-gray-700  flex'>You find us at</p>
        <p className=' text-gray-700 mt-20'>EMAIL</p>
        <p className=' text-gray-700 text-xl'>info@mandir.com</p>
        <p className=' text-gray-700 mt-10'>Phone Number</p>
        <p className=' text-gray-700 text-xl'>123456789</p>
        <p className=' text-gray-700 mt-10'>LOCATION</p>
        <p className=' text-gray-700 text-xl'> Kanpur  </p>
        </div>
        <div className='w-full'>
         <p className='text-4xl text-gray-700 flex lg:mt-0 mt-10'>Let's get in touch</p>
         <div>
          <form>
          <div className='mt-8'>
                <p className="mt-5 text-lg mb-2">Name</p>
                <input
                  type="Text"
                  className="w-[100%] h-10 border-2 border-gray-500 text-gray-700"
                  placeholder=""
                  name="name"
                  required
                />
              </div>
              <div>
                <p className="mt-5 text-lg mb-2">Phone</p>
                <input
                  type="number"
                  className="w-[100%] h-10 border-2 border-gray-500 text-gray-700"
                  placeholder=""
                  name="name"
                  required
                />
              </div>
              <div>
                <p className="mt-5 text-lg mb-2">Puja Name</p>
                <input
                  type="text"
                  className="w-[100%] h-10 border-2 border-gray-500 text-gray-700"
                  placeholder=""
                  name="name"
                  required
                />
              </div>
              <div>
                <p className="mt-5 text-lg mb-2">Message</p>
                <textarea className="w-[100%] h-24 border-2 border-gray-500 text-gray-700"></textarea>
              </div>

              
              <button className='w-28 h-8 text-lg rounded-lg bg-gray-900 text-white mt-10'>Submit</button>
          </form>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
