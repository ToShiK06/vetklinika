  

import React, { useState } from 'react';

const PhoneInput = () => {
  const [phone, setPhone] = useState('');

  const handleChange = (event) => {
    const input = event.target.value.replace(/\D/g, '');
    let formattedPhone = '';

    
    if (input.length > 0) {
      formattedPhone += '+7 ';
    }
    if (input.length > 1) {
      formattedPhone += `(${input.slice(1, 4)}) `;
    }
    if (input.length > 4) {
      formattedPhone += `${input.slice(4, 7)}-`;
    }
    if (input.length > 7) {
      formattedPhone += `${input.slice(7, 9)}-`;
    }
    if (input.length > 9) {
      formattedPhone += `${input.slice(9, 11)}`;
    }

    setPhone(formattedPhone);
  };

  const handleFocus = (event) => {
    
    event.target.value = phone.replace(/\D/g, '');
  };

  const handleBlur = (event) => {
   
    handleChange(event);
  };

  return (
    <input
      type="tel"
      value={phone}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="+7 (___) ___-__-__"
      className="phone-input"
     
    />
  );
};

export default PhoneInput;
