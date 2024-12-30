import React from "react";

const ConversionResult = ({ result }) => {
  return (
    <div>
      <h2>Resultado de la conversión</h2>
      {result ? (
        <p>
          {result.amount} {result.from} equivale a {result.convertedAmount} {result.to} el {result.date}.
        </p>
      ) : (
        <p>Ingresa los datos para realizar la conversión.</p>
      )}
    </div>
  );
};

export default ConversionResult;
