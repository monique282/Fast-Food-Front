// eslint-disable-next-line no-unused-vars
import React from "react";
import Cheddars from "../../assets/images/cheddar.png";
import Barvecue from "../../assets/images/barbecue.png";
import Bacons from "../../assets/images/bacon.png";
import {
  Additional,
  Bacon,
  NameQuantity,
  Butons,
  Select,
  Cheddar,
  Sauce,
} from "../../assets/StylesPages/revision";
import PropTypes from "prop-types";

export default function AdditionalRevision({
  setCheddarSelected,
  cheddarSelected,
  setSauceSelected,
  sauceSelected,
  setBaconSelected,
  baconSelected,
}) {
  AdditionalRevision.propTypes = {
    setCheddarSelected: PropTypes.func.isRequired,
    cheddarSelected: PropTypes.bool.isRequired,
    setSauceSelected: PropTypes.func.isRequired,
    sauceSelected: PropTypes.bool.isRequired,
    setBaconSelected: PropTypes.func.isRequired,
    baconSelected: PropTypes.bool.isRequired,
  };
  return (
    <Additional>
      <h1>Adicionais</h1>
      <h2>
        Selecione os ingredientes que voê quer adicionar a mais no seu lanche
      </h2>
      <Bacon onClick={() => setBaconSelected(!baconSelected)}>
        <img src={Bacons} alt="" />
        <NameQuantity>
          <h1>Bacon</h1>
          <h2>10g</h2>
        </NameQuantity>
        <Butons>
          <Select>
            <p>R$ 1.00</p>
            <div
              style={{
                backgroundColor: baconSelected ? "#2E5D15" : "#FFFFFF",
              }}
            ></div>
          </Select>
        </Butons>
      </Bacon>
      <Cheddar onClick={() => setCheddarSelected(!cheddarSelected)}>
        <img src={Cheddars} alt="" />
        <NameQuantity>
          <h1>Cheddar</h1>
          <h2>10g</h2>
        </NameQuantity>
        <Butons>
          <Select>
            <p>R$ 1.00</p>
            <div
              style={{
                backgroundColor: cheddarSelected ? "#2E5D15" : "#FFFFFF",
              }}
            ></div>
          </Select>
        </Butons>
      </Cheddar>
      <Sauce onClick={() => setSauceSelected(!sauceSelected)}>
        <img src={Barvecue} alt="" />
        <NameQuantity>
          <h1>Molho acompanhamento</h1>
          <h2>Barbecue</h2>
        </NameQuantity>
        <Butons>
          <Select>
            <p>R$ 1.00</p>
            <div
              style={{
                backgroundColor: sauceSelected ? "#2E5D15" : "#FFFFFF",
              }}
            ></div>
          </Select>
        </Butons>
      </Sauce>
    </Additional>
  );
}
