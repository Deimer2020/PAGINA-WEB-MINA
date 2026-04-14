import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroCarousel from './components/sections/HeroCarousel'
import Programs from './components/sections/Programs'
import Values from './components/sections/Values'
import Nosotros from './components/pages/Nosotros'
import UltimasNovedades from './components/sections/UltimasNovedades'
import GaleriaFotos from './components/sections/GaleriaFotos'
import AFADEC from './components/sections/AFADEC'
import NuestraBanda from './components/sections/NuestraBanda'
import Elecciones from './components/sections/Elecciones'
import GobiernoEscolar from './components/pages/GobiernoEscolar'
import Perfiles from './components/pages/Perfiles'
import SitiosInteres from './components/sections/SitiosInteres'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroCarousel />
            <UltimasNovedades />
              <GaleriaFotos />
              <Elecciones></Elecciones>
              <AFADEC />
              <NuestraBanda />
              <Programs />
              <SitiosInteres></SitiosInteres>
              <Values />

            </>
          } />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path='/Gobierno-escolar' element={<GobiernoEscolar></GobiernoEscolar>} />
          <Route path="/perfiles" element={<Perfiles />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App