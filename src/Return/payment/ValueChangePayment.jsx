
// eslint-disable-next-line no-unused-vars
import React from "react";
import { ValueChange, Value, Change } from "../../assets/StylesPages/payment";

export default function ValueChangePayment(
  amountForPayment,
  sumTotal,
  setAmountForPayment,
) {
  return (
    <ValueChange>
      <Value>
        <p>Valor entregue</p>
        <input
          placeholder="Digite o Valor"
          type="number"
          value={amountForPayment}
          onChange={(e) => setAmountForPayment(e.target.value)}
        />
      </Value>
      {amountForPayment < sumTotal && (
        <Change>
          <p>Troco</p>
          <div></div>
        </Change>
      )}
      {amountForPayment > sumTotal && (
        <Change>
          <p>Troco</p>
          <div>R${(amountForPayment - sumTotal).toFixed(2)}</div>
        </Change>
      )}
    </ValueChange>
  );
}
