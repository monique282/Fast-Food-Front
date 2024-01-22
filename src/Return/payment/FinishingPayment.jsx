/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Finishing,
  RemoveOrderFromList,
  AddProducttoList,
} from "../../assets/StylesPages/payment";

function FinishingPayment({
  amountForPayment,
  sumTotal,
  abilitCard,
  nameClient,
  setShowPayment,
  finishPayment,
}) {
  return (
    <Finishing>
      <RemoveOrderFromList onClick={() => setShowPayment(false)}>
        Cancelar
      </RemoveOrderFromList>
      {amountForPayment > sumTotal && abilitCard && nameClient.length !== 0 ? (
        <AddProducttoList
          onClick={() => finishPayment()}
          style={{
            border: "3px solid #2E5D15",
            backgroundColor: "#2E5D15",
          }}
        >
          Finalizar Pedido
        </AddProducttoList>
      ) : (
        <AddProducttoList
          style={{
            border: "3px solid #9F9F9F",
            backgroundColor: "#9F9F9F",
          }}
        >
          Finalizar Pedido
        </AddProducttoList>
      )}
    </Finishing>
  );
}

export default FinishingPayment;
