import React, { useState, useEffect } from 'react';

const Carousel = ({ images, names, imageWidth, imageHeight, imagePosition, geo }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Cambia la imagen cada 5 segundos

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  const currentImageName = names[currentImageIndex]; // Obtiene el nombre de la imagen actual

  const imageStyle = {
    width: imageWidth,
    height: imageHeight,
    position: imagePosition
  };

  return (
    <div className="carousel">
      <button className="previous-button" onClick={handlePrevious}>
        Anterior
      </button>
      <div className="image-container">
        
        <a href={`https://www.google.com/maps/dir/?api=1&destination=${geo[currentImageIndex].lat},${geo[currentImageIndex].alt}`} target='_blank'>
          <img
            src={images[currentImageIndex]}
            alt="Carousel Image"
            className="carousel-image"
            style={imageStyle}
          />
        </a>
        <p className="image-name">{currentImageName}</p>
      </div>
      <button className="next-button" onClick={handleNext}>
        Siguiente
      </button>
      <style>{`
        .carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .previous-button,
        .next-button {
          top: 50%;
          transform: translateY(-50%);
          background-color: transparent;
          border: none;
          font-size: 18px;
          padding: 8px;
          cursor: pointer;
          color: white;
          font-family: Helveltica;
        }

        .previous-button {
          left: 150px;
        }

        .next-button {
          right: 50px;
        }

        .image-container {
          position: relative;
          text-align: center;
        }

        .carousel-image {
          display: inline-block;
          max-width: 100%;
          height: auto;
        }

        .image-name {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 8px;
          font-size: 14px;
          font-family: Helveltica
        }
      `}</style>
    </div>
  );
};

export default Carousel;
