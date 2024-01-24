import { Preparing } from "../../assets/StylesPages/withdrawal";
import AllRequestKitchen from "./AllRquestKitchen";
import PropTypes from "prop-types";

export default function PreparingKitchen({ setLoading, notReadyRequests }) {
  PreparingKitchen.propTypes = {
    notReadyRequests: PropTypes.array.isRequired,
    setLoading: PropTypes.func.isRequired,
  };
  return (
    <Preparing>
      <p>Preparando:</p>
      {notReadyRequests.map((main) => (
        <AllRequestKitchen key={main.idR} main={main} setLoading={setLoading} />
      ))}
    </Preparing>
  );
}
