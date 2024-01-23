import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import ReadyWithdrawal from "../Return/withdrawal/ReadyWithdrawal";
import { All ,Sidebar} from "../assets/StylesPages/withdrawal";
import PreparingWithdrawal from "../Return/withdrawal/PreparingKitchen";
export default function Withdrawal() {
  const { notReadyRequests, showOnly2hours } = useContext(AuthContext);

  return (
    <All>
      <PreparingWithdrawal notReadyRequests={notReadyRequests} />
      <Sidebar></Sidebar>
      <ReadyWithdrawal showOnly2hours={showOnly2hours} />
    </All>
  );
}
