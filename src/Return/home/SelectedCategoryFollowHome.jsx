// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
import PropTypes from "prop-types";

export default function SelectedCategoryFollowHome({
  selectedCategory,
  follo,
  ordereIds,
  ShowProductDetails,
}) {
  SelectedCategoryFollowHome.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    follo: PropTypes.array.isRequired,
    ordereIds: PropTypes.array.isRequired,
    ShowProductDetails: PropTypes.func.isRequired,
  };
  return (
    <>
      {selectedCategory === "FOLLOW" &&
        follo.map((main) => (
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
