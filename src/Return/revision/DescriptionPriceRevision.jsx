import {
    DescriptionPrice,
    Summary,
    PriceDescription,
  } from "../../assets/StylesPages/revision";
  
  export default function DescriptionPriceRevision(
    counter,
    ProductSpecific,
  ) {
    return (
        <DescriptionPrice>
        <Summary>
          {counter}x {ProductSpecific.name}
        </Summary>
        <PriceDescription>
          R$ {(ProductSpecific.price * counter).toFixed(2)}
        </PriceDescription>
      </DescriptionPrice>
    );
  }
  