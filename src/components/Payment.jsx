// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import Success from "../components/Success";
import { All, BoxAll, Sidebar } from "../assets/StylesPages/payment";
import TotalPaymentePayment from "../Return/payment/TotalPaymentePayment";
import FinalizePaymentPayment from "../Return/payment/FinalizePaymentPayment";

export default function Payment() {
  const {
    products,
    order,
    setShowPayment,
    nameClient,
    setNameClient,
    code,
    setOrder,
    showSuccess,
    setShowSuccess,
  } = useContext(AuthContext);
  const [abilitCard, setAbilitCard] = useState(false);
  const [amountForPayment, setAmountForPayment] = useState(0);
  const [, setUpdateCode] = useState(false);

  useEffect(() => {
    const urlCode = `${import.meta.env.VITE_API_URL}/update`;
    const data = {
      idcode: code[0].idcode + 1,
    };
    const promise = axios.post(urlCode, data);
    promise.then(() => {});
    promise.catch((err) => {
      console.log(err.response);
    });

    const urlrequest = `${import.meta.env.VITE_API_URL}/request`;
    console.log("aquui", order);
    const promiseOrder = axios.post(urlrequest, order);
    promiseOrder.then((response) => {
      console.log(response.data);
    });
    promiseOrder.catch((err) => {
      console.log(err.response);
    });
  }, [code, order]);

  let sumTotal = 0;
  if (order && order.length > 0) {
    sumTotal = order.reduce((accumulator, item) => {
      return accumulator + parseFloat(item.total.replace(",", "."));
    }, 0);
  }

  if (products.length === 0) {
    return <All>Carregando</All>;
  } else {
    return (
      <All>
        {showSuccess === true && <Success></Success>}
        <BoxAll>
          <TotalPaymentePayment
            order={order}
            nameClient={nameClient}
            code={code}
            sumTotal={sumTotal}
            setNameClient={setNameClient}
          />
          <Sidebar></Sidebar>
          <FinalizePaymentPayment
            order={order}
            sumTotal={sumTotal}
            amountForPayment={amountForPayment}
            setAmountForPayment={setAmountForPayment}
            abilitCard={abilitCard}
            setAbilitCard={setAbilitCard}
            nameClient={nameClient}
            setShowPayment={setShowPayment}
            finishPayment={() => {
              for (let i = 0; i < order.length; i++) {
                order[i].nameClient = nameClient;
                order[i].code = code[0].idcode;
              }
              setOrder(order);
              setUpdateCode(true);
              setShowSuccess(true);
            }}
          />
        </BoxAll>
      </All>
    );
  }
}
