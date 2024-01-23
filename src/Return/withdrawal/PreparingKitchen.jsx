import { Name, Preparing} from "../../assets/StylesPages/withdrawal";
export default function PreparingWithdrawal({ notReadyRequests}) {
  return (
    <Preparing>
    <p>Preparando:</p>
    {notReadyRequests.map((main) => (
      <Name key={main.idR}>
        <p>{main.nameClient}</p>
      </Name>
    ))}
  </Preparing>
  );
}
