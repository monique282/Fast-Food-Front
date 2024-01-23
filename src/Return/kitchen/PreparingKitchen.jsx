import { Preparing} from "../../assets/StylesPages/withdrawal";
import AllRequestKitchen from "./AllRquestKitchen";
export default function PreparingKitchen({setLoading, notReadyRequests}) {
  return (
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
  );
}
