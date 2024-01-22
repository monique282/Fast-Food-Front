import {
    PurchaseSummary,
    DescriptionPrice,
    Summary,
    PriceDescription,
    Divider,
    FinalValue,
    Amount,
  } from "../../assets/StylesPages/revision";
  
  export default function PurchaseSummaryRevision(
    counter,
    ProductSpecific,
    baconSelected,
    cheddarSelected,
    sauceSelected
  ) {
    return (
      <PurchaseSummary>
        <DescriptionPrice>
          <Summary>
            {counter}x {ProductSpecific.name}
          </Summary>
          <PriceDescription>
            R$ {(ProductSpecific.price * counter).toFixed(2)}
          </PriceDescription>
        </DescriptionPrice>
        {baconSelected === true && (
          <DescriptionPrice>
            <Summary>1x Bacon 10g</Summary>
            <PriceDescription>R$ 1.00</PriceDescription>
          </DescriptionPrice>
        )}
        {cheddarSelected === true && (
          <DescriptionPrice>
            <Summary>1x Chedar 10g</Summary>
            <PriceDescription>R$ 1.00</PriceDescription>
          </DescriptionPrice>
        )}
        {sauceSelected === true && (
          <DescriptionPrice>
            <Summary>1x Molho acompanhamento Barbecue</Summary>
            <PriceDescription>R$ 1.00</PriceDescription>
          </DescriptionPrice>
        )}
        <Divider></Divider>
        <FinalValue>
          <h1>Total do pedido:</h1>
          <Amount>
            R${" "}
            {(
              ProductSpecific.price * counter +
              (baconSelected ? 1 : 0) +
              (cheddarSelected ? 1 : 0) +
              (sauceSelected ? 1 : 0)
            ).toFixed(2)}
          </Amount>
        </FinalValue>
      </PurchaseSummary>
    );
  }
  