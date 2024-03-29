import styled from "styled-components";

export const All = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;
export const Welcome = styled.div`
  width: 266px;
  height: 100%;
  font-family: "Varela Round";
  font-size: 30px;
  color: black;
  margin-top: 7%;
  margin-left: 12%;
  font-weight: bold;
  @media (max-width: 1024px) {
    margin-left: 2%;
    font-family: "Varela Round";
    font-size: 25px;
    color: black;
    margin-top: 2%;
    margin-left: 1%;
    font-weight: bold;
  }
`;
export const Search = styled.input`
  width: 350px;
  height: 39px;
  font-family: "Varela Round";
  font-size: 15px;
  color: black;
  margin-top: 1%;
  margin-left: 12%;
  background-color: #f4f4f4;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  input::placeholder {
    color: #000000;
    margin-right: 10px;
  }
  input:focus {
    border: 1px solid black;
    outline: none;
  }
  @media (max-width: 1024px) {
    width: 90%;
    margin-top: 1%;
    margin-left: 1%;
  }
`;
export const Products = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 2%;
  margin-left: 12%;
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 1%;
    margin-left: 1%;
  }
`;
export const Title = styled.div`
  width: 150px;
  height: 100%;
  font-family: "Varela Round";
  font-size: 24px;
  color: black;
  margin-top: 5%;
  font-weight: bold;
`;
export const Subtitle = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Varela Round";
  font-size: 15px;
  color: black;
  margin-top: 1%;
`;
export const Categories = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1%;
  display: flex;
  justify-content: space-between;
  scrollbar-width: thin;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  @media (max-width: 1024px) {
    overflow-x: auto;
    display: flex;
  }
`;
export const Box = styled.div`
  width: 200px;
  height: 125px;
  border: none;
  border-radius: 10px;
  display: flex;
  font-family: "Varela Round";
  flex-direction: column;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  img {
    width: 100px;
    margin-left: 25%;
    margin-bottom: 3px;
  }
  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 2%;
    flex: 0 0 auto;
  }
`;
export const Menu = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1%;
  display: flex;
  justify-content: center;
  scrollbar-width: thin;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  @media (max-width: 1024px) {
    overflow-x: auto;
    display: flex;
    justify-content: space-between;
  }
`;
export const Select = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 2.4%);
  height: calc(100% + 2.4%);
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(53, 244, 53, 0.7);
  z-index: 1;
`;
export const ProductBox = styled.div`
  width: 200px;
  height: 380px;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  margin-top: 2.4%;
  margin-right: 2.4%;
  position: relative;
  z-index: 0;
  img {
    width: 100px;
    margin-top: 10px;
  }
  h1 {
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
    margin-top: 5%;
    font-weight: bold;
  }
  h2 {
    font-family: "Varela Round";
    font-size: 11px;
    color: black;
    margin-top: 5%;
  }
  p {
    font-family: "Varela Round";
    font-size: 17px;
    color: black;
    margin-top: 5%;
    font-weight: bold;
    margin-bottom: 10px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    img {
      width: 100px;
    }
  }
`;
export const PurchaseSummary = styled.div`
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  margin-top: 5%;
`;
export const DescriptionPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
`;
export const Summary = styled.div`
  margin-left: 10%;
  font-family: "Varela Round";
  font-size: 20px;
  color: black;
`;
export const PriceDescription = styled.div`
  margin-right: 10%;
  font-family: "Varela Round";
  font-size: 20px;
  color: black;
`;
export const Divider = styled.div`
  border-bottom: 2px dashed #c3c3c3;
  margin: 20px 20px;
`;
export const FinalValue = styled.div`
  margin-top: 5%;
  margin-left: 10%;
  margin-bottom: 5%;
  h1 {
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
  }
`;
export const Amount = styled.div`
  font-family: "Varela Round";
  font-size: 40px;
  color: black;
  font-weight: bold;
  margin-top: 3%;
`;
export const Finishing = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  margin-top: 5%;
  margin-bottom: 10%;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    margin-right: 0%;
  }
`;
export const RemoveOrderFromList = styled.div`
  width: 22%;
  height: 50px;
  margin-right: 5%;
  font-family: "Varela Round";
  font-size: 15px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 2px solid #2e5d15;
`;
export const AddProducttoList = styled.div`
  width: 22%;
  height: 50px;
  margin-right: 5%;
  font-family: "Varela Round";
  font-size: 15px;
  color: black;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 15px;
  border: 2px solid #2e5d15;
  color: #ffffff;
  @media (max-width: 1024px) {
    margin-right: 0%;
  }
`;
