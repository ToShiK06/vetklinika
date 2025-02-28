import React, { useState, useEffect } from 'react';
import s from './Slider.module.css';
import image1 from '../img/vet.png';
import image2 from '../img/vet1.jpg';
import image3 from '../img/vet2.jpg';
import image4 from '../img/vet3.jpg';
import image5 from '../img/vet4png.png';

const Slider = () => {
  const content = [
    <img src={image1} alt="Описание изображения 1" style={slideStyle} />,
    <img src={image2} alt="Описание изображения 2" style={slideStyle1} />,
    <img src={image3} alt="Описание изображения 3" style={slideStyle2} />,
    <img src={image4} alt="Описание изображения 4" style={slideStyle3} />,
    <img src={image5} alt="Описание изображения 5" style={slideStyle4} />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Меняем слайд каждые 3 секунды

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + content.length) % content.length
    );
  };

  return (
    <div style={{ position: 'relative', width: '600px', margin: 'auto', overflow: 'hidden' }}>
      <div style={{  marginTop: '150px',display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentIndex * 100}%)` }}>
        {content.map((item, index) => (
          <div key={index} style={{ width: '600px', flexShrink: 0 }}>
            {item}
            
          </div>
        ))}
      </div>
      
     
    </div>
  );
};

const slideStyle = {
  width: '600px',
  height: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  borderRadius: '8px',
};
const slideStyle1 = {
    width: '600px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };
  const slideStyle2 = {
    width: '600px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };
  const slideStyle3 = {
    width: '600px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };
  const slideStyle4 = {
    width: '600px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };



export default Slider;
  