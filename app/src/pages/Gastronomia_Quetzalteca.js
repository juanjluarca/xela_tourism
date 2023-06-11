import Div_platillos_tradicionales from "../components/Div_platillos_tradicionales"
import Div_bebidas_tradicionales from "../components/Div_bebidas_tradicionales"
import Div_postres_tradicionales from "../components/Div_postres_tradicionales"
import Div_Restaurantes from "../components/Div_Restaurantes"
import "../styles/Gastronomia_Quetzalteca.css"

function Gastronomia_Quetzalteca() {

    return (
        <div className="principal">
            <button className="btn_regresar" href="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432.8 136v96H122.3l84.4-86.2-33.2-33.8L32 256l141.5 144 33.2-33.8-84.4-86.2H480V136h-47.2z"></path></svg></button>
            <Div_platillos_tradicionales/>
            <Div_bebidas_tradicionales/>
            <Div_postres_tradicionales/>
            <Div_Restaurantes/>
        </div>
    )
}

export default Gastronomia_Quetzalteca