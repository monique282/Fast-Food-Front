// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  PurchaseSummary,
  DescriptionPrice,
  Summary,
  PriceDescription,
  Divider,
  FinalValue,
  Amount,
} from "../../assets/StylesPages/home";

export default function PurchaseSummaryHome({
    order,
    sumTotal
}) {
  return (
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
  );
}
