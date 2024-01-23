import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import Cheddars from "../assets/images/cheddar.png";
import Barvecue from "../assets/images/barbecue.png";
import { All, BoxAll, Divider } from "../assets/StylesPages/revision";
import checkingIfIDasAlreadyBeenSelected from "../Functionality/CheckingIfIDasAlreadyBeenSelected";
import HeaderRevision from "../Return/revision/HeaderRevision";
import ExitRevision from "../Return/revision/ExitRevision";
import ProductOverviewRevision from "../Return/revision/ProductOverviewRevision";
import AdditionalRevision from "../Return/revision/AdditionalRevision";
import Observationrevision from "../Return/revision/Observationrevision";
import PurchaseSummaryRevision from "../Return/revision/PurchaseSummaryRevision";
import DescriptionPriceRevision from "../Return/revision/DescriptionPriceRevision";
import DescriptionPriceFixedRevision from "../Return/revision/DescriptionPriceFixedRevision";
import FinalValueRevision from "../Return/revision/FinalValueRevision";
import FinishingRevision from "../Return/revision/FinishingRevision";

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
            setSauceSelected={setSauceSelected}
            sauceSelected={sauceSelected}
            setBaconSelected={setBaconSelected}
            baconSelected={baconSelected}
          />
          <Observationrevision
            observationText={observationText}
            setObservationText={setObservationText}
          />
          <PurchaseSummaryRevision
            counter={counter}
            ProductSpecific={ProductSpecific}
            baconSelected={baconSelected}
            cheddarSelected={cheddarSelected}
            sauceSelected={sauceSelected}
          />
          <DescriptionPriceRevision
            counter={counter}
            ProductSpecific={ProductSpecific}
          />
          <DescriptionPriceFixedRevision
            baconSelected={baconSelected}
            cheddarSelected={cheddarSelected}
            sauceSelected={sauceSelected}
          />
          <Divider></Divider>
          <FinalValueRevision
            baconSelected={baconSelected}
            cheddarSelected={cheddarSelected}
            sauceSelected={sauceSelected}
            ProductSpecific={ProductSpecific}
            counter={counter}
          />
          <FinishingRevision
            baconSelected={baconSelected}
            cheddarSelected={cheddarSelected}
            sauceSelected={sauceSelected}
            ProductSpecific={ProductSpecific}
            counter={counter}
            setCounter={setCounter}
            setBaconSelected={setBaconSelected}
            setCheddarSelected={setCheddarSelected}
            setSauceSelected={setSauceSelected}
            setObservationText={setObservationText}
            setShowReview={setShowReview}
            order={order}
            id={id}
            setOrder={setOrder}
            followUp={followUp}
            observationText={observationText}
          />
        </BoxAll>
      </All>
    );
  }
}
