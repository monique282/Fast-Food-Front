/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FinalizePayment,
  Order,
  Title,
  Finishing,
  RemoveOrderFromList,
  AddProducttoList,
} from "../../assets/StylesPages/payment";
import CreditDebitMoneyPayment from "./CreditDebitMoneyPayment";
import MoneyPayment from "./MoneyPayment";
import ValueChangePayment from "./ValueChangePayment";

function FinalizePaymentPayment({
  sumTotal,
  amountForPayment,
  setAmountForPayment,
  abilitCard,
  setAbilitCard,
  nameClient,
  setShowPayment,
  finishPayment,
}) {
  return (
    <FinalizePayment>
      <Order>
        <Title>Selecione a forma de pagamento</Title>
        <CreditDebitMoneyPayment text={"Crédito"} />
        <CreditDebitMoneyPayment text={"Débito"} />
        {abilitCard === false && (
          <MoneyPayment
            text="Dinheiro"
            setAbilitCard={() => setAbilitCard(true)}
            borderColor="#2E5D15"
            backgroundColor="#FFFFFF"
          />
        )}
        {abilitCard === true && (
          <MoneyPayment
            text="Dinheiro"
            setAbilitCard={() => setAbilitCard(false)}
            borderColor="#2E5D15"
            backgroundColor="#2E5D15"
          />
        )}
        <ValueChangePayment
          amountForPayment={amountForPayment}
          sumTotal={sumTotal}
          setAmountForPayment={setAmountForPayment}
        />
        <Finishing>
          <RemoveOrderFromList onClick={() => setShowPayment(false)}>
            Cancelar
          </RemoveOrderFromList>
          {amountForPayment > sumTotal &&
          abilitCard &&
          nameClient.length !== 0 ? (
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
      </Order>
    </FinalizePayment>
  );
}

export default FinalizePaymentPayment;
