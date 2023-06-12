import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/index.css'

const images = [
    {
        src: 'https://www.guatemala.com/fotos/201703/Parque-Central-Centro-America1-885x500.jpg',
        description: 'Parque Central de Quetzaltenango',
    },
    {
        src: 'https://dca.gob.gt/noticias-guatemala-diario-centro-america/wp-content/uploads/2022/01/05-DANILO-RAMÍREZ-1-1024x683.jpg',
        description: 'Vista de la Ciudad desde Cerro El Baúl',
    },
    {
        src: 'https://www.guatemala.com/fotos/2020/09/Lugares-turisticos-de-Quetzaltenango-Guatemala1-885x500.jpg',
        description: 'Fuentes Georginas',
    },
    {
        src: 'https://www.guatemala.com/fotos/2019/01/Tunel-de-Santa-Maria-885x500.jpg',
        description: 'Túnel de Santa María',
    },
    {
        src: 'https://www.guatemala.com/fotos/2019/02/Ermita-en-Quetzaltenango-885x500.jpg',
        description: 'Ermita de La Concepción, Salcajá',
    },
    {
        src: 'https://www.guatemala.com/fotos/2020/09/Lugares-turisticos-de-Quetzaltenango-Guatemala7-885x500.jpg',
        description: 'Museo del Ferrocarril de Los Altos',
    },
    {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/MarioCamposecoStadium.JPG/1200px-MarioCamposecoStadium.JPG',
        description: 'Estadio Mario Camposeco',
    },
    {
        src: 'https://www.prensalibre.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-27-at-22.58.57-1.jpeg?quality=52',
        description: 'Celebración por la Sexta Luna',
    },
    {
        src: 'https://www.guatevalley.com/photo/photo_a1/1433/AcL87fs1IPxN5DTIUZOg.jpg',
        description: 'Teatro Municipal de Quetzaltenango',
    },
    {
        src: 'https://www.guatemala.com/fotos/2019/04/Museos-en-xela-885x500.jpg',
        description: 'Museo Ixkik del Traje Maya',
    },
    {
        src: 'https://viajerosocultos.com/wp-content/uploads/2022/03/49219563493_f72b7830d6_o.jpg',
        description: 'Volcán de Santa María',
    },
    {
        src: 'https://licoresdeguatemala.com/wp-content/uploads/2020/09/2-1.jpg',
        description: 'Casa Botrán',
    },
    {
        src: 'https://aprende.guatemala.com/wp-content/uploads/2016/11/Foto-de-portada-Aprende-2.jpg',
        description: 'Volcán de Cerro Quemado',
    },
    {
        src: 'https://crnnoticias.com/wp-content/uploads/2022/11/CarlosVentura-Templo-Minerva2.jpg',
        description: 'Templo Minerva',
    },
    {
        src: 'https://lavozdexela.com/wp-content/uploads/2022/02/IMG-20220224-WA0000-1200x800_c.jpg',
        description: 'Procesiones en quetzaltenango',
    },
];

const Principal = () => {
    return (
        <div className='body'>
            <h1 className='gallery-title'>Galería de imágenes</h1>
            <div className='carousel-container'>
                <Carousel autoPlay interval={4000} infiniteLoop showThumbs={false}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image.src} description={image.description} style={{ maxHeight: '300px', objectFit: 'cover' }} />
                            {/* <p className="legend">{image.alt}</p> */}
                        </div>
                    ))}
                </Carousel>
                <button class="boton">
                    <a href='/gallery'>Ir a la Galería</a>
                </button>
            </div>
        </div>
    );
};

export default Principal;
