// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
export default function ProductFilteredFalseHome({
  productFiltered,
  snacks,
  ordereIds,
  ShowProductDetails,
}) {
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
