import styled from "styled-components";

export const All = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(128, 128, 128, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  z-index: 2;
`;
export const BoxAll = styled.div`
  margin-top: 100%;
  width: 60%;
  height: auto;
  border-radius: 20px;
  background-color: #ffffff;
  margin-bottom: 20%;
  @media (max-width: 1024px) {
    width: 100%;
    height: 100vh;
    margin-top: 0%;
    margin-bottom: 0;
    overflow-y: auto;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Varela Round";
    font-size: 30px;
    color: black;
    margin-left: 10%;
    margin-top: 7%;
    font-weight: bold;
  }
  @media (max-width: 1024px) {
    p {
      font-size: 25px;
    }
  }
`;
export const Exit = styled.div`
  margin-right: 5%;
`;
export const ProductOverview = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5%;
  img {
    width: 230px;
    margin-left: 10%;
    margin-bottom: 2%;
    margin-top: 2%;
    border-radius: 15px;
  }
  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    img {
      width: 20%;
      height: 10%;
      margin-left: -4%;
      margin-right: 1%;
      margin-bottom: 2%;
      margin-top: 2%;
      border-radius: 15px;
    }
  }
`;
export const NameDescriptionQuantity = styled.div`
  width: 50%;
  h1 {
    font-family: "Varela Round";
    font-size: 25px;
    color: black;
    margin-left: 10%;
    margin-top: 7%;
    font-weight: bold;
  }
  h2 {
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
    margin-left: 10%;
    margin-top: 7%;
  }
  @media (max-width: 1024px) {
    margin-left: 1%;
    margin-right: 1%;
    h1 {
      margin-left: 0%;
    }
    h2 {
      margin-left: 0%;
    }
  }
`;
export const AddQauntity = styled.div`
  width: 40%;
  height: 20%;
  margin-top: 15%;
  margin-left: 10%;
  border-radius: 50px;
  border: 3px solid #2e5d15;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: 10px;
  p {
    font-size: 20px;
  }
  @media (max-width: 1024px) {
    margin-left: 25%;
  }
`;
export const Add = styled.div`
  width: 40%;
  height: 100%;
  background-color: #2e5d15;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Subtract = styled.div`
  width: 40%;
  height: 100%;
  background-color: #2e5d15;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Price = styled.div`
  width: 14%;
  height: 100%;
  font-family: "Varela Round";
  font-size: 20px;
  color: black;
  margin-right: 10%;
  margin-top: 7%;
  font-weight: bold;
  @media (max-width: 1024px) {
    width: 20%;
    margin-right: 0%;
    height: 0%;
    font-size: 25px;
    text-align: center;
  }
`;
export const Additional = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  h1 {
    font-family: "Varela Round";
    font-size: 25px;
    color: black;
    margin-top: 7%;
    font-weight: bold;
  }
  h2 {
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
    margin-top: 1%;
  }
  @media (max-width: 1024px) {
    margin-top: 5%;
    margin-left: 0%;
    margin-right: 0%;
    h1 {
      margin-left: 2%;
    }
    h2 {
      margin-left: 2%;
    }
  }
`;
export const Bacon = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  display: flex;
  margin-top: 5%;
  img {
    width: 100px;
    height: 80px;
    margin: 2%;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const NameQuantity = styled.div`
  width: 250%;
  display: flex;
  flex-direction: column;
  h1 {
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
    font-weight: bold;
    margin-top: 10%;
  }
  h2 {
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    margin-top: 3%;
  }
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    h1 {
      font-family: "Varela Round";
      font-size: 20px;
      color: black;
      font-weight: bold;
      margin-top: 0%;
    }
    h2 {
      margin-bottom: 1%;
    }
  }
`;
export const Butons = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1024px) {
    justify-content: space-around;
    width: 100%;
  }
`;
export const Select = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    font-family: "Varela Round";
    font-size: 20px;
    color: #9f9f9f;
    font-weight: bold;
  }
  div {
    width: 20px;
    height: 20px;
    border: 3px solid #2e5d15;
    border-radius: 50px;
    margin-left: 20%;
  }
  @media (max-width: 1024px) {
    justify-content: space-around;
    p {
      font-family: "Varela Round";
      font-size: 20px;
      color: #9f9f9f;
      font-weight: bold;
    }
    div {
      width: 20px;
      height: 20px;
      border: 3px solid #2e5d15;
      border-radius: 50px;
      margin-left: 20%;
      background-color: #0de4c0;
    }
  }
`;
export const Cheddar = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  display: flex;
  margin-top: 5%;
  img {
    width: 100px;
    height: 80px;
    margin: 2%;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Sauce = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  display: flex;
  margin-top: 5%;
  img {
    width: 100px;
    height: 80px;
    margin: 2%;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Observation = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  h1 {
    font-family: "Varela Round";
    font-size: 25px;
    color: black;
    margin-top: 7%;
    font-weight: bold;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 4%;
    margin-left: 2%;
  }
`;
export const Search = styled.input`
  width: 100%;
  height: 80px;
  font-family: "Varela Round";
  font-size: 15px;
  color: black;
  margin-top: 1%;
  margin-right: 10%;
  background-color: #f4f4f4;
  border: none;
  border-radius: 15px;
  padding-left: 10px;
  padding-top: 10px;
  input::placeholder {
    color: #000000;
    margin-right: 10px;
  }
  input:focus {
    border: 1px solid black;
    outline: none;
  }
`;
export const PurchaseSummary = styled.div`
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  margin-top: 5%;
  @media (max-width: 1024px) {
    height: 40%;
    width: 90%;
    margin-right: 0%;
    margin-left: 5%;
  }
`;
export const DescriptionPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  @media (max-width: 1024px) {
  }
`;
export const Summary = styled.div`
  margin-left: 10%;
  font-family: "Varela Round";
  font-size: 20px;
  color: black;
  @media (max-width: 1024px) {
    margin-left: 1%;
  }
`;
export const PriceDescription = styled.div`
  margin-right: 10%;
  font-family: "Varela Round";
  font-size: 20px;
  color: black;
  @media (max-width: 1024px) {
    margin-right: 1%;
  }
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
  @media (max-width: 1024px) {
    margin-bottom: 0%;
    margin-left: 5%;
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
    justify-content: center;
    width: 100%;
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
  @media (max-width: 1024px) {
    text-align: center;
    width: 50%;
    margin-left: 3%;
  }
`;
export const AddProducttoList = styled.div`
  width: 22%;
  height: 50px;
  margin-right: 5%;
  background-color: #2e5d15;
  font-family: "Varela Round";
  font-size: 15px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 2px solid #2e5d15;
  color: #ffffff;
  @media (max-width: 1024px) {
    text-align: center;
    width: 50%;
    margin-right: 3%;
  }
`;
