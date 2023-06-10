import "../styles/Tarjeta.css"

function Tarjetas(props) {

    const { lugar , url_img } = props
    
    return (
        <div className="tarjeta"><button className="btn"><img src={url_img}></img><h2>{lugar}</h2></button></div>
    )
    
}


export default Tarjetas