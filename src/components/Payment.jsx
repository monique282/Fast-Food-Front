import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/authContext";
import { MdPayment } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import axios from "axios";
import Success from "../components/Success";
import {
  All,
  BoxAll,
  TotalPaymente,
  Sidebar,
  Order,
  PurchaseSummary,
  DescriptionPrice,
  Summary,
  PriceDescription,
  Divider,
  FinalValue,
  Amount,
  CodeName,
  Name,
  Code,
  FinalizePayment,
  Title,
  CreditDebitMoney,
  ValueChange,
  Value,
  Change,
  Finishing,
  RemoveOrderFromList,
  AddProducttoList,
} from "../assets/StylesPages/payment";

export default function Payment() {
  const {
    products,
    order,
    setShowPayment,
    nameClient,
    setNameClient,
    code,
    setCode,
    setOrder,
    showSuccess,
    setShowSuccess,
  } = useContext(AuthContext);
  const [abilitCard, setAbilitCard] = useState(false);
  4;
  const [amountForPayment, setAmountForPayment] = useState(0);
  const [updateCode, setUpdateCode] = useState(false);

  useEffect(() => {
    const urlCode = `${import.meta.env.VITE_API_URL}/update`;
    const data = {
      idcode: code[0].idcode + 1,
    };
    const promise = axios.post(urlCode, data);
    promise.then((response) => {});
    promise.catch((err) => {
      console.log(err.response);
    });

    const urlrequest = `${import.meta.env.VITE_API_URL}/request`;

    const promiseOrder = axios.post(urlrequest, order);
    promiseOrder.then((response) => {
      console.log(response.data);
    });
    promiseOrder.catch((err) => {
      console.log(err.response);
    });
  }, [updateCode]);

  let sumTotal = 0;
  if (order && order.length > 0) {
    sumTotal = order.reduce((accumulator, item) => {
      return accumulator + parseFloat(item.total.replace(",", "."));
    }, 0);
  }

  function finishPayment() {
    for (let i = 0; i < order.length; i++) {
      order[i].nameClient = nameClient;
      order[i].code = code[0].idcode;
    }

    setOrder(order);
    setUpdateCode(true);
    setShowSuccess(true);
  }

  if (products.length === 0) {
    <All>Carregando</All>;
  } else {
    return (
      <All>
        {showSuccess === true && <Success></Success>}
        <BoxAll>
          <TotalPaymente>
            <p>
              <FaWallet
                style={{
                  color: "#2E5D15",
                  marginRight: "3%",
                  width: "30px",
                  height: "30px",
                }}
              />
              Pagamento
            </p>
            <Order>
              <p>Resumo da compra</p>
              {order && order.length > 0 && (
                <PurchaseSummary>
                  {order.map((main) => (
                    <React.Fragment key={main.ProductSpecific.id}>
                      <DescriptionPrice>
                        <Summary>
                          {main.counter}x {main.ProductSpecific.name}
                        </Summary>
                        <PriceDescription>
                          R${" "}
                          {(main.ProductSpecific.price * main.counter).toFixed(2)}
                        </PriceDescription>
                      </DescriptionPrice>
                      {main.followUp.length > 0 &&
                        main.followUp.map((followUpItem) => (
                          <DescriptionPrice key={followUpItem.id}>
                            <Summary>{followUpItem.item}</Summary>
                            <PriceDescription>
                              {followUpItem.price}
                            </PriceDescription>
                          </DescriptionPrice>
                        ))}
                    </React.Fragment>
                  ))}

                  <Divider></Divider>
                  <FinalValue>
                    <h1>Total do pedido:</h1>
                    <Amount>R$ {sumTotal.toFixed(2)} </Amount>
                  </FinalValue>
                </PurchaseSummary>
              )}
              <CodeName>
                <Name>
                  <p>Nome do cliente</p>
                  <input
                    placeholder="Primeiro nome"
                    type="text"
                    value={nameClient}
                    onChange={(e) => setNameClient(e.target.value)}
                  ></input>
                </Name>
                <Code>
                  <p>Código</p>
                  {!code[0].idcode === 1 ? (
                    <div>1</div>
                  ) : (
                    <div>{code[0].idcode}</div>
                  )}
                </Code>
              </CodeName>
            </Order>
          </TotalPaymente>
          <Sidebar></Sidebar>
          <FinalizePayment>
            <Order>
              <Title>Selecione a forma de pagamento</Title>
              <CreditDebitMoney>
                <p>
                  <MdPayment
                    style={{
                      color: "#9F9F9F",
                      marginRight: "3%",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  Credito
                </p>
                <div
                  style={{
                    border: "3px solid #9F9F9F",
                    backgroundColor: "#9F9F9F",
                  }}
                ></div>
              </CreditDebitMoney>
              <CreditDebitMoney>
                <p>
                  <MdPayment
                    style={{
                      color: "#9F9F9F",
                      marginRight: "3%",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                  Debito
                </p>
                <div
                  style={{
                    border: "3px solid #9F9F9F",
                    backgroundColor: "#9F9F9F",
                  }}
                ></div>
              </CreditDebitMoney>
              {abilitCard === false && (
                <CreditDebitMoney onClick={() => setAbilitCard(true)}>
                  <p>
                    <FaMoneyBillAlt
                      style={{
                        color: "#2E5D15",
                        marginRight: "3%",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                    Dinheiro
                  </p>
                  <div
                    style={{
                      border: "3px solid #2E5D15",
                      backgroundColor: "#FFFFFF",
                    }}
                  ></div>
                </CreditDebitMoney>
              )}
              {abilitCard === true && (
                <CreditDebitMoney
                  onClick={() => setAbilitCard(false)}
                  style={{ border: "1px solid #2E5D15" }}
                >
                  <p>
                    <FaMoneyBillAlt
                      style={{
                        color: "#2E5D15",
                        marginRight: "3%",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                    Dinheiro
                  </p>
                  <div
                    style={{
                      border: "3px solid #2E5D15",
                      backgroundColor: "#2E5D15",
                    }}
                  ></div>
                </CreditDebitMoney>
              )}
              <ValueChange>
                <Value>
                  <p>Valor entregue</p>
                  <input
                    placeholder="Digite o Valor"
                    type="number"
                    value={amountForPayment}
                    onChange={(e) => setAmountForPayment(e.target.value)}
                  />
                </Value>
                {amountForPayment < sumTotal && (
                  <Change>
                    <p>Troco</p>
                    <div></div>
                  </Change>
                )}
                {amountForPayment > sumTotal && (
                  <Change>
                    <p>Troco</p>
                    <div>R${(amountForPayment - sumTotal).toFixed(2)}</div>
                  </Change>
                )}
              </ValueChange>
              <Finishing>
                <RemoveOrderFromList onClick={() => setShowPayment(false)}>
                  Cancelar
                </RemoveOrderFromList>
                {amountForPayment > sumTotal &&
                abilitCard &&
                nameClient.length !== 0 ? (
                  <AddProducttoList
                    onClick={() => finishPayment()}
                    style={{
                      border: "3px solid #2E5D15",
                      backgroundColor: "#2E5D15",
                    }}
                  >
                    Finalizar Pedido
                  </AddProducttoList>
                ) : (
                  <AddProducttoList
                    style={{
                      border: "3px solid #9F9F9F",
                      backgroundColor: "#9F9F9F",
                    }}
                  >
                    Finalizar Pedido
                  </AddProducttoList>
                )}
              </Finishing>
            </Order>
          </FinalizePayment>
        </BoxAll>
      </All>
    );
  }
}
