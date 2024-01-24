// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcuctBoxHome from "./ProductBoxHome";
import PropTypes from "prop-types";

export default function SearchResultsTrue({
  searchResults,
  search,
  ordereIds,
  ShowProductDetails,
}) {
  SearchResultsTrue.propTypes = {
    searchResults: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    ordereIds: PropTypes.func.isRequired,
    ShowProductDetails: PropTypes.func.isRequired,
  };
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
