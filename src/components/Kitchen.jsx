import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { All, Sidebar } from "../assets/StylesPages/kitchen";
import theLastTwoHoursKitchen from "../Functionality/TheLastTwoHoursKitchen";
import ReadyKitchen from "../Return/kitchen/ReadyKitchen";
import PreparingKitchen from "../Return/kitchen/PreparingKitchen";

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
      <PreparingKitchen
        setLoading={setLoading}
        notReadyRequests={notReadyRequests}
      />
      <Sidebar></Sidebar>
      <ReadyKitchen
        setLoading={setLoading}
        showOnly2hours={showOnly2hours}
      />
    </All>
  );
}
