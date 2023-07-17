import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram,faTwitter,faTiktok} from "@fortawesome/free-brands-svg-icons"


function Nav(props){
    return(
        <nav className="Nav">
            <button className={props.title==="inicio" ? "style_button marked":"style_button style_button_hover"} id="inicio" onClick={()=>!(props.title==="inicio")?window.location.href="./":""}>INICIO</button>
            <button className={props.title==="creadores" ? "style_button marked":"style_button style_button_hover"} id="creadores" onClick={()=>!(props.title==="creadores")?window.location.href="./creadores":""}>CREADORES</button>
            <img id="logotipo" src="/Kuality_Logo_png_Blanco.png" alt="Logotipo"></img>
            <FontAwesomeIcon className='socials' icon={faInstagram} onClick={() => {window.open("https://www.instagram.com/kualitycreatorgroup/")}}></FontAwesomeIcon>
            <FontAwesomeIcon className='socials' icon={faTwitter} onClick={() => {window.open("https://twitter.com/KualityCreators")}}></FontAwesomeIcon>
            <FontAwesomeIcon className='socials' icon={faTiktok} onClick={() => {window.open("https://www.tiktok.com/@kualitycreatorgroup?lang=es")}}></FontAwesomeIcon>
            <button className={props.title==="unete" ? "style_button marked":"style_button style_button_hover"} id="unete" onClick={()=>!(props.title==="unete")?window.location.href="./unete":""}>ÚNETE</button>
        </nav>
    );
}


export default Nav;