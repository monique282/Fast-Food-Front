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
  p {
    font-family: "Varela Round";
    font-size: 24px;
    color: black;
    font-weight: bold;
  }
`;
export const Name = styled.div`
  width: 90%;
  height: 100%;
  border: none;
  border-radius: 10px;
  display: flex;
  margin-top: 5%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 2%;
    font-family: "Varela Round";
    font-size: 50px;
    color: #9f9f9f;
  }
`;
export const ReadyName = styled.div`
  width: 90%;
  height: 100%;
  border: none;
  border-radius: 10px;
  display: flex;
  margin-top: 5%;
  font-weight: bold;
  flex-direction: column;
  p {
    margin-top: 2%;
    font-family: "Varela Round";
    font-size: 50px;
  }
  h1 {
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    font-weight: bold;
    margin-top: 1%;
    margin-bottom: 5%;
  }
  h2 {
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    margin-top: 1%;
    margin-bottom: 1%;
  }
`;
