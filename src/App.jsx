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

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[2vw]'>
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
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
