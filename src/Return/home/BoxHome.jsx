// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box } from "../../assets/StylesPages/home";
import PropTypes from "prop-types";
export default function BoxHome({
  Imagem,
  productText,
  text,
  setProductFiltered,
  setSelectedCategory,
}) {
  BoxHome.propTypes = {
    Imagem: PropTypes.string.isRequired,
    productText: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    setProductFiltered: PropTypes.func.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
  };

  return (
    <Box
      onClick={() => {
        setProductFiltered(true);
        setSelectedCategory(productText);
      }}
    >
      <img src={Imagem} alt="" />
      <p style={{ fontWeight: "bold" }}>{text}</p>
    </Box>
  );
}
