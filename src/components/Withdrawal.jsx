import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/authContext";

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
                  Desculpe, seu pedido não foi preparado,
                  entre em contato com o estabelecimento para solucionar o
                  problema.
                </h1>
              </ReadyName>
            )}
          </>
        ))}
      </Ready>
    </All>
  );
}

const All = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
`;
const Preparing = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 7%;
  margin-left: 7%;
  p {
    font-family: "Varela Round";
    font-size: 24px;
    color: black;
    font-weight: bold;
  }
`;
const Sidebar = styled.div`
  width: 1px;
  background-color: black;
  color: #ffffff;
  padding: 2px;
  margin-top: 7%;
  border-radius: 10px;
`;
const Ready = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 7%;
  margin-left: 4%;
  p {
    font-family: "Varela Round";
    font-size: 24px;
    color: black;
    font-weight: bold;
  }
`;
const Name = styled.div`
  width: 90%;
  height: 100%;
  border: none;
  border-radius: 10px;
  display: flex;
  margin-top: 5%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 2%;
    font-family: "Varela Round";
    font-size: 50px;
    color: #9f9f9f;
  }
`;
const ReadyName = styled.div`
  width: 90%;
  height: 100%;
  border: none;
  border-radius: 10px;
  display: flex;
  margin-top: 5%;
  font-weight: bold;
  flex-direction: column;
  p {
    margin-top: 2%;
    font-family: "Varela Round";
    font-size: 50px;
  }
  h1 {
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    font-weight: bold;
    margin-top: 1%;
    margin-bottom: 5%;
  }
  h2 {
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    margin-top: 1%;
    margin-bottom: 1%;
  }
`;
