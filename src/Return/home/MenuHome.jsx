// eslint-disable-next-line no-unused-vars
import React from "react";
import { Menu } from "../../assets/StylesPages/home";
import ProductFilteredFalseHome from "./ProductFilteredFalseHome";
import SelectedCategoryCombooHome from "./SelectedCategoryCombooHome";
import SelectedCategoryFollowHome from "./SelectedCategoryFollowHome";
import SelectedCategoryDessertHome from "./SelectedCategoryDessertHome";
import SelectedCategorySnacksHome from "./SelectedCategorySnacksHome";
import SelectedCategoryDrinkHome from "./SelectedCategoryDrinkHome";
import SearchResultsTrue from "./SearchResultsTrue";
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
    productFiltered: PropTypes.func.isRequired,
    selectedCategory: PropTypes.func.isRequired,
    ordereIds: PropTypes.func.isRequired,
    ShowProductDetails: PropTypes.func.isRequired,
    comboo: PropTypes.string.isRequired,
    snacks: PropTypes.string.isRequired,
    follo: PropTypes.string.isRequired,
    drink: PropTypes.string.isRequired,
    desser: PropTypes.string.isRequired,
    search: PropTypes.func.isRequired,
    searchResults: PropTypes.func.isRequired,
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
