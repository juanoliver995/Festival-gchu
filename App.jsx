import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import LineUp from './components/LineUp'
import Plano from './components/Plano'
import Entradas from './components/Entradas'
import PuntoVenta from './components/PuntoVenta'
import Informacion from './components/Informacion'
import Footer from './components/Footer'
import Slider from './components/Slider'
import MainSponsor from './components/MainSponsor'
import Vips from './components/Vips'
import ReyMomo from './components/ReyMomo'

function App() {


  return (
    <div>
      <Nav />
      <Hero />
      <LineUp />
      <Slider />
      <MainSponsor />
      <Plano />
      <Entradas />
      <PuntoVenta />
      <Vips />
      <ReyMomo />
      <Informacion />
      <Footer />
    </div>
  )
}

export default App
