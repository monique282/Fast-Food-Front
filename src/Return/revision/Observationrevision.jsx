// eslint-disable-next-line no-unused-vars
import React from "react";
import { Observation, Search } from "../../assets/StylesPages/revision";
import PropTypes from "prop-types";

export default function Observationrevision({
  observationText,
  setObservationText,
}) {
  Observationrevision.propTypes = {
    setObservationText: PropTypes.func.isRequired,
    observationText: PropTypes.string.isRequired,
  };
  return (
    <Observation>
      <h1>Observações</h1>
      <Search
        placeholder="Adicione uma observação ao pedido"
        type="text"
        value={observationText}
        onChange={(e) => setObservationText(e.target.value)}
      ></Search>
    </Observation>
  );
}
