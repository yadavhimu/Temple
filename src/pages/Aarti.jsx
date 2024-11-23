import React from 'react'
import { Link } from "react-router-dom";

const Aarti = () => {
  return (
    <div className='lg:px-[7vw]'>
      <div className='w-full relative mt-5 '>
        <img className='w-full' src="./aarti/Aarti_Banner.jpeg" alt="" />
        <div className=''>
            <p className='bottom-10 ml-20 absolute text-6xl text-white'>आरतियां</p>
        </div>
      </div>
      <div className='flex gap-3 mt-10'>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/Amba.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>अम्बे गौरी की आरती</p>
            <p className='mt-1 text-gray-600'>अम्बे गौरी की आरती का पाठ करने से भक्तों के जीवन में शांति, समृद्धि और सुख-शांति का वास होता है।</p>
        </div>
        </Link>
        <Link to='/bhaidooj'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/Bhai_dooj.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>भाई दूज आरती</p>
            <p className='mt-1 text-gray-600'>भाई दूज आरती का महत्व क्या है? जानें इस आरती के जरिए भाई की लंबी उम्र और समृद्धि की प्रार्थना कैसे करें! इस खास दिन की विधि और इसके अद्भुत प्रभावों के बारे में जानें।</p>
        </div>
        </Link>
        <Link to='/dhanteras'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/Dhanteras.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>धनतेरस आरती</p>
            <p className='mt-1 text-gray-600'>इस पावन दिन पर माँ लक्ष्मी और भगवान धन्वंतरि की आरती के साथ घर में सुख-समृद्धि और स्वास्थ्य का आशीर्वाद पाएं।</p>
        </div>
        </Link>
        <Link to='/diwali'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/Diwali.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>दीपावली विशेष मंत्र एवं आरती</p>
            <p className='mt-1 text-gray-600'>दीपावली पर जानें खास मंत्र और आरती! इस दिवाली अपने घर में लाएं खुशियों और समृद्धि का उजाला!</p>
        </div>
        </Link>
        <Link to='/ganesh'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/ganeshji.png" alt="" />
            <p className='text-xl mt-1 font-bold'>श्री गणेश आरती</p>
            <p className='mt-1 text-gray-600'>गणपति बप्पा की कृपा से मनोबल बढ़ता है, जीवन में शांति और समृद्धि आती है, तथा सभी कार्य सिद्ध होते हैं।</p>
        </div>
        </Link>
        <Link to='/govardhan'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/Gowardhan.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>गोवर्धन पूजा आरती</p>
            <p className='mt-1 text-gray-600'>गोवर्धन पूजा आरती का महत्व क्या है और यह किस तरह आपके जीवन में सुख और समृद्धि ला सकती है? जानें इस आरती में छिपे भक्ति के भाव और भगवान श्रीकृष्ण की महिमा, जो आपके घर में शांति और खुशहाली का संचार करेगी।</p>
        </div>
        </Link>
        <Link to='/hanuman'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/hanumanji.png" alt="" />
            <p className='text-xl mt-1 font-bold'>हनुमान जी की आरती</p>
            <p className='mt-1 text-gray-600'>इस आरती के नियमित पाठ से मानसिक शांति, आत्मबल और जीवन में सुख-समृद्धि प्राप्त होती है।</p>
        </div>
        </Link>
      </div>
      <div className='flex gap-3 mt-10'>
        <Link to='/kali'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/jagdambe.png" alt="" />
            <p className='text-xl mt-1 font-bold'>काली माता की आरती</p>
            <p className='mt-1 text-gray-600'>आरती का गान माता काली की कृपा प्राप्त करने के लिए किया जाता है</p>
        </div>
        </Link>
        <Link to='/vishnu'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/jagdish.png" alt="" />
            <p className='text-xl mt-1 font-bold'>श्री विष्णु जी आरती</p>
            <p className='mt-1 text-gray-600'>विष्णु जी की कृपा से सभी कष्ट दूर होते हैं और जीवन में सौभाग्य की प्राप्ति होती है।</p>
        </div>
        </Link>
        <Link to='/jagdish'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/jai_jagdish.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>ॐ जय जगदीश हरे आरती</p>
            <p className='mt-1 text-gray-600'>अनुराधा पौडवाल द्वारा गाए गए 'ॐ जय जगदीश हरे' भजन को सुनें। इस आरती के सुंदर बोल पढ़ें और भक्तिमय प्रार्थना में डूब जाएं।</p>
        </div>
        </Link>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/kashyapnandan.png" alt="" />
            <p className='text-xl mt-1 font-bold'>सूर्यदेव आरती</p>
            <p className='mt-1 text-gray-600'>यह आरती हर सुबह की जाती है, जिससे दिन का आरंभ शुभ और उन्नति प्रदान करने वाला हो। </p>
        </div>
        </Link>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/kunjbihari.png" alt="" />
            <p className='text-xl mt-1 font-bold'>श्री कुंजबिहारी आरती</p>
            <p className='mt-1 text-gray-600'>यह आरती विशेष रूप से उन भक्तों के लिए लाभकारी है जो प्रेम, आनंद और शांति की खोज में हैं।</p>
        </div>
        </Link>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/lakshmimata.png" alt="" />
            <p className='text-xl mt-1 font-bold'>लक्ष्मी जी की आरती</p>
            <p className='mt-1 text-gray-600'>मां लक्ष्मी की आरती से सकारात्मक ऊर्जा और सौभाग्य की प्राप्ति होती है।</p>
        </div>
        </Link>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/monday.png" alt="" />
            <p className='text-xl mt-1 font-bold'>सोमवार व्रत आरती | ॐ जय शिव ओंकारा</p>
            <p className='mt-1 text-gray-600'>स पवित्र आरती से आपकी सभी मनोकामनाएं पूर्ण होंगी।</p>
        </div>
        </Link>
      </div>
      <div className='flex gap-3 mt-10'>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/Ram_Aarti.jpeg" alt="" />
            <p className='text-xl mt-1 font-bold'>राम आरती |</p>
            <p className='mt-1 text-gray-600'>राम आरती से घर में शांति, समृद्धि और सुख-शांति प्राप्त करने के उपाय यहां पढ़ें।</p>
        </div>
        </Link>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/saarda.png" alt="" />
            <p className='text-xl mt-1 font-bold'>शारदा जी की आरती</p>
            <p className='mt-1 text-gray-600'>शारदा जी की आरती का नियमित रूप से पाठ करने से व्यक्ति के जीवन में सृजनात्मकता और विवेक का विकास होता है।</p>
        </div>
        </Link>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/sanidev.png" alt="" />
            <p className='text-xl mt-1 font-bold'>शनिदेव जी की आरती</p>
            <p className='mt-1 text-gray-600'>शनिदेव की कृपा से कार्यों में सफलता और हर प्रकार की बाधाओं से छुटकारा मिलता है।</p>
        </div>
        </Link>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/sankarji.png" alt="" />
            <p className='text-xl mt-1 font-bold'>शिवरात्रि आरती</p>
            <p className='mt-1 text-gray-600'>शिवरात्रि आरती का गान जीवन के कठिन समय में भगवान शिव का आशीर्वाद प्राप्त करने और मानसिक शांति, सुख, और समृद्धि प्राप्त करने का माध्यम है। </p>
        </div>
        </Link>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/sarshawti.png" alt="" />
            <p className='text-xl mt-1 font-bold'>सरस्वती जी की आरती</p>
            <p className='mt-1 text-gray-600'>मां सरस्वती की कृपा से शिक्षा और बुद्धि के मार्ग में आने वाली बाधाएं दूर होती हैं।</p>
        </div>
        </Link>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/seetla.png" alt="" />
            <p className='text-xl mt-1 font-bold'>शीतला माता की आरती</p>
            <p className='mt-1 text-gray-600'>आरती का पाठ करने से भक्तों में आस्था और भक्ति की भावना बढ़ती है, और मानसिक शांति का अनुभव होता है।</p>
        </div>
        </Link>
        <Link to='/aambe'>
        <div className='w-[169px]'>
            <img className='w-[160px] rounded-lg'  src="./aarti/shrikrishn.png" alt="" />
            <p className='text-xl mt-1 font-bold'>श्रीकृष्ण जी की आरती</p>
            <p className='mt-1 text-gray-600'>श्रीकृष्ण आरती का नियमित पाठ भक्तों को उनकी कृपा प्राप्त करने, मन की शांति और जीवन में समृद्धि की ओर ले जाता है।</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Aarti
