

import React, { useState } from 'react';
import './MyComponent.css'; 
import { Link } from "react-router-dom";

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
            <p>Заявка принята!<br/>Спасибо за услугу!
            <Link to="/">
            <br/><button className="glavn">на главную</button>
            </Link></p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
