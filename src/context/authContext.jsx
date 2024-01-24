// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [products, setProducts] = useState([]);
  const [id, setId] = useState();
  const [showReview, setShowReview] = useState(false);
  const [counter, setCounter] = useState(1);
  const [order, setOrder] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [nameClient, setNameClient] = useState("");
  const [code, setCode] = useState([]);
  const [baconSelected, setBaconSelected] = useState(false);
  const [cheddarSelected, setCheddarSelected] = useState(false);
  const [sauceSelected, setSauceSelected] = useState(false);
  const [observationText, setObservationText] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showRequest, setShowRequest] = useState([]);
  const [notReadyRequests, setNotReadyRequests] = useState([]);
  const [showOnly2hours, setShowOnly2hours] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        products,
        setProducts,
        id,
        setId,
        showReview,
        setShowReview,
        counter,
        setCounter,
        order,
        setOrder,
        showPayment,
        setShowPayment,
        nameClient,
        setNameClient,
        code,
        setCode,
        baconSelected,
        setBaconSelected,
        cheddarSelected,
        setCheddarSelected,
        sauceSelected,
        setSauceSelected,
        observationText,
        setObservationText,
        showSuccess,
        setShowSuccess,
        showRequest,
        setShowRequest,
        notReadyRequests,
        setNotReadyRequests,
        showOnly2hours,
        setShowOnly2hours,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
