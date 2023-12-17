import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/authContext";

export default function Withdrawal() {
    const { products } = useContext(AuthContext);

    if (products.length === 0) {
        <All>
            Carregando
        </All>
    } else {
        return (
            <All>
                <Preparing>
                    <p>Preparando:</p>
                    <Name>
                        <p>Monique</p>
                        <p>Patrick</p>
                    </Name>
                </Preparing>
                <Sidebar></Sidebar>
                <Ready>
                    <p>Pronto:</p>
                    <ReadyName>
                    <p>Sheure</p>
                    </ReadyName>
                </Ready>
            </All>
        )
    }
};

const All = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    display: flex;
    
`
const Preparing = styled.div`
    width: 50%;
    height: 100%;
    margin-top: 7%;
    margin-left: 7%;
        p{
        font-family: "Varela Round";
        font-size: 35px;
        color: black;
        font-weight: bold;
        }
`
const Sidebar = styled.div`
    width: 1px;
    background-color: black;
    color: #ffffff;
    padding: 2px;
    margin-top: 7%;
    border-radius: 10px;
`
const Ready = styled.div`
    width: 50%;
    height: 100%;
    margin-top: 7%;
    margin-left: 4%;
        p{
        font-family: "Varela Round";
        font-size: 35px;
        color: black;
        font-weight: bold;
        }
`
const Name = styled.div`
    width: 90%;
    height: 100%;
    border: none;
    border-radius: 10px;
    display: flex;
    margin-top: 5%;
    font-weight: bold;
    display: flex;
    flex-direction: column;
        p{
        margin-top: 2%;
        font-family: "Varela Round";
        font-size: 50px;
        color: #9F9F9F;
        }
`
const ReadyName = styled.div`
    width: 90%;
    height: 100%;
    border: none;
    border-radius: 10px;
    display: flex;
    margin-top: 5%;
    font-weight: bold;
    display: flex;
    flex-direction: column;
        p{
        margin-top: 2%;
        font-family: "Varela Round";
        font-size: 50px;
        color: #2E5D15;
        }
`


