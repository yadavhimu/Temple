import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Puja from './pages/Puja'
import Temple from './pages/Temple'
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
import Chalisadurga from './pages/Chalisadurga'
import Chalisasarshwati from './pages/Chalisasarshwati'
import Chalisaganesh from './pages/Chalisaganesh'
import Chalisakrishan from './pages/Chalisakrishan'
import Chalisashanidev from './pages/Chalisashanidev'
import Chalisasurya from './pages/Chalisasurya'
import Chalisahanuman from './pages/Chalisahanuman'
import Chalisaradha from './pages/Chalisaradha'
import Chalisashiv from './pages/Chalisashiv'
import Chalisakali from './pages/Chalisakali'
import Mantra from './pages/Mantra'
import Mantrachhath from './pages/Mantrachhath'
import Mantragovardhan from './pages/Mantragovardhan'
import Mantraganesh from './pages/Mantraganesh'
import Mantravishnu from './pages/Mantravishnu'
import Mantrashiv from './pages/Mantrashiv'
import Mantradurga from './pages/Mantradurga'
import Mantralakshmi from './pages/Mantralakshmi'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[4vw]'>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/puja' element={<Puja/>}/>
        <Route path='/temple' element={<Temple/>}/>
        <Route path='/contact' element={<Contact/>}/>
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
        <Route path='/mantra' element={<Mantra/>}/>
        <Route path='/chalisalakshmi' element={<Chalisalakshmi/>}/>
        <Route path='/chalisavishnu' element={<Chalisavishnu/>}/>
        <Route path='/chalisanavgrah' element={<Chalisanavgrah/>}/>
        <Route path='/chalisadurga' element={<Chalisadurga/>}/>
        <Route path='/chalisasarshwati' element={<Chalisasarshwati/>}/>
        <Route path='/chalisaganesh' element={<Chalisaganesh/>}/>
        <Route path='/chalisakrishan' element={<Chalisakrishan/>}/>
        <Route path='/chalisashanidev' element={<Chalisashanidev/>}/>
        <Route path='/chalisasurya' element={<Chalisasurya/>}/>
        <Route path='/chalisahanuman' element={<Chalisahanuman/>}/>
        <Route path='/chalisaradha' element={<Chalisaradha/>}/>
        <Route path='/chalisashiv' element={<Chalisashiv/>}/>
        <Route path='/chalisakali' element={<Chalisakali/>}/>
        <Route path='/mantrachhath' element={<Mantrachhath/>}/>
        <Route path='/mantragovardhan' element={<Mantragovardhan/>}/>
        <Route path='/mantraganesh' element={<Mantraganesh/>}/>
        <Route path='/mantravishnu' element={<Mantravishnu/>}/>
        <Route path='/mantrashiv' element={<Mantrashiv/>}/>
        <Route path='/mantradurga' element={<Mantradurga/>}/>
        <Route path='/mantralakshmi' element={<Mantralakshmi/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
