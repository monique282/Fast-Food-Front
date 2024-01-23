import selectedSideDishes from "./SelectedSideDishes";

export default function IWantThese(
  {baconSelected,
    followUp,
    order,
    setOrder,
    setCounter,
    setShowReview,
    cheddarSelected,
    sauceSelected,
    ProductSpecific,
    counter,
    observationText}
) {
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
