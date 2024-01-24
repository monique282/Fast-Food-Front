// eslint-disable-next-line no-unused-vars
import React from "react";
import { Name, Preparing } from "../../assets/StylesPages/withdrawal";
import PropTypes from "prop-types";

export default function PreparingWithdrawal({ notReadyRequests }) {
  PreparingWithdrawal.propTypes = {
    notReadyRequests: PropTypes.array.isRequired,
  };
  return (
    <Preparing>
      <p>Preparando:</p>
      {notReadyRequests.map((main) => (
        <Name key={main.idR}>
          <p>{main.nameClient}</p>
        </Name>
      ))}
    </Preparing>
  );
}
