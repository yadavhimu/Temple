import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Puja from './pages/Puja'
import Temple from './pages/Temple'
import Library from './pages/Library'
import Footer from './components/Footer'
import PremMandir from './pages/PremMandir'
import BankeBihari from './pages/BankeBihari'
import Kalabhairav from './pages/Kalabhairav'
import Takshkeshwer from './pages/Takshkeshwer'
import Glass from './pages/Glass'
import Chintaman from './pages/Chintaman'
import Iskcon from './pages/Iskcon'
import Vrindavan from './pages/Vrindavan'
import Aarti from './pages/Aarti'
import Aambe from './pages/Aambe'
import Bhai_dooj from './pages/Bhai_dooj'
import Dhanteras from './pages/Dhanteras'
import Diwali from './pages/Diwali'
import Ganesh from './pages/Ganesh'
import Govardhan from './pages/Govardhan'
import Hanuman from './pages/Hanuman'
import Kali from './pages/Kali'
import Vishnu from './pages/Vishnu'
import Jagdish from './pages/Jagdish'
import Suryadev from './pages/Suryadev'
import Kunj from './pages/Kunj'
import Lakshmi from './pages/Lakshmi'
import Shivfast from './pages/Shivfast'
import Chalisa from './pages/Chalisa'
import ScrollToTop from './components/ScrollToTop'
import Chalisalakshmi from './pages/Chalisalakshmi'
import Chalisavishnu from './pages/Chalisavishnu'
import Chalisanavgrah from './pages/Chalisanavgrah'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[2vw]'>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/puja' element={<Puja/>}/>
        <Route path='/temple' element={<Temple/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/premmandir' element={<PremMandir/>}/>
        <Route path='/bankebihari' element={<BankeBihari/>}/>
        <Route path='/kalabhairav' element={<Kalabhairav/>}/>
        <Route path='/takshkeshwer' element={<Takshkeshwer/>}/>
        <Route path='/glass' element={<Glass/>}/>
        <Route path='/chintaman' element={<Chintaman/>}/>
        <Route path='/iskcon' element={<Iskcon/>}/>
        <Route path='/vrindavan' element={<Vrindavan/>}/>
        <Route path='/aarti' element={<Aarti/>}/>
        <Route path='/aambe' element={<Aambe/>}/>
        <Route path='/bhaidooj' element={<Bhai_dooj/>}/>
        <Route path='/dhanteras' element={<Dhanteras/>}/>
        <Route path='/diwali' element={<Diwali/>}/>
        <Route path='/ganesh' element={<Ganesh/>}/>
        <Route path='/govardhan' element={<Govardhan/>}/>
        <Route path='/hanuman' element={<Hanuman/>}/>
        <Route path='/kali' element={<Kali/>}/>
        <Route path='/vishnu' element={<Vishnu/>}/>
        <Route path='/jagdish' element={<Jagdish/>}/>
        <Route path='/suryadev' element={<Suryadev/>}/>
        <Route path='/kunj' element={<Kunj/>}/>
        <Route path='/lakshmi' element={<Lakshmi/>}/>
        <Route path='/shivfast' element={<Shivfast/>}/>
        <Route path='/chalisa' element={<Chalisa/>}/>
        <Route path='/chalisalakshmi' element={<Chalisalakshmi/>}/>
        <Route path='/chalisavishnu' element={<Chalisavishnu/>}/>
        <Route path='/chalisanavgrah' element={<Chalisanavgrah/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
