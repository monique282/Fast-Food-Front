import React from "react";
import {
  TotalPaymente,
  Order,
  PurchaseSummary,
  DescriptionPrice,
  Summary,
  PriceDescription,
  Divider,
  FinalValue,
  Amount,
  CodeName,
  Name,
  Code,
} from "../assets/StylesPages/payment";

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
          <PurchaseSummary>
            {order.map((main) => (
              <React.Fragment key={main.ProductSpecific.id}>
                <DescriptionPrice>
                  <Summary>
                    {main.counter}x {main.ProductSpecific.name}
                  </Summary>
                  <PriceDescription>
                    R$ {(main.ProductSpecific.price * main.counter).toFixed(2)}
                  </PriceDescription>
                </DescriptionPrice>
                {main.followUp.length > 0 &&
                  main.followUp.map((followUpItem) => (
                    <DescriptionPrice key={followUpItem.id}>
                      <Summary>{followUpItem.item}</Summary>
                      <PriceDescription>{followUpItem.price}</PriceDescription>
                    </DescriptionPrice>
                  ))}
              </React.Fragment>
            ))}

            <Divider></Divider>
            <FinalValue>
              <h1>Total do pedido:</h1>
              <Amount>R$ {sumTotal.toFixed(2)} </Amount>
            </FinalValue>
          </PurchaseSummary>
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
