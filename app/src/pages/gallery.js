import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../styles/index.css'
import { Link } from 'react-router-dom';

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
        description: 'Procesiones en Quetzaltenango',
    },
    {
        src: 'https://www.guatemala.com/fotos/201611/Casa-Encanto-2-885x500.jpg',
        description: 'Casa del Encanto',
    },
    {
        src: 'https://farm9.staticflickr.com/8008/7659214980_3630758485_b.jpg',
        description: 'Parque Benito Juárez',
    },
    {
        src: 'https://i.pinimg.com/originals/58/55/7c/58557c6e360bad5a3871842cbaeb24fd.jpg',
        description: 'Parque a Japón',
    },
    {
        src: 'https://stereo100.com.gt/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-08-at-12.06.28-PM.jpeg',
        description: 'Xelapan',
    },
    {
        src: 'https://www.metroproyectos.com/wp-content/uploads/2020/01/Interplaza_Xela_Metroproyectos_9.jpg',
        description: 'Centro Comercial Interplaza',
    },
    {
        src: 'https://www.asoc-animo.org/wp-content/uploads/2020/10/Universidad-Rafael-Landívar-1.jpg',
        description: 'Universidad Rafael Landívar',
    },
];

const Gallery = () => {
    return (
        <div className='body'>
            <Container>
                <h1 className='gallery-title'>Galería de imágenes</h1>
                <div>
                    <button className="boton">
                        <Link to="/principal"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.7em" width="1.7em" xmlns="http://www.w3.org/2000/svg"><path d="M432.8 136v96H122.3l84.4-86.2-33.2-33.8L32 256l141.5 144 33.2-33.8-84.4-86.2H480V136h-47.2z"></path></svg></Link>
                    </button>
                    <div className="image-container">

                        {images.map((image, index) => (
                            <Card key={index} className="image-card">
                                <Card.Img className='card-img' variant="top" src={image.src} />
                                <Card.Body className='card-body'>
                                    <Card.Text className='image-card-text'>{image.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default Gallery;
