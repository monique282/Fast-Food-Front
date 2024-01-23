import { FinalValue, Amount } from "../../assets/StylesPages/revision";

export default function FinalValueRevision(
  {baconSelected,
    cheddarSelected,
    sauceSelected,
    ProductSpecific,
    counter}
) {
  return (
    <FinalValue>
      <h1>Total do pedido:</h1>
      <Amount>
        R${" "}
        {(
          ProductSpecific.price * counter +
          (baconSelected ? 1 : 0) +
          (cheddarSelected ? 1 : 0) +
          (sauceSelected ? 1 : 0)
        ).toFixed(2)}
      </Amount>
    </FinalValue>
  );
}
