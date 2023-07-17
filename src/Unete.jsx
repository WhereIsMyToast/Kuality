import './Unete.css'
import Nav from "./components/Nav"


function Inicio() {
  return (
    <div className='Unete'>
      <Nav title="unete"></Nav>
      <form>
        <label for="nombre">Nombre</label>
        <input type='text' id="nombre"/>
      </form>
    </div>
  )
}

export default Inicio
