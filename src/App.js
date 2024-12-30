// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "../src/components/DatePicker";
import CurrencySelector from "../src/components/CurrencySelector";
import "./App.css";

function App() {
  const [currencies, setCurrencies] = useState({});
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [conversionResult, setConversionResult] = useState(null);

  // Obtener la lista de monedas
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get("https://api.frankfurter.app/currencies");
        setCurrencies(response.data);
      } catch (error) {
        console.error("Error al obtener las monedas:", error);
      }
    };

    fetchCurrencies();
  }, []);

  // Manejar la conversión
  const handleConvert = async () => {
    if (!amount || !fromCurrency || !toCurrency || !selectedDate) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.frankfurter.app/${selectedDate}?from=${fromCurrency}&to=${toCurrency}`
      );
      const rate = response.data.rates[toCurrency];
      const result = amount * rate;
      setConversionResult(result.toFixed(2));
    } catch (error) {
      console.error("Error al realizar la conversión:", error);
      alert("No se pudo realizar la conversión. Revisa los datos ingresados.");
    }
  };

  return (
    <div className="App">
      <h1>Conversor de Divisas</h1>

      <div>
        <label htmlFor="amount">Monto:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ingresa el monto"
        />
      </div>

      <CurrencySelector
        currencies={currencies}
        selectedCurrency={fromCurrency}
        setSelectedCurrency={setFromCurrency}
        label="Moneda de origen"
      />

      <CurrencySelector
        currencies={currencies}
        selectedCurrency={toCurrency}
        setSelectedCurrency={setToCurrency}
        label="Moneda de destino"
      />

      <DatePicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <button onClick={handleConvert}>Convertir</button>

      {conversionResult !== null && (
        <div>
          <h2>Resultado:</h2>
          <p>
            {amount} {fromCurrency} equivale a {conversionResult} {toCurrency} en la fecha {selectedDate}.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
