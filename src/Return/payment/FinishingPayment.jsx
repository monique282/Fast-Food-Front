// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Finishing,
  RemoveOrderFromList,
  AddProducttoList,
} from "../../assets/StylesPages/payment";
import PropTypes from "prop-types";

function FinishingPayment({
  amountForPayment,
  sumTotal,
  abilitCard,
  nameClient,
  setShowPayment,
  finishPayment,
}) {
  FinishingPayment.propTypes = {
    sumTotal: PropTypes.number.isRequired,
    amountForPayment: PropTypes.number.isRequired,
    abilitCard: PropTypes.bool.isRequired,
    nameClient: PropTypes.string.isRequired,
    setShowPayment: PropTypes.func.isRequired,
    finishPayment: PropTypes.func.isRequired,
  };
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
