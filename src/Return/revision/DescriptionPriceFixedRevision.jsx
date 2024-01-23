import {
  DescriptionPrice,
  Summary,
  PriceDescription,
} from "../../assets/StylesPages/revision";

export default function DescriptionPriceFixedRevision(
    baconSelected,
    cheddarSelected,
    sauceSelected
) {
  return (
    <>
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
    </>
  );
}
