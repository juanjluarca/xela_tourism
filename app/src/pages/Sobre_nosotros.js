import { Link } from 'react-router-dom';
import "../styles/Sobre_nosotros.css"

function Sobre_nosotros() {
    return (
        <div className="sobre_nosotros">
            <h2>Sobre nosotros</h2>
            <p>Somos un grupo de 4 amigos del primer año de la carrera de ingeniera en sistemas en la universidad Rafael Landívar del campus de Quetzaltenango.
                <br></br>Nuestra motivación para crear este sitio web es que Quetzaltenango es la segunda cuidad principal de Guatemala por lo tanto es un cuidad altamente turística, y muchas veces los turistas que nos visitan ya sean locales o extranjeros no conocen o no tiene una guía para conocer Quetzaltenango desde los lugares turísticos hasta su gastronomía y así fue como nació la idea de Xela Tourism.</p>
            <div className="nosotros">
                <ul>
                    <li><a target="_blank" href="https://github.com/GreciaFuent"><img src="https://avatars.githubusercontent.com/u/92612493?s=400&u=8378314388e5050cc3f0cc686a3227f7adb4cc08&v=4"></img><h3>Grecia Fuentes</h3></a></li>
                    <li><a target="_blank" href="https://github.com/WillyMaldonado"><img src="https://avatars.githubusercontent.com/u/124693730?v=4"></img><h3>Guillermo Maldonado</h3></a></li>
                    <li><a target="_blank" href="https://github.com/juanjluarca"><img src="https://avatars.githubusercontent.com/u/124697529?v=4"></img><h3>Juan Jose Luarca</h3></a></li>
                    <li><a target="_blank" href="https://github.com/Diego-gr-23"><img src="https://avatars.githubusercontent.com/u/124418381?v=4"></img><h3>Diego Gómez</h3></a></li>
                </ul>
            </div>
            <Link className="btn_regresar" to="/principal" ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432.8 136v96H122.3l84.4-86.2-33.2-33.8L32 256l141.5 144 33.2-33.8-84.4-86.2H480V136h-47.2z"></path></svg></Link>
            </div>
    )
}

export default Sobre_nosotros