import { Observation, Search } from "../assets/StylesPages/revision";

export default function Observationrevision(
  observationText,
  setObservationText
) {
  return (
    <Observation>
      <h1>Observações</h1>
      <Search
        placeholder="Adicione uma observação ao pedido"
        type="text"
        value={observationText}
        onChange={(e) => setObservationText(e.target.value)}
      ></Search>
    </Observation>
  );
}
