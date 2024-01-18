import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/authContext";
import {
  All,
  Preparing,
  Sidebar,
  Ready,
  Name,
  ReadyName,
} from "../assets/StylesPages/withdrawal";
export default function Withdrawal() {
  const { products, notReadyRequests, showOnly2hours } =
    useContext(AuthContext);

  return (
    <All>
      <Preparing>
        <p>Preparando:</p>
        {notReadyRequests.map((main) => (
          <Name key={main.idR}>
            <p>{main.nameClient}</p>
          </Name>
        ))}
      </Preparing>
      <Sidebar></Sidebar>
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
    </All>
  );
}
