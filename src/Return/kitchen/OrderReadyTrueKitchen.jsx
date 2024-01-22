import React from "react";
import {
  OrderReady,
  NameCode,
  Butons,
  Not,
} from "../../assets/StylesPages/kitchen";
import { HiOutlineX } from "react-icons/hi";
import updateDelete from "../../Functionality/DeletKitchen";

function OrderReadyTrueKitchen({ main, setLoading }) {
  return (
    <OrderReady
      key={main.idR}
      style={{
        border: "1px solid #ec5f27",
        backgroundColor: "#fae5e5",
      }}
    >
      <img src={main.image} alt="" />
      <NameCode>
        <h1>
          {main.code} - {main.nameClient}
        </h1>
        <h1 style={{ color: "red" }}>
          Desculpe, seu pedido <h2>{main.name}</h2> não foi preparado, entre em
          contato com o estabelecimento para solucionar o problema.
        </h1>
      </NameCode>
      <Butons>
        <Not
          onClick={() => {
            updateDelete(main.code, setLoading);
          }}
        >
          <HiOutlineX
            style={{
              width: "30px",
              height: "30px",
              color: "#CF3C29",
            }}
          />
        </Not>
      </Butons>
    </OrderReady>
  );
}

export default OrderReadyTrueKitchen;
