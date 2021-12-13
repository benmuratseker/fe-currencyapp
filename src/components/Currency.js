import React from "react";
import { useSelector } from "react-redux";

function Currency() {
  const currency = useSelector((state) => state.Test.currency);
  return (
    <div>
      <h3>Currency:</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Base Currency</th>
            <th>Base Name</th>
            <th>Target Currency</th>
            <th>Target Name</th>
            <th>Exchange Rate</th>
            <th>Inverse Rate</th>
          </tr>
        </thead>
        <tbody>
          {currency && (
            <tr>
              <td>{currency.BaseCurrency}</td>
              <td>{currency.BaseName}</td>
              <td>{currency.TargetCurrency}</td>
              <td>{currency.TargetName}</td>
              <td>{currency.ExchangeRate}</td>
              <td>{currency.InverseRate}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Currency;
