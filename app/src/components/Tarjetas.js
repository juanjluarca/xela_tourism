import "../styles/Tarjeta.css"

function Tarjetas(props) {

    const { lugar , img } = props
    
    return (
        <div className="tarjeta"><button className="btn"><img src={img}></img><h2>{lugar}</h2></button></div>
    )
    
}


export default Tarjetas