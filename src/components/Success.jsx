import { useContext } from "react";
import styled from "styled-components";
import orderPlaced from "../assets/images/orderPlaced.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { All, BoxAll } from "../assets/StylesPages/success";
export default function Success() {
  const {
    setShowReview,
    setCounter,
    setshowPayment,
    setOrder,
    setNameClient,
    setBaconSelected,
    setCheddarSelected,
    setSauceSelected,
    setObservationText,
    setShowSuccess,
  } = useContext(AuthContext);

  function removed() {
    setOrder([]);
    setBaconSelected(false);
    setCheddarSelected(false);
    setSauceSelected(false);
    setObservationText("");
    setShowReview(false);
    setNameClient("");
    setCounter(1);
    setshowPayment(false);
    setShowSuccess(false);
  }

  return (
    <All>
      <BoxAll to="/kitchen" onClick={() => removed()}>
        <img src={orderPlaced} alt="" />
      </BoxAll>
    </All>
  );
}
