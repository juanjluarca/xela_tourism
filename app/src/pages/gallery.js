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
        src: 'https://www.guatemala.com/fotos/2020/09/Lugares-turisticos-de-Quetzaltenango-Guatemala7-885x500.jpg',
        description: 'Museo del Ferrocarril de Los Altos',
    },
];

const Gallery = () => {
    return (
        <div>
            <Container>
                <h1>Galería de imágenes</h1>
                <div>
                    <button className="btn btn-primary">
                        <Link to="/principal">Ir a la página principal</Link>
                    </button>
                    <div className="image-container">

                        {images.map((image, index) => (
                            <Card key={index} className="image-card">
                                <Card.Img variant="top" src={image.src} />
                                <Card.Body>
                                    <Card.Text className='image-card-text'>{image.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Gallery;
