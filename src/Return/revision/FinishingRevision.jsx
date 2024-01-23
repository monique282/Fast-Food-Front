import IWantThese from "../../Functionality/IWantThese";
import selectedSideDishes from "../../Functionality/SelectedSideDishes";
import {
  Finishing,
  RemoveOrderFromList,
  AddProducttoList,
} from "../../assets/StylesPages/revision";

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
