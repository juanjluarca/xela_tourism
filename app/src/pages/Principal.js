import Tarjetas from "../components/Tarjetas"
import Div_info_basica from "../components/Div_info_basica"
import Nav from "../components/Nav"
import "../styles/Principal.css"


function Principal() {


    const lugares = [
        {
            name: "Platanos Fritos",
            img: "https://scontent.fgua9-1.fna.fbcdn.net/v/t1.6435-9/126990689_1532786586909756_8168370132721591089_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=n-N3KjOBCH8AX9x8BxC&_nc_ht=scontent.fgua9-1.fna&oh=00_AfCN6hj9YmhI7s_tp8kJPlXn9frRaOdLXhfAC5Q5AQX_KA&oe=64ADA427"
        },
        {
            name: "Cheveres",
            img: "https://scontent.fgua9-2.fna.fbcdn.net/v/t39.30808-6/300782995_486693410130672_90583339016234205_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4Qiw7Vr6PccAX9vPKTV&_nc_ht=scontent.fgua9-2.fna&oh=00_AfCEK78lHkWhQQHQXhOI5PnCJDIaD0azmq0Mr03y18oqyg&oe=648C1644"
        },
        {
            name: "Tobitos",
            img: "https://scontent.fgua3-3.fna.fbcdn.net/v/t39.30808-6/301373232_503365361791553_5461390449407846839_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tbJ_PBE47LwAX_d3Mcx&_nc_ht=scontent.fgua3-3.fna&oh=00_AfBjQwPast6E3oYgp3Ok5Jm-Zks42QSU9Omm8ArdzvWLNQ&oe=648A9A4A"
        },
        {
            name: "Atoles del parque",
            img: "https://tecolotito.elsiglodetorreon.com.mx/i/2016/02/793793.jpeg"
        }
    ]

    function components() {
        return (
            <>
            {
                lugares.map(bebida => {
                    return <Tarjetas lugar={bebida.name} img={bebida.img}/>
                })
            }
            </>
        )
    }


    const abrir =()=> {
        const nav = document.querySelector("nav")
        nav.style.display = "block"
    }


    return (
        <div className="principal">
            <svg className="menu" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={abrir}>
            <path d="M24 32H0V26.6667H24V32ZM48 18.6667H0V13.3333H48V18.6667ZM48 5.33333H24V0H48V5.33333Z" fill="white"/>
            </svg>
            <Nav/>


            <h2>Gastronomia Quetzalteca</h2>
            <div className="div_tarjetas">
                {components()}
            </div>
            <button className="btn_moreInfo"><a href="/gastronomia_Quetzalteca">Ver más</a></button>

            <div className="info_practica">
                <Div_info_basica/>
            </div>
        
        </div>
    )
}

export default Principal