// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
export default function SearchResultsTrue({
  searchResults,
  search,
  ordereIds,
  ShowProductDetails,
}) {
  return (
    <>
      {search.length !== 0 &&
        searchResults.map((main) => (
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
