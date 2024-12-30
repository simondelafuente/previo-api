import React from "react";

const CurrencySelector = ({ currencies, selectedCurrency, setSelectedCurrency, label }) => {
  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className="mb-4">
      <label 
        htmlFor={`currency-selector-${label}`}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}:
      </label>
      <select
        id={`currency-selector-${label}`}
        value={selectedCurrency}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="">Selecciona una moneda</option>
        {Object.entries(currencies).map(([code, name]) => (
          <option key={code} value={code}>
            {`${code} - ${name}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;

