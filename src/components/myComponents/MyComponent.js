

import React, { useState } from 'react';
import './MyComponent.css'; 

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      
      <button className="button" onClick={handleButtonClick}>Оплатить</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="krest">
            <span className="close" onClick={closeModal}>&times;</span>
            </div>
            <p>Заявка принята!<br/>Спасибо за услугу!</p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
