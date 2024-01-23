// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
export default function SelectedCategoryCombooHome({
  selectedCategory,
  comboo,
  ordereIds,
  ShowProductDetails,
}) {
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
