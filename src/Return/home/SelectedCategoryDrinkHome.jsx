// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
import PropTypes from "prop-types";

export default function SelectedCategoryDrinkHome({
  selectedCategory,
  drink,
  ordereIds,
  ShowProductDetails,
}) {
  SelectedCategoryDrinkHome.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    drink: PropTypes.array.isRequired,
    ordereIds: PropTypes.array.isRequired,
    ShowProductDetails: PropTypes.func.isRequired,
  };
  return (
    <>
      {selectedCategory === "DRINK" &&
        drink.map((main) => (
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
