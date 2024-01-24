// eslint-disable-next-line no-unused-vars
import React from "react";
import { Categories } from "../../assets/StylesPages/home";
import BoxHome from "./BoxHome";
import PropTypes from "prop-types";

export default function CategoriesHome({
  setProductFiltered,
  setSelectedCategory,
  Combo,
  snack,
  follow,
  drinks,
  dessert,
}) {
  CategoriesHome.propTypes = {
    setProductFiltered: PropTypes.func.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
    Combo: PropTypes.string.isRequired,
    snack: PropTypes.string.isRequired,
    follow: PropTypes.string.isRequired,
    drinks: PropTypes.string.isRequired,
    dessert: PropTypes.string.isRequired,
  };
  return (
    <Categories>
      <BoxHome
        Imagem={Combo}
        text={"Combo"}
        productText={"COMBOO"}
        setProductFiltered={setProductFiltered}
        setSelectedCategory={setSelectedCategory}
      />
      <BoxHome
        Imagem={snack}
        text={"Lanches"}
        productText={"SNACKS"}
        setProductFiltered={setProductFiltered}
        setSelectedCategory={setSelectedCategory}
      />
      <BoxHome
        Imagem={follow}
        text={"Acompanhamentos"}
        productText={"FOLLOW"}
        setProductFiltered={setProductFiltered}
        setSelectedCategory={setSelectedCategory}
      />
      <BoxHome
        Imagem={drinks}
        text={"Bebidas"}
        productText={"DRINK"}
        setProductFiltered={setProductFiltered}
        setSelectedCategory={setSelectedCategory}
      />
      <BoxHome
        Imagem={dessert}
        text={"Sobremesas"}
        productText={"DESSERT"}
        setProductFiltered={setProductFiltered}
        setSelectedCategory={setSelectedCategory}
      />
    </Categories>
  );
}
