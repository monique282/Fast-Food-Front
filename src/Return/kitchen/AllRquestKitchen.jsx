// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  AllRequest,
  Order,
  Ob,
  Observation,
  P,
  NameCode,
  Butons,
  Not,
  Ok,
} from "../../assets/StylesPages/kitchen";
import { HiOutlineCheck, HiOutlineX } from "react-icons/hi";
import updateError from "../../Functionality/ErrorKitchen";
import updateReady from "../../Functionality/ReadyKitchen";
import PropTypes from "prop-types";

function AllRequestKitchen({ main, setLoading }) {
  AllRequestKitchen.propTypes = {
    main: PropTypes.array.isRequired,
    setLoading: PropTypes.func.isRequired,
  };
  return (
    <AllRequest key={main.idR}>
      <Order>
        <img src={main.image} alt="" />
        <NameCode>
          <h1>
            {main.code} - {main.nameClient}
          </h1>
          <h2>{main.name}</h2>
          {main.followUps &&
            main.followUps.length !== 0 &&
            main.followUps.map((followUp) => (
              <h2 key={followUp.id}>{followUp.item}</h2>
            ))}
        </NameCode>
        <Butons>
          <Not
            onClick={() => {
              updateError(main.idR, setLoading);
              updateReady(main.idR, setLoading);
            }}
          >
            <HiOutlineX
              style={{ width: "30px", height: "30px", color: "#CF3C29" }}
            />
          </Not>
          <Ok
            onClick={() => {
              updateReady(main.idR, setLoading);
            }}
          >
            <HiOutlineCheck
              style={{ width: "30px", height: "30px", color: "#56A211" }}
            />
          </Ok>
        </Butons>
      </Order>
      {main.observationText && main.observationText.length !== 0 && (
        <>
          <Ob>Observações:</Ob>
          <Observation>
            <P>{main.observationText}</P>
          </Observation>
        </>
      )}
    </AllRequest>
  );
}

export default AllRequestKitchen;
