// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { CreditDebitMoney } from "../../assets/StylesPages/payment";
import PropTypes from "prop-types";

export default function MoneyPayment({
  setAbilitCard,
  borderColor,
  backgroundColor,
}) {
  MoneyPayment.propTypes = {
    setAbilitCard: PropTypes.func.isRequired,
    borderColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  };
  return (
    <CreditDebitMoney
      onClick={() => {
        setAbilitCard(true);
      }}
    >
      <p>
        <FaMoneyBillAlt
          style={{
            color: "#2E5D15",
            marginRight: "3%",
            width: "30px",
            height: "30px",
          }}
        />
        Dinheiro
      </p>
      <div
        style={{
          border: `3px solid ${borderColor}`,
          backgroundColor: backgroundColor,
        }}
      ></div>
    </CreditDebitMoney>
  );
}
