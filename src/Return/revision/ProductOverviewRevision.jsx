import Remove from "../../Functionality/Removed"
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import {
    ProductOverview,
    NameDescriptionQuantity,
    AddQauntity,
    Add,
    Subtract,
    Price
  } from "../assets/StylesPages/revision";

export default function ProductOverviewRevision(ProductSpecific,setShowReview, counter, setCounter ) {
  return (
    <ProductOverview>
    <img src={ProductSpecific.image} alt=""></img>
    <NameDescriptionQuantity>
      <h1>{ProductSpecific.name}</h1>
      <h2>{ProductSpecific.description}</h2>
      <AddQauntity>
        <Subtract
          onClick={() => Remove(setShowReview, counter, setCounter)}
        >
          <CgMathMinus style={{ fontSize: "40px", color: "#FCFDFC" }} />
        </Subtract>
        <p>{counter}</p>
        <Add onClick={() => setCounter(counter + 1)}>
          <CgMathPlus style={{ fontSize: "40px", color: "#FCFDFC" }} />
        </Add>
      </AddQauntity>
    </NameDescriptionQuantity>
    <Price>R$ {ProductSpecific.price.toFixed(2)}</Price>
  </ProductOverview>
  );
}
