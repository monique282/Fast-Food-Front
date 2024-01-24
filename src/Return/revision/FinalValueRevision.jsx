// eslint-disable-next-line no-unused-vars
import React from "react";
import { FinalValue, Amount } from "../../assets/StylesPages/revision";
import PropTypes from "prop-types";

export default function FinalValueRevision({
  baconSelected,
  cheddarSelected,
  sauceSelected,
  ProductSpecific,
  counter,
}) {
  FinalValueRevision.propTypes = {
    baconSelected: PropTypes.bool.isRequired,
    cheddarSelected: PropTypes.bool.isRequired,
    sauceSelected: PropTypes.bool.isRequired,
    ProductSpecific: PropTypes.object.isRequired,
    counter: PropTypes.number.isRequired,
  };
  return (
    <FinalValue>
      <h1>Total do pedido:</h1>
      <Amount>
        R${" "}
        {(
          ProductSpecific.price * counter +
          (baconSelected ? 1 : 0) +
          (cheddarSelected ? 1 : 0) +
          (sauceSelected ? 1 : 0)
        ).toFixed(2)}
      </Amount>
    </FinalValue>
  );
}
