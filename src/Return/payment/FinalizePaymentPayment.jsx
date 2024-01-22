/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FinalizePayment,
  Order,
  Title,
} from "../../assets/StylesPages/payment";
import CreditDebitMoneyPayment from "./CreditDebitMoneyPayment";
import MoneyPayment from "./MoneyPayment";
import ValueChangePayment from "./ValueChangePayment";
import FinishingPayment from "./FinishingPayment";

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
        <FinishingPayment
          amountForPayment={amountForPayment}
          sumTotal={sumTotal}
          abilitCard={abilitCard}
          nameClient={nameClient}
          setShowPayment={setShowPayment}
          finishPayment={finishPayment}
        />
      </Order>
    </FinalizePayment>
  );
}

export default FinalizePaymentPayment;
