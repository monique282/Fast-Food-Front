import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/authContext";
import { HiOutlineCheck } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import axios from "axios";

export default function Kitchen() {
  const {
    showRequest,
    setShowRequest,
    order,
    notReadyRequests,
    setNotReadyRequests,
    showOnly2hours,
    setShowOnly2hours,
  } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function requisition() {
      const urlRequest = `${import.meta.env.VITE_API_URL}/request`;

      const promise = axios.get(urlRequest);
      promise.then((response) => {
        setShowRequest(response.data);
        setNotReadyRequests(showRequest.filter((item) => item.ready === false));
        setLoading(false);
        theLastTwoHours(showRequest.filter((item) => item.ready === true));
      });
      promise.catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
    }
    requisition();

    const intervalId = setInterval(requisition, 30 * 1000);

    return () => clearInterval(intervalId);
  }, [order, loading]);

  function theLastTwoHours(readyRequests) {
    const twoHoursInMilliseconds = 2 * 60 * 60 * 1000;
    const now = new Date();
    const ordersInLastTwoHours = readyRequests.filter((pedido) => {
      const dateCreation = new Date(pedido.createdAt);
      return now - dateCreation <= twoHoursInMilliseconds;
    });

    const orderedByDate = ordersInLastTwoHours.sort((a, b) => {
      const dataA = new Date(a.createdAt);
      const dataB = new Date(b.createdAt);
      return dataB - dataA;
    });

    setShowOnly2hours(orderedByDate);
  }

  function ready(code) {
    const urlRequest = `${import.meta.env.VITE_API_URL}/updateReady`;
    const data = {
      code,
    };
    const promise = axios.post(urlRequest, data);
    promise.then((response) => {
      setLoading(true);
    });
    promise.catch((err) => {
      console.log(err.response);
    });
  }

  function error(code) {
    const urlError = `${import.meta.env.VITE_API_URL}/updateError`;
    const data = {
      code,
    };
    const promise = axios.post(urlError, data);
    promise.then((response) => {
      setLoading(true);
    });
    promise.catch((err) => {
      console.log(err.response);
    });
  }

  function delet(code) {
    const urlDelete = `${import.meta.env.VITE_API_URL}/updateDelete`;
    const data = {
      code,
    };
    const promise = axios.delete(urlDelete, {data});
    promise.then((response) => {
      setLoading(true);
    });
    promise.catch((err) => {
      console.log(err.response);
    });
  }

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <All>
      <Preparing>
        <p>Preparando:</p>
        {notReadyRequests.map((main) => (
          <AllRequest>
            <Order key={main.idR}>
              <img src={main.image} alt="" />
              <NameCode>
                <h1>
                  {main.code} - {main.nameClient}
                </h1>
                <h2>{main.name}</h2>
                {main.followUps.length !== 0 &&
                  main.followUps.map((followUp) => (
                    <h2 key={followUp.id}>{followUp.item}</h2>
                  ))}
              </NameCode>
              <Butons>
                <Not onClick={() => error(main.code)}>
                  <HiOutlineX
                    style={{ width: "30px", height: "30px", color: "#CF3C29" }}
                  />
                </Not>
                <Ok onClick={() => ready(main.code)}>
                  <HiOutlineCheck
                    style={{ width: "30px", height: "30px", color: "#56A211" }}
                  />
                </Ok>
              </Butons>
            </Order>
            {main.observationText.length !== 0 && (
              <>
                <OB>Observações:</OB>
                <Observation>
                  <P>{main.observationText}</P>
                </Observation>
              </>
            )}
          </AllRequest>
        ))}
      </Preparing>
      <Sidebar></Sidebar>
      <Ready>
        <p>Pronto:</p>
        {showOnly2hours.map((main) => (
          <>
            {main.error === false && (
              <OrderReady
                key={main.idR}
                style={{ border: "1px solid #67ad68" }}
              >
                <img src={main.image} alt="" />
                <NameCode>
                  <h1>
                    {main.code} - {main.nameClient}
                  </h1>
                  <h2>{main.name}</h2>
                </NameCode>
                <Butons>
                  <Not onClick={() => delet(main.code)}>
                    <HiOutlineX
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "#CF3C29",
                      }}
                    />
                  </Not>
                </Butons>
              </OrderReady>
            )}

            {main.error === true && (
              <OrderReady
                key={main.idR}
                style={{
                  border: "1px solid #ec5f27",
                  backgroundColor: "#fae5e5",
                }}
              >
                <img src={main.image} alt="" />
                <NameCode>
                  <h1>
                    {main.code} - {main.nameClient}
                  </h1>
                  <h1 style={{ color: "red" }}>
                    Desculpe, seu pedido <h2>{main.name}</h2> não foi preparado,
                    entre em contato com o estabelecimento para solucionar o
                    problema.
                  </h1>
                </NameCode>
                <Butons>
                  <Not onClick={() => delet(main.code)}>
                    <HiOutlineX
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "#CF3C29",
                      }}
                    />
                  </Not>
                </Butons>
              </OrderReady>
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
  margin-bottom: 7%;
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
  margin-bottom: 7%;
  p {
    font-family: "Varela Round";
    font-size: 24px;
    color: black;
    font-weight: bold;
  }
`;
const OrderReady = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  margin-top: 5%;
  img {
    width: 100px;
    height: 80px;
    margin: 2%;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
`;
const AllRequest = styled.div`
  width: 90%;
  height: 100%;
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
`;
const Order = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
  display: flex;
  text-align: center;
  margin-top: 5%;
  img {
    width: 100px;
    height: 80px;
    margin: 2%;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
`;
const OB = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2%;
  font-family: "Varela Round";
  font-size: 15px;
  color: black;
  font-weight: bold;
  margin-left: 3%;
`;
const Observation = styled.div`
  width: 92%;
  height: 90%;
  border: 1px solid #a4a4a4;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  margin-top: 1%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 3%;
`;
const P = styled.div`
  width: 95%;
  height: 90%;
  font-family: "Varela Round";
  font-size: 15px;
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 3%;
  padding-bottom: 5%;
  margin-bottom: 10px;
`;
const NameCode = styled.div`
  width: 200%;
  display: flex;
  flex-direction: column;
  h1 {
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    font-weight: bold;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  h2 {
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    margin-top: 2%;
    margin-bottom: 3%;
  }
`;
const Butons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Not = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fae5e5;
`;

const Ok = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5f5e6;
`;
