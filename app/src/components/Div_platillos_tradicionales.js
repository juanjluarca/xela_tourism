import Tarjetas from "./Tarjetas"
import "../styles/Div_platillos_tradicionales.css"

function Div_platillos_tradicionales() {
    
    const platillos_tradicionales = ["Pepián de pollo", "Jocón", "Caldo de panza", "Caldo de pollo", "Paches de papa"]

    const img_platillos = ["https://www.guatemala.com/fotos/2020/09/Pepian-885x500.jpg", "https://aprende.guatemala.com/wp-content/uploads/2016/10/giphy-3.gif", "https://aprende.guatemala.com/wp-content/uploads/2017/11/Receta-para-hacer-caldo-de-panza-guatemalteco.jpg", "https://cdn.kiwilimon.com/brightcove/8454/8454.jpg", "https://gastronomiadeguatemala.com/wp-content/uploads/2021/03/GG-Productores-14.jpg"]
    
    const callback_platillos_tradicionales = (arreglo) => {
        const nuevoArreglo = arreglo.map((platillos_tradicionales) => {
            return (
                <Tarjetas lugar={platillos_tradicionales} />
            )
        })
        return nuevoArreglo;
    }

    return (
        <div className="Div_platillos_tradicionales">
            <h2>Platillos tradicionales de Quetzaltenango</h2>
            <div className="div_tarjetas">
                {callback_platillos_tradicionales(platillos_tradicionales)}
            </div>
        </div>
    )
}

export default Div_platillos_tradicionales