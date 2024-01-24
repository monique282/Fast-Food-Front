// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
import PropTypes from "prop-types";

export default function SelectedCategoryDessertHome({
  selectedCategory,
  desser,
  ordereIds,
  ShowProductDetails,
}) {
  SelectedCategoryDessertHome.propTypes = {
    selectedCategory: PropTypes.func.isRequired,
    desser: PropTypes.array.isRequired,
    ordereIds: PropTypes.func.isRequired,
    ShowProductDetails: PropTypes.func.isRequired,
  };
  return (
    <>
      {selectedCategory === "DESSERT" &&
        desser.map((main) => (
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
