// eslint-disable-next-line no-unused-vars
import React from "react";
import { Ready, ReadyName } from "../../assets/StylesPages/withdrawal";
import PropTypes from "prop-types";

export default function ReadyWithdrawal({ showOnly2hours }) {
  ReadyWithdrawal.propTypes = {
    showOnly2hours: PropTypes.array.isRequired,
  };
  return (
    <Ready>
      <p>Pronto:</p>
      {showOnly2hours.map((main) => (
        <>
          {main.error === false && (
            <ReadyName key={main.idR}>
              <p style={{ color: " #2E5D15" }}>{main.nameClient}</p>
            </ReadyName>
          )}
          {main.error === true && (
            <ReadyName key={main.idR}>
              <p style={{ color: "#CF3C29" }}>{main.nameClient}</p>
              <h1 style={{ color: "#CF3C29" }}>
                Desculpe, seu pedido não foi preparado, entre em contato com o
                estabelecimento para solucionar o problema.
              </h1>
            </ReadyName>
          )}
        </>
      ))}
    </Ready>
  );
}
