import React, { useState } from 'react';


const InputField2 = () => {

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
    fontSize: '20px',
    width: '430px',
    height: '30px',
    marginLeft: '25px', 
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={inputStyle}
          value={inputValue}
          onChange={handleChange}
          placeholder="Желаемая дата и время приема"
        />
       
      </form>
   
    </div>
  );
};

export default InputField2;
