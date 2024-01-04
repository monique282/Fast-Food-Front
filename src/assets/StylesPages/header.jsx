import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export const All = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
`
export const HeaderBhutans = styled.div`
    width: 100%;
    height: 50px;
    background-color: #2E5D15;
    display: flex;
    align-items: center;   
    justify-content: space-around;
`
export const SloganName = styled(Link)`
    width: 100%;
    height: 60px;
    font-family: "Varela Round";
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`
export const Control = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Requests = styled(Link)`
    width: 100px;
    height: 30px;
    font-family: "Varela Round";
    font-size: 15px;
    background-color: ${props => props.isActive ? '#1E410E' : '#2E5D15'};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`
export const Kitchen = styled(Link)`
    width: 100px;
    height: 30px;
    font-family: "Varela Round";
    font-size: 15px;
    background-color: ${props => props.isActive ? '#1E410E' : '#2E5D15'};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white; 
`
export const Withdrawal = styled(Link)`
    width: 100px;
    height: 30px;
    font-family: "Varela Round";
    font-size: 15px;
    background-color: ${props => props.isActive ? '#1E410E' : '#2E5D15'};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`
