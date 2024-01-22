
import {
  Additional,
  Bacon,
  NameQuantity,
  Butons,
  Select,
  Cheddar,
  Sauce,
} from "../../assets/StylesPages/revision";

export default function AdditionalRevision(
  setCheddarSelected,
  cheddarSelected,
  Cheddars,
  setSauceSelected,
  sauceSelected,
  Barvecue
) {
  return (
    <Additional>
      <h1>Adicionais</h1>
      <h2>
        Selecione os ingredientes que voê quer adicionar a mais no seu lanche
      </h2>
      <Bacon onClick={() => setBaconSelected(!baconSelected)}>
        <img src={Bacons} alt="" />
        <NameQuantity>
          <h1>Bacon</h1>
          <h2>10g</h2>
        </NameQuantity>
        <Butons>
          <Select>
            <p>R$ 1.00</p>
            <div
              style={{
                backgroundColor: baconSelected ? "#2E5D15" : "#FFFFFF",
              }}
            ></div>
          </Select>
        </Butons>
      </Bacon>
      <Cheddar onClick={() => setCheddarSelected(!cheddarSelected)}>
        <img src={Cheddars} alt="" />
        <NameQuantity>
          <h1>Cheddar</h1>
          <h2>10g</h2>
        </NameQuantity>
        <Butons>
          <Select>
            <p>R$ 1.00</p>
            <div
              style={{
                backgroundColor: cheddarSelected ? "#2E5D15" : "#FFFFFF",
              }}
            ></div>
          </Select>
        </Butons>
      </Cheddar>
      <Sauce onClick={() => setSauceSelected(!sauceSelected)}>
        <img src={Barvecue} alt="" />
        <NameQuantity>
          <h1>Molho acompanhamento</h1>
          <h2>Barbecue</h2>
        </NameQuantity>
        <Butons>
          <Select>
            <p>R$ 1.00</p>
            <div
              style={{
                backgroundColor: sauceSelected ? "#2E5D15" : "#FFFFFF",
              }}
            ></div>
          </Select>
        </Butons>
      </Sauce>
    </Additional>
  );
}
