import Tarjetas from "./Tarjetas"
import "../styles/Div_bebidas_tradicionales.css"

function Div_bebidas_tradicionales() {

    const bebidas_tradicionales = ["Atol de Elote", "Atol de masa", "Chocolate", "Ponche de Frutas", "Ponche"]

    const img_bebidas = ["https://www.recetas-guatemala.com/base/stock/Recipe/225-image/225-image_web.jpg", "https://www.cardamomo.news/__export/1669500732874/sites/debate/img/2022/11/26/atole_de_amaranto_1.png_1902800913.png", "https://d1nsq2txwd94q7.cloudfront.net/public/files/production/recipes/images/261/fancy/r_261_1550838395.jpg", "https://www.gob.mx/cms/uploads/article/main_image/103382/Ponche_navideno.jpeg", "https://www.guatemala.com/fotos/2020/05/Caldo-de-Frutas-885x500.jpg"]

    const callback_bebidas_tradicionales = (arreglo) => {
        const nuevoArreglo = arreglo.map((bebidas_tradicionales) => {
            return (
                <Tarjetas lugar={bebidas_tradicionales} />
            )
        })
        return nuevoArreglo;
    }
    return (
        <div className="Div_bebidas_tradicionales">
            <h2>Bebidas tradicionales de Quetzaltenango</h2>
            <div className="div_tarjetas">
                {callback_bebidas_tradicionales(bebidas_tradicionales)}
            </div>
        </div>
    )
}

export default Div_bebidas_tradicionales