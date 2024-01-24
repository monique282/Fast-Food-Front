// eslint-disable-next-line no-unused-vars
import React from "react";
import { Search } from "../../assets/StylesPages/home";
import handleSearchHome from "../../Functionality/HandleSearchHome";
import PropTypes from "prop-types";

export default function SearchHome({
  setSearch,
  setSearchResults,
  setProductFiltered,
  setSelectedCategory,
  products,
  search,
}) {
  SearchHome.propTypes = {
    setSearch: PropTypes.func.isRequired,
    setSearchResults: PropTypes.func.isRequired,
    setProductFiltered: PropTypes.func.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    search: PropTypes.array.isRequired,
  };
  return (
    <Search
      placeholder="O que você procura?"
      type="text"
      value={search}
      onChange={(e) => {
        handleSearchHome(
          e.target.value,
          setSearch,
          setSearchResults,
          setProductFiltered,
          setSelectedCategory,
          products
        );
      }}
    ></Search>
  );
}
