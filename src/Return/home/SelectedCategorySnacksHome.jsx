// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
import PropTypes from "prop-types";

export default function SelectedCategorySnacksHome({
  selectedCategory,
  snacks,
  ordereIds,
  ShowProductDetails,
}) {
  SelectedCategorySnacksHome.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    snacks: PropTypes.array.isRequired,
    ordereIds: PropTypes.array.isRequired,
    ShowProductDetails: PropTypes.func.isRequired,
  };
  return (
    <>
      {selectedCategory === "SNACKS" &&
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
