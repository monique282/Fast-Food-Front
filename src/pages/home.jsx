import axios from "axios";
import { AuthContext } from '../context/authContext';
import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components";
import Combo from '../assets/images/Combo.jpeg';
import dessert from '../assets/images/dessert.jpeg';
import drinks from '../assets/images/drinks.png'
import follow from '../assets/images/follow.jpg'


export default function Home() {

    const { products, setProducts } = useContext(AuthContext);
    const [search, setSearch] = useState()

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

    console.log(products)
    return (
        <All>
            <Welcome>Seja bem Vindo(a)!</Welcome>
            <Search placeholder='O que voê procura?' type="text" value={search} onChange={e => setSearch(e.target.value)} ></Search>
            <Products>
                <Title>Categorias</Title>
                <Subtitle>Navegue por categorais</Subtitle>
                <Categories>
                    <Box>
                        <img src={Combo} alt="" />
                        <p>Combos</p>
                    </Box>
                    <Box>
                        <img src={follow} alt="" />
                        <p style={{marginTop:"-5px"}}>Acompanhamentos</p></Box>
                    <Box>
                        <img src={drinks} alt="" />
                        <p>Bebidas</p></Box>
                    <Box>
                        <img src={dessert} alt="" />
                        <p>Sobremesas</p></Box>
                </Categories>
                <Menu></Menu>
            </Products>
        </All>
    )
};

const All = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
`
const Welcome = styled.div`
    width: 266px;
    height: 100%;
    font-family: "Varela Round";
    font-size: 30px;
    color: black;
    margin-top: 7%;
    margin-left: 12%;
`
const Search = styled.input`
    width: 350px;
    height: 39px;
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    margin-top: 1%;
    margin-left: 12%;
    background-color: #F4F4F4;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
        input::placeholder {
        color: #000000; 
        margin-right: 10px;
        }
        input:focus {
        border: 1px solid black;
        outline: none; 
        }
`
const Products = styled.div`
    width: 80%;
    height: 100%;
    margin-top: 2%;
    margin-left: 12%;
`
const Title = styled.div`
    width: 150px;
    height: 100%;
    font-family: "Varela Round";
    font-size: 24px;
    color: black;
    margin-top: 5%;
`
const Subtitle = styled.div`
    width: 310px;
    height: 100%;
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    margin-top: 1%;
`
const Categories = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 1%;
    display: flex;
    justify-content: space-between;
`
const Box = styled.div`
    width: 200px;
    height: 125px;
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 0 1px 4px rgba(0,0,0,0.15);
        img{
    width: 100px;
    margin-left: 25%;
    margin-bottom: 3px;
   
    }
`
const Menu = styled.div`
`
const sd = styled.div`
`


