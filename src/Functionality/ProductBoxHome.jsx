import React from "react";
import {
  Select,
  ProductBox as StyledProductBox,
} from "../assets/StylesPages/home";
import { CgCheck } from "react-icons/cg";

export default function ProcuctBoxHome({ main, ordereIds, ShowProductDetails }) {
  return (
    <StyledProductBox key={main.id} onClick={() => ShowProductDetails(main.id)}>
      {ordereIds.includes(main.id) && (
        <Select>
          <CgCheck style={{ fontSize: "70px", color: "#FCFDFC" }} />
        </Select>
      )}
      <img src={main.image} alt="" />
      <h1>{main.name}</h1>
      <h2>{main.description}</h2>
      <p>R$ {main.price.toFixed(2)}</p>
    </StyledProductBox>
  );
}
