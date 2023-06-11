import Tarjetas from "./Tarjetas"
import "../styles/Div_Restaurantes.css"

function Div_Restaurantes() {

    const restaurantes = ["Tertulianos", "Don Carlos", "Callejo de tecpan", "La comadre", "Albamar", "Xelapan", "Pasaje Enriques", "El rincon Uruguayo", "Brule", "Cardinali"]

    const img_restaurantes = ["https://scontent.fgua3-3.fna.fbcdn.net/v/t31.18172-8/11427854_867550019992382_1876334376777637540_o.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_ohc=YzRZMrUidhUAX-UFzbb&_nc_ht=scontent.fgua3-3.fna&oh=00_AfC78FSJa2wSZBXN8WC5KBI41Z_9k0XRxuf6ZoQ4aVZxKA&oe=64AC9FA1", "https://scontent.fgua3-3.fna.fbcdn.net/v/t1.6435-9/48424836_790622921281986_4490759668020281344_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=a26aad&_nc_ohc=JHvlQ487XJsAX_XYKCM&_nc_ht=scontent.fgua3-3.fna&oh=00_AfBdDs7b9hXqB9XiRlvtRKZhM73GgTFl_ktgD6pcgxvwzA&oe=64ACB9FF", "https://scontent.fgua9-2.fna.fbcdn.net/v/t39.30808-6/328460371_644505490765101_3837116547108442020_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=174925&_nc_ohc=gy0e_MXVockAX-PuAVV&_nc_ht=scontent.fgua9-2.fna&oh=00_AfCld1Tvtj7FMuMyP1EGaS7rYOGccWi4F6_wYLn7OM2lOg&oe=648A1260", "https://scontent.fgua9-1.fna.fbcdn.net/v/t39.30808-6/273211569_503327441315281_4653114423571608801_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SnZEj3eGO6gAX82wPKZ&_nc_ht=scontent.fgua9-1.fna&oh=00_AfBGdJj10FrtkRb6jQBmMAuUerFQvVL3ZN6c6U5KxymJAw&oe=64895004", "https://sisnovasa.com/wp-content/uploads/2013/08/albamar.png", "https://scontent.fgua3-5.fna.fbcdn.net/v/t1.6435-9/122147089_3658465130844137_1841212550470233168_n.png?stp=dst-png_p526x296&_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=F2DTUG8PD2oAX-Dk8bV&_nc_ht=scontent.fgua3-5.fna&oh=00_AfBuhQTvpOxdWWQ9ojBHBL1VWrF51tIdOWNtb1tk3Nm5QA&oe=64AC8DC6", ""]

    const callback_restaurantes = (arreglo) => {
        const nuevoArreglo = arreglo.map((restaurantes) => {
            return (
                <Tarjetas lugar={restaurantes} />
            )
        })
        return nuevoArreglo;
    }
    return (
        <div className="Div_Restaurantes">
            <h2>Restaurantes populares de  Quetzaltenango</h2>
            <div className="div_tarjetas">
                {callback_restaurantes(restaurantes)}
            </div>
        </div>
    )
}

export default Div_Restaurantes