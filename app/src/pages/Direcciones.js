import React from 'react';
import Carousel from '../components/ToMaps';
import { useNavigate } from 'react-router';

const Direcciones = () => {

    const navigate = useNavigate();

  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/3/3a/Teatro_Municipal_de_Quetzaltenango.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Parque_Central_de_Quetzaltenango%2C_Guatemala.jpg/1280px-Parque_Central_de_Quetzaltenango%2C_Guatemala.jpg',
    'https://www.soy502.com/sites/default/files/styles/mobile_full_node/public/2020/Nov/16/resbaladerogigante_cerroelbaul_quetzaltenango_soy502.jpg',
    'https://aprende.guatemala.com/wp-content/uploads/2018/05/Volc%C3%A1n-Zunil-en-Guatemala.jpg',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b8/02/93/fuentes-georginas.jpg?w=1200&h=1200&s=1',
    'https://www.guatevalley.com/photo/photo_a1/1443/cQfmQ3dvWJadMSYgjpjM.jpg'
  ];

  const names = ['Teatro municipal', 'Parque central de quetzaltenango', 'Cerro el baul','Volcan de zunil','Fuentes georginas','Iglesia ermita de la concepcion quetzaltenango'];

  const geo = [
    {lat: 14.837734, alt: -91.518938}, 
    {lat: 14.834711, alt: -91.518120}, 
    {lat: 14.833569, alt: -91.500019}, 
    {lat: 14.733167, alt: -91.449743}, 
    {lat: 14.749915, alt: -91.480346}, 
    {lat: 14.881506, alt: -91.459859}
  ]

  return (
    <div className="app">
    <div style={{marginLeft: "30vw"}}>
       <font face="Helveltica"><h1>Lugares turisticos de quetzaltenango</h1></font>
     </div>
      <div className="carousel-container">
        <Carousel
          images={images}
          names={names}
          geo={geo}
          imageWidth="1200px"
          imageHeight="600px"
          imagePosition="relative"
        />
      </div>
      <button className="btn btn-lg btn-block btn-outline-warning" type="button" onClick={() => {navigate("/")}}>Ir a la pagina principal</button>
            
      <style>{`
        .app {
          background-color: black;
          color: white;
          padding: 20px;
        }

        .heading {
          text-align: center;
        }

        .carousel-container {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Direcciones;

