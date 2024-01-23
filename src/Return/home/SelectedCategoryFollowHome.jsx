// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
export default function SelectedCategoryFollowHome({
  selectedCategory,
  follo,
  ordereIds,
  ShowProductDetails,
}) {
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
