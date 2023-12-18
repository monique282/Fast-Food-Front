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
    const [search, setSearch] = useState();
    const [snacks, setSnacks] = useState([]);
    const [follo, setFollow] = useState([]);
    const [drink, setDrink] = useState([]);
    const [desser, setDesert] = useState([]);
    const [comboo, setCombo] = useState([]);

    const url = `${import.meta.env.VITE_API_URL}/home`;

    useEffect(() => {
        const promise = axios.get(url);
        promise.then(response => {
            setProducts(response.data);
            const follo = response.data.filter(product => product.category === 'FOLLOW');
            setFollow(follo);
            const snacks = response.data.filter(product => product.category === 'SNACKS');
            setSnacks(snacks);
            const drink = response.data.filter(product => product.category === 'DRINK');
            setDrink(drink);
            const dessert = response.data.filter(product => product.category === 'DESSERT');
            setDesert(dessert);
            const comboo = response.data.filter(product => product.category === 'COMBOO');
            setCombo(comboo);
        })
        promise.catch(err => {
            console.log(err.response);
        });
    }, []);

    function ShowSpecific(parament) {
        setProductFiltered(true)
        setSelectedCategory();
        setSelectedCategory(parament)
    };

    console.log(products)
    if (products.length === 0) {
        return (
            <>carregando</>
        )
    } else {
        return (
            <All>
                <Welcome>Seja bem Vindo(a)!</Welcome>
                <Search placeholder='O que voê procura?' type="text" value={search} onChange={e => setSearch(e.target.value)} ></Search>
                <Products>
                    <Title>Categorias</Title>
                    <Subtitle>Navegue por categorais</Subtitle>
                    <Categories>
                        <Box onClick={() => ShowSpecific("COMBOO")}>
                            <img src={Combo} alt="" />
                            <p style={{ fontWeight: "bold" }}>Combos</p>
                        </Box>
                        <Box onClick={() => ShowSpecific("SNACKS")}>
                            <img src={snack} alt="" />
                            <p style={{ fontWeight: "bold" }}>Lanches</p>
                        </Box>
                        <Box onClick={() => ShowSpecific("FOLLOW")}>
                            <img src={follow} alt="" />
                            <p style={{ marginTop: "-5px", fontWeight: "bold" }}>Acompanhamentos</p>
                        </Box>
                        <Box onClick={() => ShowSpecific("DRINK")}>
                            <img src={drinks} alt="" />
                            <p style={{ fontWeight: "bold" }}>Bebidas</p>
                        </Box>
                        <Box onClick={() => ShowSpecific("DESSERT")}>
                            <img src={dessert} alt="" />
                            <p style={{ fontWeight: "bold" }}>Sobremesas</p>
                        </Box>
                    </Categories>
                    <Title>Produtos</Title>
                    <Subtitle>Selecione um produto para adicioar ao seu pedido</Subtitle>
                    <Menu>
                        <ProductBox>
                            <img src={products[1].image} alt="" />
                            <h1>{products[1].name}</h1>
                            <h2>{products[1].description}</h2>
                            <p>R$ {products[1].price.toFixed(2)}</p>
                        </ProductBox>
                    </Menu>
                </Products>
            </All >
        )
    };
}

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
    font-weight: bold;
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
    font-weight: bold;
`
const Subtitle = styled.div`
    width: 100%;
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
const ProductBox = styled.div`
    width: 180px;
    height: 220px;
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 0 1px 4px rgba(0,0,0,0.15);
    margin-top: 2%;
        img{
        width: 100px;
        margin-left: 23%;
        margin-bottom: 3px;
        margin-top: 10px;
        }
        h1{
        font-family: "Varela Round";
        font-size: 20px;
        color: black;
        margin-top: 5%;
        font-weight: bold;
        }
        h2{
        font-family: "Varela Round";
        font-size: 11px;
        color: black;
        margin-top: 5%;
        }
        p{
        font-family: "Varela Round";
        font-size: 17px;
        color: black;
        margin-top: 5%; 
        font-weight: bold; 
        }
`
const sdv = styled.div`
`


