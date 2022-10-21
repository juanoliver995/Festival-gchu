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
function App() {


  return (
    <div>
      <Nav />
      <Hero />
      <LineUp />
      <Slider />
      <Plano />
      <Entradas />
      <PuntoVenta />
      <Informacion />

      <Footer />
    </div>
  )
}

export default App
