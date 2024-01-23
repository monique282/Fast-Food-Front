// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaWallet } from "react-icons/fa6";
import PropTypes from "prop-types";

import {
  TotalPaymente,
  Order,
  CodeName,
  Name,
  Code,
} from "../../assets/StylesPages/payment";
import PurchaseSummaryPayment from "./PurchaseSummaryPayment";

function TotalPaymentePayment({
  order,
  nameClient,
  code,
  sumTotal,
  setNameClient,
}) {
  return (
    <TotalPaymente>
      <p>
        <FaWallet
          style={{
            color: "#2E5D15",
            marginRight: "3%",
            width: "30px",
            height: "30px",
          }}
        />
        Pagamento
      </p>
      <Order>
        <p>Resumo da compra</p>
        {order && order.length > 0 && (
          <PurchaseSummaryPayment order={order} sumTotal={sumTotal} />
        )}
        <CodeName>
          <Name>
            <p>Nome do cliente</p>
            <input
              placeholder="Primeiro nome"
              type="text"
              value={nameClient}
              onChange={(e) => setNameClient(e.target.value)}
            ></input>
          </Name>
          <Code>
            <p>Código</p>
            {!code[0].idcode === 1 ? <div>1</div> : <div>{code[0].idcode}</div>}
          </Code>
        </CodeName>
      </Order>
    </TotalPaymente>
  );
}

export default TotalPaymentePayment;
