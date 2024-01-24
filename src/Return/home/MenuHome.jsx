// eslint-disable-next-line no-unused-vars
import React from "react";
import { Menu } from "../../assets/StylesPages/home";
import ProductFilteredFalseHome from "./ProductFilteredFalseHome";
import SelectedCategoryCombooHome from "./SelectedCategoryCombooHome";
import SelectedCategoryFollowHome from "./SelectedCategoryFollowHome";
import SelectedCategoryDessertHome from "./SelectedCategoryDessertHome";
import SelectedCategorySnacksHome from "./SelectedCategorySnacksHome";
import SelectedCategoryDrinkHome from "./SelectedCategoryDrinkHome";
import SearchResultsTrue from "./SearchResultsTrueHome";
import PropTypes from "prop-types";

export default function MenuHome({
  productFiltered,
  snacks,
  ordereIds,
  ShowProductDetails,
  selectedCategory,
  comboo,
  follo,
  desser,
  drink,
  search,
  searchResults,
}) {
  MenuHome.propTypes = {
    productFiltered: PropTypes.bool.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    ordereIds: PropTypes.array.isRequired,
    ShowProductDetails: PropTypes.func.isRequired,
    comboo: PropTypes.array.isRequired,
    snacks: PropTypes.array.isRequired,
    follo: PropTypes.array.isRequired,
    drink: PropTypes.array.isRequired,
    desser: PropTypes.array.isRequired,
    search: PropTypes.array.isRequired,
    searchResults: PropTypes.array.isRequired,
  };
  return (
    <Menu>
      <ProductFilteredFalseHome
        productFiltered={productFiltered}
        snacks={snacks}
        ordereIds={ordereIds}
        ShowProductDetails={ShowProductDetails}
      />
      {productFiltered === true && (
        <>
          <SelectedCategoryCombooHome
            selectedCategory={selectedCategory}
            comboo={comboo}
            ordereIds={ordereIds}
            ShowProductDetails={ShowProductDetails}
          />
          <SelectedCategoryFollowHome
            selectedCategory={selectedCategory}
            follo={follo}
            ordereIds={ordereIds}
            ShowProductDetails={ShowProductDetails}
          />
          <SelectedCategoryDessertHome
            selectedCategory={selectedCategory}
            desser={desser}
            ordereIds={ordereIds}
            ShowProductDetails={ShowProductDetails}
          />
          <SelectedCategorySnacksHome
            selectedCategory={selectedCategory}
            snacks={snacks}
            ordereIds={ordereIds}
            ShowProductDetails={ShowProductDetails}
          />
          <SelectedCategoryDrinkHome
            selectedCategory={selectedCategory}
            drink={drink}
            ordereIds={ordereIds}
            ShowProductDetails={ShowProductDetails}
          />
          <SearchResultsTrue
            search={search}
            searchResults={searchResults}
            ordereIds={ordereIds}
            ShowProductDetails={ShowProductDetails}
          />
        </>
      )}
    </Menu>
  );
}
