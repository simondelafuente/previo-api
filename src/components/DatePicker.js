// src/DatePicker.js
import React from "react";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <label htmlFor="date-picker">Selecciona una fecha:</label>
      <input
        type="date"
        id="date-picker"
        value={selectedDate}
        onChange={handleChange}
      />
    </div>
  );
};

export default DatePicker;
