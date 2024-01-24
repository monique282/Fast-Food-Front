// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  DescriptionPrice,
  Summary,
  PriceDescription,
} from "../../assets/StylesPages/revision";
import PropTypes from "prop-types";

export default function DescriptionPriceRevision({ counter, ProductSpecific }) {
  DescriptionPriceRevision.propTypes = {
    counter: PropTypes.number.isRequired,
    ProductSpecific: PropTypes.object.isRequired,
  };
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
