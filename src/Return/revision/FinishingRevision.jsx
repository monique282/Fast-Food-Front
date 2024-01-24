// eslint-disable-next-line no-unused-vars
import React from "react";

import {
  Finishing,
  RemoveOrderFromList,
  AddProducttoList,
} from "../../assets/StylesPages/revision";
import PropTypes from "prop-types";

export default function FinishingRevision({
  baconSelected,
  cheddarSelected,
  sauceSelected,
  ProductSpecific,
  counter,
  setCounter,
  setBaconSelected,
  setCheddarSelected,
  setSauceSelected,
  setObservationText,
  setShowReview,
  order,
  id,
  setOrder,
  followUp,
  observationText,
}) {
  FinishingRevision.propTypes = {
    baconSelected: PropTypes.bool.isRequired,
    cheddarSelected: PropTypes.bool.isRequired,
    sauceSelected: PropTypes.bool.isRequired,
    ProductSpecific: PropTypes.object.isRequired,
    counter: PropTypes.number.isRequired,
    setCounter: PropTypes.func.isRequired,
    setBaconSelected: PropTypes.func.isRequired,
    setCheddarSelected: PropTypes.func.isRequired,
    setSauceSelected: PropTypes.func.isRequired,
    setObservationText: PropTypes.func.isRequired,
    setShowReview: PropTypes.func.isRequired,
    order: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    setOrder: PropTypes.func.isRequired,
    followUp: PropTypes.array.isRequired,
    observationText: PropTypes.string.isRequired,
  };
  function IWantThese() {
    if (baconSelected === true) {
      followUp = [
        ...followUp,
        { id: 1, item: "1x Bacon 10g", price: "R$1.00" },
      ];
    }
    if (cheddarSelected === true) {
      followUp = [
        ...followUp,
        { id: 2, item: "1x Cheddar 10g", price: "R$1.00" },
      ];
    }
    if (sauceSelected === true) {
      followUp = [
        ...followUp,
        { id: 3, item: "1x Molho acompanhamento Barbecue", price: "R$1.00" },
      ];
    }
    const total = (
      ProductSpecific.price * counter +
      (baconSelected ? 1 : 0) +
      (cheddarSelected ? 1 : 0) +
      (sauceSelected ? 1 : 0)
    ).toFixed(2);
    const orderDetails = {
      ProductSpecific,
      counter,
      followUp,
      observationText,
      total,
    };
    const newOrder = [...order, orderDetails];
    console.log(orderDetails);
    setOrder(newOrder);
    setCounter(1);
    setShowReview(false);
    setBaconSelected(false);
    setCheddarSelected(false);
    setSauceSelected(false);
  }

  return (
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
      <AddProducttoList onClick={() => IWantThese()}>
        Adicionar produto
      </AddProducttoList>
    </Finishing>
  );
}
