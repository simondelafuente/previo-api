// src/CurrencySelector.js
import React from "react";

const CurrencySelector = ({ currencies, selectedCurrency, setSelectedCurrency, label }) => {
  const handleChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div>
      <label htmlFor={`currency-selector-${label}`}>{label}:</label>
      <select
        id={`currency-selector-${label}`}
        value={selectedCurrency}
        onChange={handleChange}
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
