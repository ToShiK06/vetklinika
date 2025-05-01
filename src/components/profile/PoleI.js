import React, { useState } from 'react';


const InputFieldQ = () => {

  const [inputValue, setInputValue] = useState('');


 
  const handleChange = (event) => {
    const value = event.target.value;
    // Позволяем вводить только буквы
    if (/^[а-я А-Я]*$/.test(value)) {
      setInputValue(value);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault(); 
   
  };
  const inputStyle = {
    
    borderRadius: '20px',
    padding: '10px',
    fontSize: '16px',
    width: '200px',
    height: '30px',
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={inputStyle}
          value={inputValue}
          onChange={handleChange}
          placeholder="Ваше имя"
          
        />
       
      </form>
   
    </div>
  );
};

export default InputFieldQ;
