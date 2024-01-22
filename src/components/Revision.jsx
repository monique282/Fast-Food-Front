import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { HiOutlineX } from "react-icons/hi";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import Bacons from "../assets/images/bacon.png";
import Cheddars from "../assets/images/cheddar.png";
import Barvecue from "../assets/images/barbecue.png";
import {
  All,
  BoxAll,
  Header,
  Exit,
  ProductOverview,
  NameDescriptionQuantity,
  AddQauntity,
  Add,
  Subtract,
  Price,
  Additional,
  Bacon,
  NameQuantity,
  Butons,
  Select,
  Cheddar,
  Sauce,
  Observation,
  Search,
  PurchaseSummary,
  DescriptionPrice,
  Summary,
  PriceDescription,
  Divider,
  FinalValue,
  Amount,
  Finishing,
  RemoveOrderFromList,
  AddProducttoList,
} from "../assets/StylesPages/revision";
import checkingIfIDasAlreadyBeenSelected from "../Functionality/CheckingIfIDasAlreadyBeenSelected";
import Remove from "../Functionality/Removed";
import IWantThese from "../Functionality/IWantThese";

export default function Revision() {
  const {
    products,
    id,
    setShowReview,
    counter,
    setCounter,
    order,
    setOrder,
    baconSelected,
    setBaconSelected,
    cheddarSelected,
    setCheddarSelected,
    sauceSelected,
    setSauceSelected,
    observationText,
    setObservationText,
  } = useContext(AuthContext);

  let followUp = [];

  useEffect(() => {
    checkingIfIDasAlreadyBeenSelected(
      order,
      setCounter,
      setBaconSelected,
      setCheddarSelected,
      setSauceSelected,
      setOrder,
      id
    ),
      id;
  }, []);

  const ProductSpecific = products.find((product) => product.id === id);

  if (products.length === 0) {
    return <All>carregando</All>;
  } else {
    return (
      <All>
        <BoxAll>
          <Header>
            <p>Revise seu pedido!</p>
            <Exit
              onClick={() => {
                setShowReview(false);
              }}
            >
              <HiOutlineX
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#9F9F9F",
                  fontWeight: "bold",
                }}
              />
            </Exit>
          </Header>
          <ProductOverview>
            <img src={ProductSpecific.image} alt=""></img>
            <NameDescriptionQuantity>
              <h1>{ProductSpecific.name}</h1>
              <h2>{ProductSpecific.description}</h2>
              <AddQauntity>
                <Subtract
                  onClick={() => Remove(setShowReview, counter, setCounter)}
                >
                  <CgMathMinus style={{ fontSize: "40px", color: "#FCFDFC" }} />
                </Subtract>
                <p>{counter}</p>
                <Add onClick={() => setCounter(counter + 1)}>
                  <CgMathPlus style={{ fontSize: "40px", color: "#FCFDFC" }} />
                </Add>
              </AddQauntity>
            </NameDescriptionQuantity>
            <Price>R$ {ProductSpecific.price.toFixed(2)}</Price>
          </ProductOverview>
          <Additional>
            <h1>Adicionais</h1>
            <h2>
              Selecione os ingredientes que voê quer adicionar a mais no seu
              lanche
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
          <Observation>
            <h1>Observações</h1>
            <Search
              placeholder="Adicione uma observação ao pedido"
              type="text"
              value={observationText}
              onChange={(e) => setObservationText(e.target.value)}
            ></Search>
          </Observation>
          <PurchaseSummary>
            <DescriptionPrice>
              <Summary>
                {counter}x {ProductSpecific.name}
              </Summary>
              <PriceDescription>
                R$ {(ProductSpecific.price * counter).toFixed(2)}
              </PriceDescription>
            </DescriptionPrice>
            {baconSelected === true && (
              <DescriptionPrice>
                <Summary>1x Bacon 10g</Summary>
                <PriceDescription>R$ 1.00</PriceDescription>
              </DescriptionPrice>
            )}
            {cheddarSelected === true && (
              <DescriptionPrice>
                <Summary>1x Chedar 10g</Summary>
                <PriceDescription>R$ 1.00</PriceDescription>
              </DescriptionPrice>
            )}
            {sauceSelected === true && (
              <DescriptionPrice>
                <Summary>1x Molho acompanhamento Barbecue</Summary>
                <PriceDescription>R$ 1.00</PriceDescription>
              </DescriptionPrice>
            )}
            <Divider></Divider>
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
          </PurchaseSummary>
          <Finishing>
            <RemoveOrderFromList
              onClick={() => {
                setCounter(1);
                setBaconSelected(false);
                setCheddarSelected(false);
                setSauceSelected(false);
                setObservationText("");
                setShowReview(false);
                const updatedOrder = order.filter(
                  (item) => item.ProductSpecific.id !== id
                );
                setOrder(updatedOrder);
              }}
            >
              Remover produto
            </RemoveOrderFromList>
            <AddProducttoList
              onClick={() =>
                IWantThese(
                  baconSelected,
                  followUp,
                  order,
                  setOrder,
                  setCounter,
                  setShowReview,
                  cheddarSelected,
                  sauceSelected,
                  ProductSpecific,
                  counter,
                  observationText
                )
              }
            >
              Adicionar produto
            </AddProducttoList>
          </Finishing>
        </BoxAll>
      </All>
    );
  }
}
