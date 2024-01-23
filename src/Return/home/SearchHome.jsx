// eslint-disable-next-line no-unused-vars
import React from "react";
import { Search} from "../../assets/StylesPages/home";
import handleSearchHome from "../../Functionality/HandleSearchHome";

export default function SearchHome({ 
    setSearch,
    setSearchResults,
    setProductFiltered,
    setSelectedCategory,
    products,
    search
}) {
  return (
    <Search
          placeholder="O que voê procura?"
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
