import Tarjetas from "../components/Tarjetas"
import Div_info_basica from "../components/Div_info_basica"
import "../styles/Principal.css"


function Principal() {

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