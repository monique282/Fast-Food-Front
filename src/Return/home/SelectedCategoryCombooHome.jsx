// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
import PropTypes from "prop-types";

export default function SelectedCategoryCombooHome({
  selectedCategory,
  comboo,
  ordereIds,
  ShowProductDetails,
}) {
  SelectedCategoryCombooHome.propTypes = {
    selectedCategory: PropTypes.func.isRequired,
    comboo: PropTypes.array.isRequired,
    ordereIds: PropTypes.func.isRequired,
    ShowProductDetails: PropTypes.func.isRequired,
  };
  return (
    <>
      {selectedCategory === "COMBOO" &&
        comboo.map((main) => (
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
