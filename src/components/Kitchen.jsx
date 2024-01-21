import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { HiOutlineCheck, HiOutlineX } from "react-icons/hi";
import axios from "axios";
import {
  All,
  Preparing,
  Sidebar,
  Ready,
  OrderReady,
  AllRequest,
  Order,
  Ob,
  Observation,
  P,
  NameCode,
  Butons,
  Not,
  Ok,
} from "../assets/StylesPages/kitchen";
import updateError from "../Functionality/ErrorKitchen";
import updateReady from "../Functionality/ReadyKitchen";
import updateDelete from "../Functionality/DeletKitchen";
import theLastTwoHoursKitchen from "../Functionality/TheLastTwoHoursKitchen";

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
        theLastTwoHoursKitchen((showRequest.filter((item) => item.ready === true)), setShowOnly2hours);
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


  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <All>
      <Preparing>
        <p>Preparando:</p>
        {notReadyRequests.map((main) => (
          <AllRequest key={main.idR}>
            <Order>
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
                <Not onClick={() => {
                   updateError(main.code, setLoading);
                   updateReady(main.code, setLoading);
                }}>
                  <HiOutlineX
                    style={{ width: "30px", height: "30px", color: "#CF3C29" }}
                  />
                </Not>
                <Ok
                  onClick={() => {
                    updateReady(main.code, setLoading);
                  }}
                >
                  <HiOutlineCheck
                    style={{ width: "30px", height: "30px", color: "#56A211" }}
                  />
                </Ok>
              </Butons>
            </Order>
            {main.observationText.length !== 0 && (
              <>
                <Ob>Observações:</Ob>
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
                  <Not onClick={() => {
                        updateDelete(main.code, setLoading);
                  }}>
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
