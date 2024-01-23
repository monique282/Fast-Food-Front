// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
export default function SelectedCategoryDessertHome({
  selectedCategory,
  desser,
  ordereIds,
  ShowProductDetails,
}) {
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
