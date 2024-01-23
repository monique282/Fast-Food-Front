export default function checkingIfIDasAlreadyBeenSelected(
  order,
  setCounter,
  setBaconSelected,
  setCheddarSelected,
  setSauceSelected,
  setOrder,
  id
) {
  const corresponding = order.find((item) => item.ProductSpecific.id === id);
  if (corresponding) {
    setCounter(corresponding.counter);
    setBaconSelected(corresponding.followUp.some((item) => item.id === 1));
    setCheddarSelected(corresponding.followUp.some((item) => item.id === 2));
    setSauceSelected(corresponding.followUp.some((item) => item.id === 3));
    const updatedOrder = order.filter((item) => item.ProductSpecific.id !== id);
    setOrder(updatedOrder);
  }
}
