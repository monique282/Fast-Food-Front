// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
import PropTypes from "prop-types";

export default function ProductFilteredFalseHome({
  productFiltered,
  snacks,
  ordereIds,
  ShowProductDetails,
}) {
  ProductFilteredFalseHome.propTypes = {
    productFiltered: PropTypes.func.isRequired,
    snacks: PropTypes.func.isRequired,
    main: PropTypes.array.isRequired,
    ordereIds: PropTypes.func.isRequired,
    ShowProductDetails: PropTypes.func.isRequired,
  };
  return (
    <>
      {!productFiltered &&
        snacks.map((main) => (
          <ProcuctBoxHome
            key={main.id}
            main={main}
            ordereIds={ordereIds}
            ShowProductDetails={ShowProductDetails}
          />
        ))}
    </>
  );
}
