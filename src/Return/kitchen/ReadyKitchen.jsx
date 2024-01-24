import { Ready } from "../../assets/StylesPages/withdrawal";
import OrderReadyFalseKitchen from "./OrderReadyFalseKitcehn";
import OrderReadyTrueKitchen from "./OrderReadyTrueKitchen";
import PropTypes from "prop-types";

export default function ReadyKitchen({ setLoading, showOnly2hours }) {
  ReadyKitchen.propTypes = {
    showOnly2hours: PropTypes.array.isRequired,
    setLoading: PropTypes.func.isRequired,
  };
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
