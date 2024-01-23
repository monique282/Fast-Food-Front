// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box } from "../../assets/StylesPages/home";
export default function BoxHome({
  Imagem,
  productText,
  text,
  setProductFiltered,
  setSelectedCategory,
}) {
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
