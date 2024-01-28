import { useContext } from "react";
import orderPlaced from "../assets/images/orderPlaced.png";
import { AuthContext } from "../context/authContext";
import { All, BoxAll } from "../assets/StylesPages/success";
import axios from "axios";
import PropTypes from "prop-types";

export default function Success({ amountForPayment, sumTotal }) {
  Success.propTypes = {
    code: PropTypes.number.isRequired,
    amountForPayment: PropTypes.number.isRequired,
    sumTotal: PropTypes.number.isRequired,
  };
  const {
    setShowReview,
    setCounter,
    setShowPayment,
    setOrder,
    setNameClient,
    setBaconSelected,
    setCheddarSelected,
    setSauceSelected,
    setObservationText,
    setShowSuccess,
    order
  } = useContext(AuthContext);

  function printReceipt() {
    const urlPrint = `${import.meta.env.VITE_API_URL}/printReceipt`;
    const data = {
      order ,
      change: amountForPayment - sumTotal,
    };
    const promise = axios.post(urlPrint, data);
    promise.then((response) => {
      console.log(response.data);
    });
    promise.catch((err) => {
      console.error("Erro ao enviar solicitação de impressão:", err);
    });
  }

  function removed() {
    setOrder([]);
    setBaconSelected(false);
    setCheddarSelected(false);
    setSauceSelected(false);
    setObservationText("");
    setShowReview(false);
    setNameClient("");
    setCounter(1);
    setShowPayment(false);
    setShowSuccess(false);
  }

  return (
    <All>
      <BoxAll
        to="/"
        onClick={async () => {
          printReceipt();
          removed();
        }}
      >
        <img src={orderPlaced} alt="" />
      </BoxAll>
    </All>
  );
}
