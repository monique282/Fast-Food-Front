import { useContext } from "react";
import styled from "styled-components";
import orderPlaced from "../assets/images/orderPlaced.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

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
    setShowSuccess
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
    setShowSuccess(false)
  }

  return (
    <All>
      <BoxAll to="/kitchen" onClick={() => removed()}>
        <img src={orderPlaced} alt="" />
      </BoxAll>
    </All>
  );
}

const All = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(128, 128, 128, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  z-index: 3;
  border-radius: 10px;
`;
const BoxAll = styled(Link)`
  width: 60%;
  height: auto;
  border-radius: 20px;
  background-color: #ffffff;
  margin-bottom: 20%;
  img {
    width: 100%;
    border-radius: 20px;
  }
`;
