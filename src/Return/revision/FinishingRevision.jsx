// eslint-disable-next-line no-unused-vars
import React from "react";
import selectedSideDishes from "../../Functionality/SelectedSideDishes";
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
    selectedSideDishes(baconSelected, followUp, cheddarSelected, sauceSelected);
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
    setOrder(newOrder);
    setCounter(1);
    setShowReview(false);
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
