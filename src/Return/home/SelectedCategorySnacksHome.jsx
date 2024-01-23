// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
export default function SelectedCategorySnacksHome({
  selectedCategory,
  snacks,
  ordereIds,
  ShowProductDetails,
}) {
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
