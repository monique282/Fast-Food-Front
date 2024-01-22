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
import HeaderRevision from "../Return/revision/HeaderRevision";
import ExitRevision from "../Return/revision/ExitRevision";
import ProductOverviewRevision from "../Return/revision/ProductOverviewRevision";
import AdditionalRevision from "../Return/revision/AdditionalRevision";

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
          <HeaderRevision setShowReview={setShowReview} />
          <p>Revise seu pedido!</p>
          <ExitRevision setShowReview={setShowReview} />
          <ProductOverviewRevision
            ProductSpecific={ProductSpecific}
            setShowReview={setShowReview}
            counter={counter}
            setCounter={setCounter}
          />
          <AdditionalRevision
            setCheddarSelected={setCheddarSelected}
            cheddarSelected={cheddarSelected}
            Cheddars={Cheddars}
            setSauceSelected={setSauceSelected}
            sauceSelected={sauceSelected}
            Barvecue={Barvecue}
          />

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
