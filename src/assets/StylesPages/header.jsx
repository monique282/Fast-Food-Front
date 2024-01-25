import styled from "styled-components";
import { Link } from "react-router-dom";

export const All = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;
export const HeaderBhutans = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2e5d15;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const SloganName = styled(Link)`
  width: 100%;
  height: 50px;
  font-family: "Varela Round";
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
export const Control = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const Requests = styled(Link)`
  width: 100px;
  height: 30px;
  font-family: "Varela Round";
  font-size: 15px;
  background-color: ${(props) => (props.isActive ? "#1E410E" : "#2E5D15")};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media (max-width: 1024px) {
        margin-top: 10px;
  }
`;
export const Kitchen = styled(Link)`
  width: 100px;
  height: 30px;
  font-family: "Varela Round";
  font-size: 15px;
  background-color: ${(props) => (props.isActive ? "#1E410E" : "#2E5D15")};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media (max-width: 1024px) {
        margin-top: 10px;
  }
`;
export const Withdrawal = styled(Link)`
  width: 100px;
  height: 30px;
  font-family: "Varela Round";
  font-size: 15px;
  background-color: ${(props) => (props.isActive ? "#1E410E" : "#2E5D15")};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media (max-width: 1024px) {
        margin-top: 10px;
        margin-bottom: 10px;
  }
`;
