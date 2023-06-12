import Tarjetas from "./Tarjetas"
import "../styles/Div_platillos_tradicionales.css"

function Div_platillos_tradicionales() {
     

    const platillos_tradicionales = [
        {
            name: "Pepián de pollo",
            img : "https://growingupbilingual.com/wp-content/uploads/2021/09/shutterstock_1846035454-2-scaled.jpg"
        },
        {
            name: "Jocón",
            img : "https://polloreyalimentos.com/wp-content/uploads/2022/09/Jocon_De_Pollo_Criollo_2-819x1024.jpg"
        },
        {
            name: "Caldo de panza",
            img : "https://imperiochapin.com/wp-content/uploads/2020/08/Receta-de-Caldo-de-Panza-guatemalteco.jpg"
        },
        {
            name: "Caldo de pollo",
            img : "https://experienciabantrab.com/expbt_media/2021/06/AE0236-foto-entrenubes2.jpg"
        },
        {
            name: "Paches de papa",
            img : "https://pbs.twimg.com/media/COEE5byVEAAAoQ6?format=jpg&name=4096x4096"
        }
    ]

    function components() {
        return (
            <>
            {
                platillos_tradicionales.map(comida => {
                    return <Tarjetas lugar={comida.name} img={comida.img}/>
                })
            }
            </>
        )
    }

    const abrir = ()=> {
        const div_info = document.querySelector(".div_info_platillos")
        div_info.style.display = "flex"
    }

    const cerrar = ()=> {
        const div_info = document.querySelector(".div_info_platillos")
        div_info.style.display = "none"
    }

    
    return (
        <div className="Div_platillos_tradicionales">
            <h2>Platillos tradicionales de Quetzaltenango</h2>
            <div className="div_tarjetas">
                {components()}
            </div>
            <button className="btn_mas_info" onClick={abrir}>Más Info</button>
            <div className="div_info_platillos">
                <svg className="close" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={cerrar}>
                <path d="M16.5 0.25C13.2861 0.25 10.1443 1.20305 7.47199 2.98862C4.79969 4.77419 2.71689 7.31209 1.48697 10.2814C0.257041 13.2507 -0.0647633 16.518 0.562247 19.6702C1.18926 22.8224 2.73692 25.7179 5.00952 27.9905C7.28213 30.2631 10.1776 31.8108 13.3298 32.4378C16.482 33.0648 19.7493 32.743 22.7186 31.513C25.6879 30.2831 28.2258 28.2003 30.0114 25.528C31.797 22.8557 32.75 19.7139 32.75 16.5C32.75 14.366 32.3297 12.2529 31.5131 10.2814C30.6964 8.30985 29.4994 6.51847 27.9905 5.00952C26.4815 3.50056 24.6902 2.3036 22.7186 1.48696C20.7471 0.670319 18.634 0.25 16.5 0.25ZM20.9038 18.5963C21.0561 18.7473 21.177 18.927 21.2595 19.1251C21.342 19.3231 21.3844 19.5355 21.3844 19.75C21.3844 19.9645 21.342 20.1769 21.2595 20.3749C21.177 20.573 21.0561 20.7527 20.9038 20.9038C20.7527 21.0561 20.573 21.177 20.3749 21.2594C20.1769 21.3419 19.9645 21.3844 19.75 21.3844C19.5355 21.3844 19.3231 21.3419 19.1251 21.2594C18.927 21.177 18.7473 21.0561 18.5963 20.9038L16.5 18.7913L14.4038 20.9038C14.2527 21.0561 14.073 21.177 13.8749 21.2594C13.6769 21.3419 13.4645 21.3844 13.25 21.3844C13.0355 21.3844 12.8231 21.3419 12.6251 21.2594C12.427 21.177 12.2473 21.0561 12.0963 20.9038C11.9439 20.7527 11.8231 20.573 11.7406 20.3749C11.6581 20.1769 11.6156 19.9645 11.6156 19.75C11.6156 19.5355 11.6581 19.3231 11.7406 19.1251C11.8231 18.927 11.9439 18.7473 12.0963 18.5963L14.2088 16.5L12.0963 14.4038C11.7903 14.0978 11.6184 13.6827 11.6184 13.25C11.6184 12.8173 11.7903 12.4022 12.0963 12.0963C12.4023 11.7903 12.8173 11.6184 13.25 11.6184C13.6827 11.6184 14.0978 11.7903 14.4038 12.0963L16.5 14.2088L18.5963 12.0963C18.9023 11.7903 19.3173 11.6184 19.75 11.6184C20.1827 11.6184 20.5978 11.7903 20.9038 12.0963C21.2098 12.4022 21.3817 12.8173 21.3817 13.25C21.3817 13.6827 21.2098 14.0978 20.9038 14.4038L18.7913 16.5L20.9038 18.5963Z" fill="black"/>
                </svg> 
                <h2>Recomendaciones</h2>
                <p className="parrafo">Para vivir una experiencia culinaria tradicional y que sientas los verdaderos sabores de Quetzaltenango te recomendamos que visites estos famosos lugares para degustarlos.</p>
                <ul>
                    <li><a target="_blank" href="https://www.google.com/maps/place/Albamar+Tobogan/@14.8439588,-91.5168441,17.25z/data=!4m6!3m5!1s0x858ea2ab9a65d7a7:0x5b25e677712d8d55!8m2!3d14.8440223!4d-91.5169081!16s%2Fg%2F11b64hd9nf?entry=ttu">Albamar</a></li>    
                    <li><a target="_blank" href="https://www.google.com/maps/place/Restaurante+El+Callej%C3%B3n+de+Tecp%C3%A1n/@14.8472005,-91.5258613,17z/data=!3m1!4b1!4m6!3m5!1s0x858e98041d09c7bb:0xe63e04eaffdd8f4a!8m2!3d14.8472005!4d-91.5258613!16s%2Fg%2F11b7lq3wxv?entry=ttu">El callejón de Tecpán</a></li>    
                    <li><a target="_blank" href="https://www.google.com/maps/place/Restaurante+Flor+Maya+Zona+1/@14.8371311,-91.523879,17z/data=!3m1!4b1!4m6!3m5!1s0x858e97fea31a96eb:0x6c69974edbebb788!8m2!3d14.8371311!4d-91.523879!16s%2Fg%2F11c708q4lc?entry=ttu">Restaurante Flor Maya</a></li>    
                    <li><a target="_blank" href="https://www.google.com/maps/place/Restaurante+T%C3%ADpico+La+Fuente/@14.833985,-91.519401,17z/data=!3m1!4b1!4m6!3m5!1s0x858ebd54f917d83d:0x14347fc7890fb29d!8m2!3d14.833985!4d-91.519401!16s%2Fg%2F11cp7r126h?entry=ttu">Restaurante típico La Fuente</a></li>
                    <li><a target="_blank" href="https://www.google.com/maps/place/Restaurante+Tu+Casa+Xela/@14.8500374,-91.5346326,17z/data=!3m1!4b1!4m6!3m5!1s0x858ea2a994bb49cb:0xb7ab95f147aef1eb!8m2!3d14.8500374!4d-91.5346326!16s%2Fg%2F11c7vvbzbk?entry=ttu">Restaurante Tu casa Xela </a></li>    
                    <li><a target="_blank" href="https://www.google.com/maps/place/Xelapan/@14.8342283,-91.5367764,15z/data=!4m10!1m2!2m1!1sxelapan!3m6!1s0x858ebd5784f2316b:0x40ae46ede421eed0!8m2!3d14.8342283!4d-91.518752!15sCgd4ZWxhcGFuIgOIAQFaCSIHeGVsYXBhbpIBBmJha2VyeeABAA!16s%2Fg%2F1hc77k4_k?entry=ttu">Xelapan </a></li>    
                    <li><a target="_blank" href="https://www.google.com/maps/place/PATSY/@14.8335257,-91.5235712,17z/data=!3m1!4b1!4m6!3m5!1s0x858ebdd47c7240ef:0x30af6ebbef439dde!8m2!3d14.8335206!4d-91.5189578!16s%2Fg%2F11tcz33v2p?entry=ttu">Patzy</a></li>    
                </ul>
            </div>
        </div>
    )

}

export default Div_platillos_tradicionales