import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Header() {

    const location = useLocation();

    return (
        <All>
            <HeaderBhutans>
                <SloganName>Fest Food</SloganName>
                <Control>
                    <Requests to="/" isActive={location.pathname === '/'}>Pedidos</Requests>
                    <Kitchen to="/kitchen" isActive={location.pathname === '/kitchen'}>Cozinha</Kitchen>
                    <Withdrawal to="/withdrawal" isActive={location.pathname === '/withdrawal'}>Retirada</Withdrawal>
                </Control>
            </HeaderBhutans>
        </All>
    )
};

const All = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
`
const HeaderBhutans = styled.div`
    width: 100%;
    height: 50px;
    background-color: #2E5D15;
    display: flex;
    align-items: center;   
    justify-content: space-around;
`
const SloganName = styled.div`
    width: 100%;
    height: 60px;
    font-family: "Varela Round";
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`
const Control = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Requests = styled(Link)`
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
const Kitchen = styled(Link)`
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
const Withdrawal = styled(Link)`
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



