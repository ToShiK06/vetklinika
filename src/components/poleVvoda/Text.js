import React, { useState } from 'react';


const InputField4 = () => {

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
    width: '210px',
    height: '35px',
    display: 'flex',
    
    marginLeft: '5px', 
    
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={inputStyle}
          value={inputValue}
          onChange={handleChange}
          placeholder="Введите капчу"
        />
       
      </form>
   
    </div>
  );
};

export default InputField4;
