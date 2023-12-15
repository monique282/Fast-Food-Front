import axios from "axios";
import { AuthContext } from '../context/authContext';
import React, { useContext, useEffect } from 'react'

export default function Home() {

    const { products, setProducts } = useContext(AuthContext);

    const url = `${import.meta.env.VITE_API_URL}/home`;

    useEffect(() => {
        const promise = axios.get(url);
        promise.then(response => {
            setProducts(response.data);
        })
        promise.catch(err => {
            console.log(err.response);
        });
    }, []);

    return (
        <All>
            <Header>
                <SloganName>Fest Food</SloganName>
                <Control>
                    <Requests>Pedidos</Requests>
                    <Kitchen>Cozinha</Kitchen>
                    <Withdrawal>Retirada</Withdrawal>
                </Control>
            </Header>
        </All>
    )
};

const All = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
`
const Header = styled.div`
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
