import React, { useState } from 'react';


const InputField3 = () => {

  const [inputValue, setInputValue] = useState('');


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault(); 
   
  };
  const inputStyle = {
    border: '2px solid rgb(144, 139, 139)',
    borderRadius: '20px',
    padding: '10px',
    fontSize: '18px',
    width: '885px',
    height: '100px',
    display: 'flex',
    justifyContent: 'start'
    
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={inputStyle}
          value={inputValue}
          onChange={handleChange}
          placeholder="Кратко опишите проблему"
          
        />
       
      </form>
   
    </div>
  );
};

export default InputField3;
