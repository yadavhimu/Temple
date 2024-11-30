import React from 'react'
import { Link } from "react-router-dom";
const Chalisa = () => {
  return (
    <div className='lg:px-[7vw]'>
      <div className='w-full relative mt-5 '>
        <img className='w-full' src="./chalisa/Chalisa_banner.jpeg" alt="" />
        <div className=''>
            <p className='bottom-2 lg:bottom-10 ml-5 font-bold lg:ml-20 absolute lg:text-6xl text-white'>चालीसा</p>
        </div>
      </div>
      <div className='flex-col lg:grid lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid grid-cols-[1fr_1fr] lg:gap-3 gap-0 mt-10'>
        <Link to='/chalisalakshmi'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/1.png" alt="" />
            <p className='text-xl mt-1 font-bold'>महालक्ष्मी चालीसा</p>
            <p className='mt-1 text-gray-600'>इस चालीसा का नियमित पाठ करने से व्यक्ति के जीवन में धन, वैभव और सफलता की वर्षा होती है।</p>
        </div>
        </Link>
        <Link to='/chalisavishnu'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/2.png" alt="" />
            <p className='text-xl mt-1 font-bold'>विष्णु चालीसा</p>
            <p className='mt-1 text-gray-600'>यह सभी प्रकार के कष्टों और बाधाओं को दूर करता है, साथ ही भगवान विष्णु का आशीर्वाद मिलता है।</p>
        </div>
        </Link>
        <Link to='/chalisanavgrah'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/3.png" alt="" />
            <p className='text-xl mt-1 font-bold'>नवग्रह चालीसा</p>
            <p className='mt-1 text-gray-600'>नवग्रह चालीसा से कुंडली के अशुभ प्रभाव कम होते हैं और सकारात्मक ऊर्जा का संचार होता है।</p>
        </div>
        </Link>
        <Link to='/chalisadurga'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/4.png" alt="" />
            <p className='text-xl mt-1 font-bold'>दुर्गा चालीसा</p>
            <p className='mt-1 text-gray-600'>दुर्गा माता की कृपा से प्राप्त करें शक्ति, शांति और समृद्धि।</p>
        </div>
        </Link>
        <Link to='/ganesh'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/5.png" alt="" />
            <p className='text-xl mt-1 font-bold'>सरस्वती चालीसा</p>
            <p className='mt-1 text-gray-600'>अपने जीवन में सकारात्मकता और सफलता के लिए इसे नियमित रूप से पढ़ें।</p>
        </div>
        </Link>
        <Link to='/govardhan'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/6.png" alt="" />
            <p className='text-xl mt-1 font-bold'>गणेश चालीसा</p>
            <p className='mt-1 text-gray-600'>यह चालीसा सभी बाधाओं को दूर कर जीवन में सफलता और उन्नति प्रदान करती है।</p>
        </div>
        </Link>
        <Link to='/hanuman'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/7.png" alt="" />
            <p className='text-xl mt-1 font-bold'>कृष्ण चालीसा</p>
            <p className='mt-1 text-gray-600'>कृष्ण चालीसा का नियमित रूप से पाठ करने से सभी प्रकार के दुखों से मुक्ति मिलती है</p>
        </div>
        </Link>
      </div>
      <div className='flex-col lg:grid lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid grid-cols-[1fr_1fr] lg:gap-3 gap-0 mt-10'>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/8.png" alt="" />
            <p className='text-xl mt-1 font-bold'>शनि देव चालीसा</p>
            <p className='mt-1 text-gray-600'>शनि देव चालीसा जीवन में आने वाली बाधाओं, धन-संपत्ति की कमी, और शारीरिक कष्टों को कम करता है</p>
        </div>
        </Link>
        <Link to='/bhaidooj'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/9.png" alt="" />
            <p className='text-xl mt-1 font-bold'>सूर्य देव चालीसा</p>
            <p className='mt-1 text-gray-600'>नियमित रूप से सूर्य देव चालीसा का पाठ करने से जीवन में सुख, सफलता और खुशियों का वास होता है।</p>
        </div>
        </Link>
        <Link to='/dhanteras'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/10.png" alt="" />
            <p className='text-xl mt-1 font-bold'>Hanuman Chalisa</p>
            <p className='mt-1 text-gray-600'>पढ़े श्री हनुमान चालीसा</p>
        </div>
        </Link>
        <Link to='/diwali'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/11.png" alt="" />
            <p className='text-xl mt-1 font-bold'>साईं बाबा चालीसा</p>
            <p className='mt-1 text-gray-600'>साईं बाबा की कृपा से जीवन में सुख, समृद्धि, और स्वास्थ्य में सुधार होता है।</p>
        </div>
        </Link>
        <Link to='/ganesh'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/12.png" alt="" />
            <p className='text-xl mt-1 font-bold'>शिव चालीसा</p>
            <p className='mt-1 text-gray-600'>जानें शिव चालीसा के पाठ का महत्व, इसके लाभ और कैसे इसे सही विधि से पढ़ना है।</p>
        </div>
        </Link>
        <Link to='/govardhan'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/13.png" alt="" />
            <p className='text-xl mt-1 font-bold'>सरस्वती चालीसा</p>
            <p className='mt-1 text-gray-600'>अपने जीवन में सकारात्मकता और सफलता के लिए इसे नियमित रूप से पढ़ें।</p>
        </div>
        </Link>
        <Link to='/hanuman'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./chalisa/14.png" alt="" />
            <p className='text-xl mt-1 font-bold'>काली माता चालीसा</p>
            <p className='mt-1 text-gray-600'>माँ काली की कृपा से नकारात्मक ऊर्जा और बाधाओं से मुक्ति मिलती है, जिससे जीवन में सकारात्मकता और समृद्धि का संचार होता है।</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Chalisa
