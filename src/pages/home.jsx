import axios from "axios";
import { AuthContext } from '../context/authContext';
import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components";
import Combo from '../assets/images/Combo.jpeg';
import dessert from '../assets/images/dessert.jpeg';
import drinks from '../assets/images/drinks.png';
import follow from '../assets/images/follow.jpg';
import snack from '../assets/images/snacks.jpeg';
import Revision from "../components/Revision";
import { CgCheck } from "react-icons/cg";


export default function Home() {

    const { products, setProducts, setId,
        showReview, setShowReview, order, setOrder
    } = useContext(AuthContext);
    const [search, setSearch] = useState([]);
    const [snacks, setSnacks] = useState([]);
    const [follo, setFollow] = useState([]);
    const [drink, setDrink] = useState([]);
    const [desser, setDesert] = useState([]);
    const [comboo, setCombo] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [productFiltered, setProductFiltered] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [ordereIds, setOrdereIds] = useState([]);
    let sumTotal = 0;

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

        if (order && order.length > 0) {
            const orderedIds = order.map(item => item.ProductSpecific.id);
            setOrdereIds(orderedIds);
        }

    }, [order]);

    function ShowSpecific(parament) {
        setProductFiltered(true)
        setSelectedCategory();
        setSelectedCategory(parament)
    };

    function handleSearch(query) {
        setSearch(query);
        const filteredResults = products.filter((product) => {
            const lowercaseQuery = query.toLowerCase();
            const lowercaseName = product.name.toLowerCase();
            const stringifiedId = String(product.id);
            return lowercaseName.includes(lowercaseQuery) || stringifiedId.includes(lowercaseQuery);
        });

        setSearchResults(filteredResults);
        setProductFiltered(query.length > 0);
        setSelectedCategory();
    };

    function ShowProductDetails(id) {
        setShowReview(true);
        setId(id);
    };

    if (order && order.length > 0) {
        sumTotal = order.reduce((accumulator, item) => {
            return accumulator + parseFloat(item.total.replace(',', '.'));
        }, 0);
    };

    function cancel() {
        location.reload();
    };

    if (products.length === 0) {
        return (
            <>carregando</>
        )
    } else {
        return (
            <All>
                {showReview === true && (
                    <Revision></Revision>
                )}
                <Welcome>Seja bem Vindo(a)!</Welcome>
                <Search placeholder='O que voê procura?'
                    type="text"
                    value={search}
                    onChange={e => handleSearch(e.target.value)} >
                </Search>
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
                        {(!productFiltered) && (
                            snacks.map((main) => (
                                <>
                                    <ProductBox key={main.id} onClick={() => ShowProductDetails(main.id)} >
                                        {ordereIds.includes(main.id) && (
                                            <Select>
                                                <CgCheck style={{ fontSize: "70px", color: "#FCFDFC" }} />
                                            </Select>
                                        )}
                                        <img src={main.image} alt="" />
                                        <h1>{main.name}</h1>
                                        <h2>{main.description}</h2>
                                        <p>R$ {main.price.toFixed(2)}</p>
                                    </ProductBox>
                                </>
                            ))
                        )}
                        {productFiltered === true && (
                            <>
                                {selectedCategory === "COMBOO" && (
                                    comboo.map((main) => (
                                        <>
                                            <ProductBox key={main.id} onClick={() => ShowProductDetails(main.id)} >
                                                {ordereIds.includes(main.id) && (
                                                    <Select>
                                                        <CgCheck style={{ fontSize: "70px", color: "#FCFDFC" }} />
                                                    </Select>
                                                )}
                                                <img src={main.image} alt="" />
                                                <h1>{main.name}</h1>
                                                <h2>{main.description}</h2>
                                                <p>R$ {main.price.toFixed(2)}</p>
                                            </ProductBox>
                                        </>
                                    ))
                                )}
                                {selectedCategory === "FOLLOW" && (
                                    follo.map((main) => (
                                        <>
                                            <ProductBox key={main.id} onClick={() => ShowProductDetails(main.id)} >
                                                {ordereIds.includes(main.id) && (
                                                    <Select>
                                                        <CgCheck style={{ fontSize: "70px", color: "#FCFDFC" }} />
                                                    </Select>
                                                )}
                                                <img src={main.image} alt="" />
                                                <h1>{main.name}</h1>
                                                <h2>{main.description}</h2>
                                                <p>R$ {main.price.toFixed(2)}</p>
                                            </ProductBox>
                                        </>
                                    ))
                                )}
                                {selectedCategory === "DESSERT" && (
                                    desser.map((main) => (
                                        <>
                                            <ProductBox key={main.id} onClick={() => ShowProductDetails(main.id)} >
                                                {ordereIds.includes(main.id) && (
                                                    <Select>
                                                        <CgCheck style={{ fontSize: "70px", color: "#FCFDFC" }} />
                                                    </Select>
                                                )}
                                                <img src={main.image} alt="" />
                                                <h1>{main.name}</h1>
                                                <h2>{main.description}</h2>
                                                <p>R$ {main.price.toFixed(2)}</p>
                                            </ProductBox>
                                        </>
                                    ))
                                )}
                                {selectedCategory === "SNACKS" && (
                                    snacks.map((main) => (
                                        <>
                                            <ProductBox key={main.id} onClick={() => ShowProductDetails(main.id)} >
                                                {ordereIds.includes(main.id) && (
                                                    <Select>
                                                        <CgCheck style={{ fontSize: "70px", color: "#FCFDFC" }} />
                                                    </Select>
                                                )}
                                                <img src={main.image} alt="" />
                                                <h1>{main.name}</h1>
                                                <h2>{main.description}</h2>
                                                <p>R$ {main.price.toFixed(2)}</p>
                                            </ProductBox>
                                        </>
                                    ))
                                )}
                                {selectedCategory === "DRINK" && (
                                    drink.map((main) => (
                                        <>
                                            <ProductBox key={main.id} onClick={() => ShowProductDetails(main.id)} >
                                                {ordereIds.includes(main.id) && (
                                                    <Select>
                                                        <CgCheck style={{ fontSize: "70px", color: "#FCFDFC" }} />
                                                    </Select>
                                                )}
                                                <img src={main.image} alt="" />
                                                <h1>{main.name}</h1>
                                                <h2>{main.description}</h2>
                                                <p>R$ {main.price.toFixed(2)}</p>
                                            </ProductBox>
                                        </>
                                    ))
                                )}
                                {search.length !== 0 && (
                                    searchResults.map((main) => (
                                        <>
                                            <ProductBox key={main.id} onClick={() => ShowProductDetails(main.id)}>
                                                {ordereIds.includes(main.id) && (
                                                    <Select>
                                                        <CgCheck style={{ fontSize: "70px", color: "#FCFDFC" }} />
                                                    </Select>
                                                )}
                                                <img src={main.image} alt="" />
                                                <h1>{main.name}</h1>
                                                <h2>{main.description}</h2>
                                                <p>R$ {main.price.toFixed(2)}</p>
                                            </ProductBox>
                                        </>
                                    ))
                                )}
                            </>
                        )}
                    </Menu>
                </Products>
                {order && order.length > 0 && (
                    <PurchaseSummary>
                        {order.map((main) => (
                            <React.Fragment key={main.ProductSpecific.id}>
                                <DescriptionPrice>
                                    <Summary>{main.counter}x {main.ProductSpecific.name}</Summary>
                                    <PriceDescription>R$ {((main.ProductSpecific.price) * main.counter).toFixed(2)}</PriceDescription>
                                </DescriptionPrice>
                                {main.followUp.length > 0 && (
                                    main.followUp.map((followUpItem) => (
                                        <DescriptionPrice key={followUpItem.id}>
                                            <Summary>{followUpItem.item}</Summary>
                                            <PriceDescription>{followUpItem.price}</PriceDescription>
                                        </DescriptionPrice>
                                    ))
                                )}
                            </React.Fragment>
                        ))}

                        <Divider></Divider>
                        <FinalValue>
                            <h1>Total do pedido:</h1>
                            <Amount>R$ {sumTotal.toFixed(2)}  </Amount>
                        </FinalValue>
                    </PurchaseSummary>
                )}

                <Finishing>
                    <RemoveOrderFromList onClick={() => cancel()} >Cancelar</RemoveOrderFromList>
                    {order.length > 0 &&(
                        <AddProducttoList  
                        style = {{backgroundColor: "#2E5D15", border:"2px solid #2E5D15"}}
                         onClick={() => IWantThese()} >Finalizar pedido</AddProducttoList>
                    )}
                    {order.length === 0 &&(
                        <AddProducttoList  style = {{backgroundColor: "#9F9F9F", border:"2px solid #9F9F9F"}}  >Finalizar pedido</AddProducttoList>
                    )}
                </Finishing>
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
    font-family: "Varela Round";
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
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`
const Select = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 2.4%);
    height: calc(100% + 2.4%);
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(53, 244, 53, 0.7);
    z-index: 1;
`
const ProductBox = styled.div`
    width: calc(20% - 2.4%);
    max-width: 180px; 
    height: 250px;
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 1px 4px rgba(0,0,0,0.15);
    margin-top: 2.4%;
    margin-right: 2.4%; 
    position: relative; 
    z-index: 0;
        img {
        width: 100px;
        }
        h1 {
        font-family: "Varela Round";
        font-size: 20px;
        color: black;
        margin-top: 5%;
        font-weight: bold;
        }
        h2 {
        font-family: "Varela Round";
        font-size: 11px;
        color: black;
        margin-top: 5%;
        }
        p {
        font-family: "Varela Round";
        font-size: 17px;
        color: black;
        margin-top: 5%;
        font-weight: bold;
        }
`
const PurchaseSummary = styled.div`
    height: 100%;
    margin-left: 10%;
    margin-right: 10%;
    border: 1px solid #D2D2D2;
    border-radius: 5px;
    margin-top: 5%;
`
const DescriptionPrice = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
`
const Summary = styled.div`
    margin-left: 10%;
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
`
const PriceDescription = styled.div`
    margin-right: 10%;
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
`
const Divider = styled.div`
    border-bottom: 2px dashed #C3C3C3; 
    margin: 20px 20px; 
`
const FinalValue = styled.div`
    margin-top: 5%;
    margin-left: 10%;
    margin-bottom: 5%;
    h1{
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
    }
`
const Amount = styled.div`
    font-family: "Varela Round";
    font-size: 40px;
    color: black;
    font-weight: bold; 
    margin-top: 3%;
`
const Finishing = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10%;
    margin-top: 5%;
    margin-bottom: 10%;
`
const RemoveOrderFromList = styled.div`
    width: 22%;
    height: 50px;
    margin-right: 5%;
    font-family: "Varela Round";
    font-size: 15px;
    color: black; 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border:2px solid #2E5D15 ;
`
const AddProducttoList = styled.div`
    width: 22%;
    height: 50px;
    margin-right: 5%;
    font-family: "Varela Round";
    font-size: 15px;
    color: black; 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border:2px solid #2E5D15 ;
    color: #FFFFFF;
`



