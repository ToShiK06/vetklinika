import React, { useState } from 'react';


const InputField = () => {

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
    border: '2px solid rgb(144, 139, 139)',
    borderRadius: '20px',
    padding: '10px',
    fontSize: '16px',
    width: '910px',
    height: '30px'
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={inputStyle}
          value={inputValue}
          onChange={handleChange}
          placeholder="ФИО"
        />
       
      </form>
   
    </div>
  );
};

export default InputField;
