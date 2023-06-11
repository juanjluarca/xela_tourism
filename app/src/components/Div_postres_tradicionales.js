import Tarjetas from "./Tarjetas"
import "../styles/Div_postres_tradicionales.css"

function Div_postres_tradicionales() {


    const postres_tradicionales = [
        {
            name: "Chuchitos",
            img: "https://growingupbilingual.com/wp-content/uploads/2021/09/shutterstock_1830356603-1-e1631240762643.jpg"
        },
        {
            name: "Shecas",
            img: "https://andreabakerys.com/wp-content/uploads/2022/06/43-4.jpg"
        },
        {
            name: "Tamalitos de cambray",
            img: "https://growingupbilingual.com/wp-content/uploads/2021/12/shutterstock_1738875728-720x720.jpg"
        },
        {
            name: "Tamalitos de chipilin",
            img: "https://www.la-cocina-mexicana.com/base/stock/Recipe/493-image/493-image_web.jpg"
        },
        {
            name: "Rellenitos / Platanos",
            img: "https://chefchapin.com/wp-content/uploads/2019/01/rellenitos-de-platano-500x500.jpg"
        }
    ]


    function components() {
        return (
            <>
            {
                postres_tradicionales.map(postres => {
                    return <Tarjetas lugar={postres.name} img={postres.img}/>
                })
            }
            </>
        )
    }

    const abrir = ()=> {
        const div_info = document.querySelector(".div_info_postres")
        div_info.style.display = "flex"
    }

    const cerrar = ()=> {
        const div_info = document.querySelector(".div_info_postres")
        div_info.style.display = "none"
    }



    return (
        <div className="Div_postres_tradicionales">
            <h2>Antojitos tradicionales de Quetzaltenango</h2>
            <div className="div_tarjetas">
                {components()}
            </div>
            <button className="btn_mas_info" onClick={abrir}>Más Info</button>
            <div className="div_info_postres">
                <svg className="close" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={cerrar}>
                <path d="M16.5 0.25C13.2861 0.25 10.1443 1.20305 7.47199 2.98862C4.79969 4.77419 2.71689 7.31209 1.48697 10.2814C0.257041 13.2507 -0.0647633 16.518 0.562247 19.6702C1.18926 22.8224 2.73692 25.7179 5.00952 27.9905C7.28213 30.2631 10.1776 31.8108 13.3298 32.4378C16.482 33.0648 19.7493 32.743 22.7186 31.513C25.6879 30.2831 28.2258 28.2003 30.0114 25.528C31.797 22.8557 32.75 19.7139 32.75 16.5C32.75 14.366 32.3297 12.2529 31.5131 10.2814C30.6964 8.30985 29.4994 6.51847 27.9905 5.00952C26.4815 3.50056 24.6902 2.3036 22.7186 1.48696C20.7471 0.670319 18.634 0.25 16.5 0.25ZM20.9038 18.5963C21.0561 18.7473 21.177 18.927 21.2595 19.1251C21.342 19.3231 21.3844 19.5355 21.3844 19.75C21.3844 19.9645 21.342 20.1769 21.2595 20.3749C21.177 20.573 21.0561 20.7527 20.9038 20.9038C20.7527 21.0561 20.573 21.177 20.3749 21.2594C20.1769 21.3419 19.9645 21.3844 19.75 21.3844C19.5355 21.3844 19.3231 21.3419 19.1251 21.2594C18.927 21.177 18.7473 21.0561 18.5963 20.9038L16.5 18.7913L14.4038 20.9038C14.2527 21.0561 14.073 21.177 13.8749 21.2594C13.6769 21.3419 13.4645 21.3844 13.25 21.3844C13.0355 21.3844 12.8231 21.3419 12.6251 21.2594C12.427 21.177 12.2473 21.0561 12.0963 20.9038C11.9439 20.7527 11.8231 20.573 11.7406 20.3749C11.6581 20.1769 11.6156 19.9645 11.6156 19.75C11.6156 19.5355 11.6581 19.3231 11.7406 19.1251C11.8231 18.927 11.9439 18.7473 12.0963 18.5963L14.2088 16.5L12.0963 14.4038C11.7903 14.0978 11.6184 13.6827 11.6184 13.25C11.6184 12.8173 11.7903 12.4022 12.0963 12.0963C12.4023 11.7903 12.8173 11.6184 13.25 11.6184C13.6827 11.6184 14.0978 11.7903 14.4038 12.0963L16.5 14.2088L18.5963 12.0963C18.9023 11.7903 19.3173 11.6184 19.75 11.6184C20.1827 11.6184 20.5978 11.7903 20.9038 12.0963C21.2098 12.4022 21.3817 12.8173 21.3817 13.25C21.3817 13.6827 21.2098 14.0978 20.9038 14.4038L18.7913 16.5L20.9038 18.5963Z" fill="black"/>
                </svg>    
                <h2>Recomendaciones</h2>
                <p className="parrafo">La gastronomía quetzalteca se caracteriza por sus exquisito antojitos que forman parte de los hogares quetzaltecos, por eso te recomendamos estos lugares para que los disfrutes. </p>
                <ul>
                    <li><a target="_blank" href="https://www.google.com/maps/place/Xelapan/@14.8342283,-91.5367764,15z/data=!4m10!1m2!2m1!1sxelapan!3m6!1s0x858ebd5784f2316b:0x40ae46ede421eed0!8m2!3d14.8342283!4d-91.518752!15sCgd4ZWxhcGFuIgOIAQFaCSIHeGVsYXBhbpIBBmJha2VyeeABAA!16s%2Fg%2F1hc77k4_k?entry=ttu">Xelapan </a></li> 
                    <li><a target="_blank" href="https://www.google.com/maps/place/Antojitos+Do%C3%B1a+Tere/@14.8656452,-91.5190987,17z/data=!3m1!4b1!4m6!3m5!1s0x858ea29f36a488eb:0x96a8db5544d2dcf2!8m2!3d14.86564!4d-91.5165238!16s%2Fg%2F11dylrd_gz?entry=ttu">Antojitos Doña Tere</a></li>    
                    <li><a target="_blank" href="https://www.google.com/maps/place/San+Mart%C3%ADn+Xela+Minerva/@14.8453086,-92.103412,10z/data=!4m10!1m2!2m1!1sla+sanmartin+quetzaltengo!3m6!1s0x858e9803eaf2d441:0x85e94fb4da7e8f07!8m2!3d14.8453086!4d-91.5266298!15sChxsYSBzYW4gbWFydGluIHF1ZXR6YWx0ZW5hbmdvIgOIAQFaGyIZc2FuIG1hcnRpbiBxdWV0emFsdGVuYW5nb5IBCnJlc3RhdXJhbnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTXdkMDQyYzJOQkVBReABAA!16s%2Fg%2F11cmckk6dc?entry=ttu">San Martín</a></li>
                    <li><a target="_blank" href="https://www.google.com/maps/place/Mercado+El+Terminal/@14.8460391,-91.535203,17z/data=!4m14!1m7!3m6!1s0x858e981b69613fd3:0x5776358a576f5dcb!2sTerminal+Minerva!8m2!3d14.8460339!4d-91.5326281!16s%2Fg%2F11g9mhlk51!3m5!1s0x858e981b6eaaaaab:0xa5fe5b24c6d3347f!8m2!3d14.8473189!4d-91.5320598!16s%2Fg%2F11txv1qzgd?entry=ttu">Mercado La Terminal</a></li>
                    <li><a target="_blank" href="https://www.google.com/maps/place/Restaurante+El+Callej%C3%B3n+de+Tecp%C3%A1n/@14.8472005,-91.5258613,17z/data=!3m1!4b1!4m6!3m5!1s0x858e98041d09c7bb:0xe63e04eaffdd8f4a!8m2!3d14.8472005!4d-91.5258613!16s%2Fg%2F11b7lq3wxv?entry=ttu">El callejón de Tecpán</a></li>  
                    <li><a target="_blank" href="https://www.google.com/maps/place/Parque+a+Centro+Am%C3%A9rica/@14.8342925,-91.518556,19z/data=!4m6!3m5!1s0x858ebd5686b0e9cf:0x5f7c0fe070703abb!8m2!3d14.8344623!4d-91.5182905!16s%2Fg%2F1tgmwm88?entry=ttu">Parque central</a></li>
                    <li><a target="_blank" href="https://www.google.com/maps/place/Parque+a+Centro+Am%C3%A9rica/@14.8342925,-91.518556,19z/data=!4m6!3m5!1s0x858ebd5686b0e9cf:0x5f7c0fe070703abb!8m2!3d14.8344623!4d-91.5182905!16s%2Fg%2F1tgmwm88?entry=ttu">Mercado del parque central </a></li>
                    <li><a target="_blank" href="https://www.google.com/maps/place/Parque+a+Benito+Ju%C3%A1rez/@14.8437461,-91.5205884,18z/data=!4m6!3m5!1s0x858ea2aa612997b1:0xf758075be817b346!8m2!3d14.8437176!4d-91.5199661!16s%2Fg%2F1tnqh9wg?entry=ttu">Parque Benito Juárez</a></li>
                    <li><a target="_blank" href="https://www.google.com/maps/place/Chocolate+Do%C3%B1a+Pancha/@14.8321515,-91.5242439,18.25z/data=!4m6!3m5!1s0x858e97fc43718e0d:0xe01906987face16f!8m2!3d14.832504!4d-91.524181!16s%2Fg%2F113gj71l7?entry=ttu">Chocolatería Doña Pancha</a></li>
                    <li><a target="_blank" href="https://www.google.com/maps/place/Parque+El+Calvario,+Quezaltenango/@14.8367966,-91.5276535,17z/data=!3m1!4b1!4m6!3m5!1s0x858e97fedaca8bd1:0xbb4bd510a5e53372!8m2!3d14.8366964!4d-91.5251746!16s%2Fg%2F11cknfszzn?entry=ttu">Parque el calvario </a></li>
                    <li><a target="_blank" href="https://www.google.com/maps/place/La+Vienesa+Xela+Center/@14.8486414,-91.5270206,17z/data=!3m1!4b1!4m6!3m5!1s0x858e9920dd0265b3:0xdceb9b795a437de6!8m2!3d14.8486362!4d-91.5244457!16s%2Fg%2F11g19qs9sp?entry=ttu">La Vienesa</a></li>  
                    <li><a target="_blank" href="https://www.google.com/maps/place/Teatro+Municipal+de+Quetzaltenango/@14.8367197,-91.5228969,17z/data=!4m14!1m7!3m6!1s0x858ebd000a9acb69:0x6b2372db0e73f947!2sEl+Teatrito!8m2!3d14.8367146!4d-91.5182835!16s%2Fg%2F11g045mqs2!3m5!1s0x858ebd5503f1a61d:0x6d5cffdaefa5464e!8m2!3d14.8377734!4d-91.5189518!16s%2Fg%2F121zccg3?entry=ttu">El teatro</a></li>  
                </ul>
            </div>
        </div>
    )
}

export default Div_postres_tradicionales