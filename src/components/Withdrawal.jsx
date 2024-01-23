import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { All, Sidebar } from "../assets/StylesPages/withdrawal";
import PreparingWithdrawal from "../Return/withdrawal/PreparingWithdrawal";
import ReadyWithdrawal from "../Return/withdrawal/ReadyWithdrawal";
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
