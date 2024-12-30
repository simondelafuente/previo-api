import React, { useState, useEffect } from "react";
import axios from "axios";

const ConversionForm = ({ onConvert }) => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // Obtener la lista de monedas
    axios.get("https://api.frankfurter.app/currencies")
      .then(response => setCurrencies(Object.entries(response.data)))
      .catch(error => console.error("Error fetching currencies:", error));
  }, []);

  const handleConvert = () => {
    if (amount && fromCurrency && toCurrency && date) {
      onConvert({ amount, fromCurrency, toCurrency, date });
    }
  };

  return (
    <div>
      <h1>Convertidor de Monedas</h1>
      <input
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="">Moneda origen</option>
        {currencies.map(([code, name]) => (
          <option key={code} value={code}>{name} ({code})</option>
        ))}
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="">Moneda destino</option>
        {currencies.map(([code, name]) => (
          <option key={code} value={code}>{name} ({code})</option>
        ))}
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleConvert}>Convertir</button>
    </div>
  );
};

export default ConversionForm;
