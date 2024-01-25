import styled from "styled-components";

export const All = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
`;
export const Preparing = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 7%;
  margin-left: 7%;
  margin-bottom: 7%;
  p {
    font-family: "Varela Round";
    font-size: 24px;
    color: black;
    font-weight: bold;
  }
`;
export const Sidebar = styled.div`
  width: 1px;
  background-color: black;
  color: #ffffff;
  padding: 2px;
  margin-top: 7%;
  border-radius: 10px;
`;
export const Ready = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 7%;
  margin-left: 4%;
  margin-bottom: 7%;
  p {
    font-family: "Varela Round";
    font-size: 24px;
    color: black;
    font-weight: bold;
  }
`;
export const OrderReady = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  margin-top: 5%;
  background-color: red;
  img {
    width: 100px;
    height: 80px;
    margin: 2%;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const AllRequest = styled.div`
  width: 90%;
  height: 100%;
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
`;
export const Order = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
  display: flex;
  text-align: center;
  margin-top: 5%;
  img {
    width: 100px;
    height: 80px;
    margin: 2%;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Ob = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2%;
  font-family: "Varela Round";
  font-size: 15px;
  color: black;
  font-weight: bold;
  margin-left: 3%;
`;
export const Observation = styled.div`
  width: 92%;
  height: 90%;
  border: 1px solid #a4a4a4;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  margin-top: 1%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 3%;
`;
export const P = styled.div`
  width: 95%;
  height: 90%;
  font-family: "Varela Round";
  font-size: 15px;
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 3%;
  padding-bottom: 5%;
  margin-bottom: 10px;
`;
export const NameCode = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    font-weight: bold;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  h2 {
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    margin-top: 2%;
    margin-bottom: 3%;
  }
  @media (max-width: 1024px) {
    h1 {
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    font-weight: bold;
    margin-top: 1%;
    margin-bottom: 1%;
  }
  h2 {
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    margin-top: 1%;
    margin-bottom: 1%;
  }
  }
`;
export const Butons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
`;
export const Not = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fae5e5;
`;
export const Ok = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5f5e6;
`;
