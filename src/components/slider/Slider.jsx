import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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
    }, 3000);

    return () => clearInterval(interval); 
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
    <div style={{ position: 'relative', width: '100%',height:'1080px', margin: 'auto', overflow: 'hidden' }}>
      <div style={{  marginTop: '120px',display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentIndex * 100}%)` }}>
        {content.map((item, index) => (
          <div key={index} style={{ width: '100%', flexShrink: 0 }}>
            {item}
            
          </div>
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          width: '500px',
          top: '50%',
          left: '30%',
          fontSize: '40px',
          transform: 'translate(-50%, -50%)',
          color: 'black',
          textAlign: 'center',
          zIndex: 2,
          backgroundColor: 'rgba(114, 109, 109, 0.5)', 
          padding: '20px',
          borderRadius: '20px',
        }}
      >
        <h1  style={{color:'#59443F'}}>Ветмастер, лучшая ветклиника</h1>
        <p><Link to="spec">
            <button className={s.zakaz}>ЗАПИСАТЬСЯ</button>
          </Link></p>
      </div>
     
    </div>
  );
};

const slideStyle = {
  width: '100%',
  height:'1080px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  
  backgroundColor: '#f0f0f0',
  border: 'none',
  borderRadius: '8px',
};
const slideStyle1 = {
  width: '100%',
  height:'1080px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '8px',
  };
  const slideStyle2 = {
    width: '100%',
    height:'1080px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '8px',
  };
  const slideStyle3 = {
    width: '100%',
    height:'1080px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '8px',
  };
  const slideStyle4 = {
    width: '100%',
    height:'1080px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRadius: '8px',
  };



export default Slider;
  