import Tarjetas from "./Tarjetas"
import "../styles/Div_postres_tradicionales.css"

function Div_postres_tradicionales() {

    const postres_tradicionales = ["Chuchitos", "Xecas", "Tamalitos de cambray", "Tamalitos de chipilin", `Rellenitos/
    Platanos`]

    const img_postres = ["https://growingupbilingual.com/wp-content/uploads/2021/09/shutterstock_1830356603-1-e1631240762643.jpg", "https://www.guatemala.com/fotos/2021/04/Xelapan-ofrece-sus-deliciosas-xecas-a-domicilio-en-Ciudad-de-Guatemala-abril-2021.jpg", "https://growingupbilingual.com/wp-content/uploads/2021/12/shutterstock_1738875728-720x720.jpg", "https://www.recetas-guatemala.com/base/stock/Recipe/71-image/71-image_web.jpg"]

    const callback_postres_tradicionales = (arreglo) => {
        const nuevoArreglo = arreglo.map((postres_tradicionales) => {
            return (
                <Tarjetas lugar={postres_tradicionales} />
            )
        })
        return nuevoArreglo;
    }
    return (
        <div className="Div_postres_tradicionales">
            <h2>Antojitos tradicionales de Quetzaltenango</h2>
            <div className="div_tarjetas">
                {callback_postres_tradicionales(postres_tradicionales)}
            </div>
        </div>
    )
}

export default Div_postres_tradicionales