// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Finishing,
  RemoveOrderFromList,
  AddProducttoList,
} from "../../assets/StylesPages/home";

export default function FinishingHome({ order, setShowPayment }) {
  return (
    <Finishing>
      <RemoveOrderFromList
        onClick={() => {
          location.reload();
        }}
      >
        Cancelar
      </RemoveOrderFromList>
      {order.length > 0 && (
        <AddProducttoList
          style={{
            backgroundColor: "#2E5D15",
            border: "2px solid #2E5D15",
          }}
          onClick={() => {
            setShowPayment(true);
          }}
        >
          Finalizar pedido
        </AddProducttoList>
      )}
      {order.length === 0 && (
        <AddProducttoList
          style={{
            backgroundColor: "#9F9F9F",
            border: "2px solid #9F9F9F",
          }}
        >
          Finalizar pedido
        </AddProducttoList>
      )}
    </Finishing>
  );
}
