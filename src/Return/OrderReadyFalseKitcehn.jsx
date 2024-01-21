import React from "react";
import { OrderReady, NameCode, Butons, Not } from "../assets/StylesPages/kitchen";
import { HiOutlineX } from "react-icons/hi";
import updateDelete from "../Functionality/DeletKitchen";

function OrderReadyFalseKitchen({ main, setLoading }) {
  return (
    <OrderReady
      key={main.idR}
      style={{ border: "1px solid #67ad68" }}
    >
      <img src={main.image} alt="" />
      <NameCode>
        <h1>
          {main.code} - {main.nameClient}
        </h1>
        <h2>{main.name}</h2>
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

export default OrderReadyFalseKitchen;
