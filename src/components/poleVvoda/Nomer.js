import React, { useState } from 'react';


const InputField1 = () => {

  const [inputValue, setInputValue] = useState('');


  const handleChange = (event) => {
    const value = event.target.value;
   
    if (/^\d*$/.test(value)) {
      setInputValue(value);
  };
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
   
  };
  const inputStyle = {
    border: '2px solid rgb(144, 139, 139)',
    borderRadius: '20px',
    padding: '10px',
    fontSize: '20px',
    width: '430px',
    height: '30px'
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={inputStyle}
          value={inputValue}
          maxLength={11}
          onChange={handleChange}
          placeholder="+7 (999)-999-99-99"
        />
       
      </form>
   
    </div>
  );
};

export default InputField1;
