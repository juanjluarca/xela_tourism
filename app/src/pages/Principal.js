import Tarjetas from "../components/Tarjetas"
import Div_info_basica from "../components/Div_info_basica"
import Nav from "../components/Nav"
import "../styles/Principal.css"


function Principal() {

    const abrir =()=> {
        const nav = document.querySelector("nav")
        nav.style.display = "block"
    }


    const lugares = ["Platanos del teatro", "Cheveres del raulin", "Tobitos", "Atoles del parque"]

    const callbackMap = (arreglo) => {
        const nuevoArreglo = arreglo.map((lugares) => {
            return (
                <Tarjetas lugar={lugares} />
            )
        })
        return nuevoArreglo;
    }

    return (
        <div className="principal">
            <svg className="menu" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={abrir}>
            <path d="M24 32H0V26.6667H24V32ZM48 18.6667H0V13.3333H48V18.6667ZM48 5.33333H24V0H48V5.33333Z" fill="white"/>
            </svg>
            <Nav/>


            <h2>Gastronomia Quetzalteca</h2>
            <div className="div_tarjetas">
                {callbackMap(lugares)}
            </div>
            <button className="btn_moreInfo"><a href="/gastronomia_Quetzalteca">Ver más</a></button>

            <div className="info_practica">
                <Div_info_basica/>
            </div>
        
        </div>
    )
}

export default Principal