import { Ready } from "../../assets/StylesPages/withdrawal";
import OrderReadyFalseKitchen from "./OrderReadyFalseKitcehn";
import OrderReadyTrueKitchen from "./OrderReadyTrueKitchen";
export default function ReadyKitchen({setLoading,showOnly2hours}) {
  console.log(showOnly2hours)
  return (
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
  );
}
