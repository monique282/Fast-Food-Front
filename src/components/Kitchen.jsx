import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { All, Preparing, Sidebar, Ready } from "../assets/StylesPages/kitchen";
import theLastTwoHoursKitchen from "../Functionality/TheLastTwoHoursKitchen";
import AllRequestKitchen from "../Return/kitchen/AllRquestKitchen";
import OrderReadyFalseKitchen from "../Return/kitchen/OrderReadyFalseKitcehn";
import OrderReadyTrueKitchen from "../Return/kitchen/OrderReadyTrueKitchen";

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
        theLastTwoHoursKitchen(
          showRequest.filter((item) => item.ready === true),
          setShowOnly2hours
        );
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
          <AllRequestKitchen
            key={main.idR}
            main={main}
            setLoading={setLoading}
          />
        ))}
      </Preparing>
      <Sidebar></Sidebar>
      <Ready>
        <p>Pronto:</p>
        {showOnly2hours.map((main) => (
          <>
            {main.error === false && (
              <OrderReadyFalseKitchen
                key={main.idR}
                main={main}
                setLoading={setLoading}
              />
            )}
            {main.error === true && (
              <OrderReadyTrueKitchen
                key={main.idR}
                main={main}
                setLoading={setLoading}
              />
            )}
          </>
        ))}
      </Ready>
    </All>
  );
};