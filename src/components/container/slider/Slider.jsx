import React, { useState, useEffect } from 'react';
import image1 from '../images/animal.png';
import image2 from '../images/apteka.png';
import image3 from '../images/animal.png';

const Slider = () => {
  const content = [
    <img src={image1} alt="Описание изображения 1" style={slideStyle} />,
    <img src={image2} alt="Описание изображения 2" style={slideStyle1} />,
    <img src={image3} alt="Описание изображения 3" style={slideStyle2} />,
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
      <div style={{ transition: 'transform 0.5s ease', transform: `translateX(-${currentIndex * 100}%)` }}>
        {content.map((item, index) => (
          <div key={index} style={{ width: '600px', flexShrink: 0 }}>
            {item}
          </div>
        ))}
      </div>
      <button onClick={prevSlide} style={buttonStyle}>Prev</button>
      <button onClick={nextSlide} style={buttonStyle}>Next</button>
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

const buttonStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'white',
  border: '1px solid black',
  cursor: 'pointer',
};

export default Slider;
  