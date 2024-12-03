import React from 'react'
import { Link } from "react-router-dom";

const Mantra = () => {
  return (
    <div className='lg:px-[5vw]'>
      <div className='w-full relative mt-5 '>
        <img className='w-full' src="./Mantra/Mantra_banner.png" alt="" />
        <div className=''>
            <p className='bottom-2 lg:bottom-10 ml-5 font-bold lg:ml-20 absolute lg:text-6xl text-white'>मंत्र : अर्थ और उनके लाभ</p>
        </div>
      </div>
      <div className='flex-col lg:grid lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid grid-cols-[1fr_1fr] lg:gap-3 gap-0 mt-10'>
        <Link to='/mantrachhath'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./Mantra/1.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>छठ पूजा मंत्र</p>
            <p className='mt-1 text-gray-600'>सूर्य देवता और छठी माई की कृपा प्राप्त करने के लिए इन मंत्रों का उपयोग करें</p>
        </div>
        </Link>
        <Link to='/mantragovardhan'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./Mantra/2.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>गोवर्धन मंत्र</p>
            <p className='mt-1 text-gray-600'>गोवर्धन मंत्र की शक्ति जानें! ये मंत्र कैसे लाएगा आपके जीवन में सुख, शांति और समृद्धि? जानें अब!</p>
        </div>
        </Link>
        <Link to='/mantraganesh'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./Mantra/3.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>श्री गणेश जी के मंत्र</p>
            <p className='mt-1 text-gray-600'>जानिए इन मंत्रों के अर्थ और लाभ जो आपके जीवन में सुख, समृद्धि, और शांति लाने में सहायक हैं।</p>
        </div>
        </Link>
        <Link to='/mantravishnu'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./Mantra/4.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>भगवान श्री विष्णु के मंत्र</p>
            <p className='mt-1 text-gray-600'>पढ़ें भगवान श्री विष्णु के मंत्र: अर्थ और लाभ</p>
        </div>
        </Link>
        <Link to='/mantrashiv'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./Mantra/5.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>भगवान शिव के मंत्र</p>
            <p className='mt-1 text-gray-600'>इन मंत्रों का उच्चारण करने से जीवन में शांति, शक्ति, और सफलता प्राप्त होती है।</p>
        </div>
        </Link>
        <Link to='/mantradurga'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./Mantra/6.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>मां दुर्गा के शक्तिशाली मंत्र</p>
            <p className='mt-1 text-gray-600'>देवी दुर्गा के इन शक्तिशाली मंत्रों से पाएं अद्भुत शक्ति, सुरक्षा और जीवन में सुख-समृद्धि।</p>
        </div>
        </Link>
        <Link to='/mantralakshmi'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./Mantra/7.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>लक्ष्मी माता के मंत्र</p>
            <p className='mt-1 text-gray-600'>जानें ॐ श्रीं ह्रीं श्रीं कमले कमलालये नमः मंत्र के फायदे और इसे जपने से जीवन में धन, समृद्धि और सुख की प्राप्ति कैसे होती है।</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Mantra
