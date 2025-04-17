

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import './DatePickerComponent.css'; 

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (date) => {
    setStartDate(date);
    setIsOpen(false); 
  };

  return (
    <div className="date-picker-container">
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        onClickOutside={() => setIsOpen(false)} 
        open={isOpen} 
        onFocus={() => setIsOpen(true)} 
        placeholderText="Выберите дату"
        dateFormat="dd/MM/yyyy"
        className="date-input"
        popperPlacement="bottom" 
        showPopperArrow={false} 
      />
    </div>
  );
};

export default DatePickerComponent;
