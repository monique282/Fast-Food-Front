import styled from "styled-components";

export default function Header() {


    return (
        <All>
            <HeaderBhutans>
                <SloganName>Fest Food</SloganName>
                <Control>
                    <Requests>Pedidos</Requests>
                    <Kitchen>Cozinha</Kitchen>
                    <Withdrawal>Retirada</Withdrawal>
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
`
const SloganName = styled.div`
    width: 180px;
    height: 60px;
    font-family: "Varela Round";
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 50%;
`
const Control = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Requests = styled.div`
    width: 180px;
    height: 60px;
    font-family: "Varela Round";
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`
const Kitchen = styled.div`
    width: 180px;
    height: 60px;
    font-family: "Varela Round";
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white; 
`
const Withdrawal = styled.div`
    width: 180px;
    height: 60px;
    font-family: "Varela Round";
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`



