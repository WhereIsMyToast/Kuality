import './Inicio.css'
import Nav from "./components/Nav"
import Slogan from "./components/Slogan"

function Inicio() {
  return (
    <div className='Inicio'>
      <Nav title="inicio"></Nav>
      <Slogan></Slogan>
    </div>
  )
}

export default Inicio
