import styled from "styled-components";
import { Link } from "react-router-dom";

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
  z-index: 3;
  border-radius: 10px;
`;
export const BoxAll = styled(Link)`
  width: 60%;
  height: auto;
  border-radius: 20px;
  background-color: #ffffff;
  margin-bottom: 20%;
  margin-top: 20%;
  img {
    width: 100%;
    border-radius: 20px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;