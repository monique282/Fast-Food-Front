// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  DescriptionPrice,
  Summary,
  PriceDescription,
} from "../../assets/StylesPages/revision";
import PropTypes from "prop-types";

export default function DescriptionPriceFixedRevision({
  baconSelected,
  cheddarSelected,
  sauceSelected,
}) {
  DescriptionPriceFixedRevision.propTypes = {
    cheddarSelected: PropTypes.bool.isRequired,
    sauceSelected: PropTypes.bool.isRequired,
    baconSelected: PropTypes.bool.isRequired,
  };
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
