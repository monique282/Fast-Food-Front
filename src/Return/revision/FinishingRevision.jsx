import IWantThese from "../../Functionality/IWantThese";
import {
  Finishing,
  RemoveOrderFromList,
  AddProducttoList,
} from "../../assets/StylesPages/revision";
export default function FinishingRevision(
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
  observationText
) {
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
  );
}
