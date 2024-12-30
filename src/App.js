import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "./components/DatePicker";
import CurrencySelector from "./components/CurrencySelector";
import { Moon, Sun } from 'lucide-react';

function App() {
  const [currencies, setCurrencies] = useState({});
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [conversionResult, setConversionResult] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Conversor de Divisas</h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Monto:
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Ingresa el monto"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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

            <button
              onClick={handleConvert}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 mt-4"
            >
              Convertir
            </button>
          </div>

          {conversionResult !== null && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Resultado:</h2>
              <p className="text-gray-600 dark:text-gray-300">
                {amount} {fromCurrency} equivale a {conversionResult} {toCurrency} en la fecha {selectedDate}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

