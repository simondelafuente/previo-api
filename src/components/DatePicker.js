import React from "react";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="mb-4">
      <label 
        htmlFor="date-picker" 
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        Selecciona una fecha:
      </label>
      <input
        type="date"
        id="date-picker"
        value={selectedDate}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
  );
};

export default DatePicker;