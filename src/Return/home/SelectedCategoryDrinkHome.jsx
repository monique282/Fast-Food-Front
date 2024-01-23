// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
export default function SelectedCategoryDrinkHome({
  selectedCategory,
  drink,
  ordereIds,
  ShowProductDetails,
}) {
  return (
    <>
      {selectedCategory === "SNACKS" &&
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
