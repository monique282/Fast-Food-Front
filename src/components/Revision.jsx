import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { AuthContext } from "../context/authContext";
import { HiOutlineX } from "react-icons/hi";
import { CgMathMinus } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";
import Bacons from "../assets/images/bacon.png";
import Cheddars from "../assets/images/cheddar.png"
import Barvecue from "../assets/images/barbecue.png"


export default function Revision() {

    const {
        products, id, showReview,
        setShowReview, counter, setCounter
    } = useContext(AuthContext);

    console.log(counter);
    const ProductSpecific = products.find((product) => product.id === id);

    function backProducts() {
        setShowReview(false);
    };

    function More() {
        setCounter(counter + 1);
        console.log(counter)
    };

    function Remove() {
        if (counter === 1) {
            setShowReview(false);
        } else {
            setCounter(counter - 1);
            console.log(counter)
        }
    }

    if (products.length === 0) {
        return (
            <All>
                <>carregando</>
            </All>
        )
    } else {
        return (
            <All>
                <BoxAll>
                    <Header>
                        <p>Revise seu pedido!</p>
                        <Exit onClick={() => backProducts()}><HiOutlineX style={{ width: "30px", height: "30px", color: "#9F9F9F", fontWeight: "bold" }} /></Exit>
                    </Header>
                    <ProductOverview>
                        <img src={ProductSpecific.image} alt=""></img>
                        <NameDescriptionQuantity>
                            <h1>{ProductSpecific.name}</h1>
                            <h2>{ProductSpecific.description}</h2>
                            <AddQauntity>
                                <Subtract onClick={() => Remove()}><CgMathMinus style={{ fontSize: "40px", color: "#FCFDFC" }} /></Subtract>
                                <p>{counter}</p>
                                <Add onClick={() => More()} ><CgMathPlus style={{ fontSize: "40px", color: "#FCFDFC" }} /></Add>
                            </AddQauntity>
                        </NameDescriptionQuantity>
                        <Price>R$ {ProductSpecific.price.toFixed(2)}</Price>
                    </ProductOverview>
                    <Additional>
                        <h1>Adicionais</h1>
                        <h2>Selecione os ingredientes que voê quer adicionar a mais no seu lanche</h2>
                        <Bacon>
                            <img src={Bacons} alt="" />
                            <NameQuantity>
                                <h1>Bacon</h1>
                                <h2>10g</h2>
                            </NameQuantity>
                            <Butons>
                                <Select >
                                    <p>R$ 1.00</p>
                                    <div></div>
                                </Select>
                            </Butons>
                        </Bacon>
                        <Cheddar>
                            <img src={Cheddars} alt="" />
                            <NameQuantity>
                                <h1>Cheddar</h1>
                                <h2>10g</h2>
                            </NameQuantity>
                            <Butons>
                                <Select >
                                    <p>R$ 1.00</p>
                                    <div></div>
                                </Select>
                            </Butons>
                        </Cheddar>
                        <Sauce>
                            <img src={Barvecue} alt="" />
                            <NameQuantity>
                                <h1>molho acompanhamento</h1>
                                <h2>Barbecue</h2>
                            </NameQuantity>
                            <Butons>
                                <Select >
                                    <p>R$ 1.00</p>
                                    <div></div>
                                </Select>
                            </Butons>
                        </Sauce>
                    </Additional>
                    <Observation>
                        <h1>Observações</h1>
                        <Search placeholder='Adicione uma observação ao pedido' type="text" ></Search>
                    </Observation>
                    <PurchaseSummary>
                        <DescriptionPrice>
                            <Summary>1x {ProductSpecific.name}</Summary>
                            <PriceDescription>R$ {ProductSpecific.price.toFixed(2)}</PriceDescription>
                        </DescriptionPrice>
                        <Divider></Divider>
                        <FinalValue>
                            <h1>Total do pedido:</h1>
                            <Amount>R$ 30,50</Amount>
                        </FinalValue>
                    </PurchaseSummary>
                    <Finishing>
                        <RemoveOrderFromList>Remover procuto</RemoveOrderFromList>
                        <AddProducttoList>Adicionar produto</AddProducttoList>
                    </Finishing>
                </BoxAll>
            </All>
        )
    }

}

const All = styled.div`
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
`
const BoxAll = styled.div`
    margin-top: 100%;
    width: 60%;
    height: auto;
    border-radius: 20px;
    background-color: #FFFFFF;
    margin-bottom: 20%;
`
const Header = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
        p{
        font-family: "Varela Round";
        font-size: 30px;
        color: black;
        margin-left: 10%;
        margin-top: 7%;
        font-weight: bold;  
        }
`
const Exit = styled.div`
    margin-right: 5%;
`
const ProductOverview = styled.div`
    width: 100%;
    display: flex;
    margin-top: 5%;
    img{
        width: 230px;
        margin-left: 10%;
        margin-bottom: 2%;
        margin-top: 2%;
        border-radius: 15px;
    }
`
const NameDescriptionQuantity = styled.div`
    width: 50%;
        h1{
        font-family: "Varela Round";
        font-size: 25px;
        color: black;
        margin-left: 10%;
        margin-top: 7%;
        font-weight: bold;   
        }
        h2{
        font-family: "Varela Round";
        font-size: 20px;
        color: black;
        margin-left: 10%;
        margin-top: 7%;
        }
`
const AddQauntity = styled.div`
    width: 40%;
    height: 20%;
    margin-top: 15%;
    margin-left: 10%;
    border-radius: 50px;
    border: 3px solid #2E5D15;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: 10px;
        p{
        font-size: 20px;  
        }
`
const Add = styled.div`
    width: 40%;
    height: 100%;
    background-color: #2E5D15;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Subtract = styled.div`
    width: 40%;
    height: 100%;
    background-color: #2E5D15;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Price = styled.div`
    width: 14%;
    height: 100%;
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
    margin-right: 10%;
    margin-top: 7%;
    font-weight: bold; 
`
const Additional = styled.div`
    margin-left: 10%;
    margin-right: 10%;
        h1{
        font-family: "Varela Round";
        font-size: 25px;
        color: black;
        margin-top: 7%;
        font-weight: bold;   
        }
        h2{
        font-family: "Varela Round";
        font-size: 20px;
        color: black;
        margin-top: 1%;
        }
`
const Bacon = styled.div`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    display: flex;
    margin-top: 5%;
        img{
        width: 100px;
        height: 80px;
        margin: 2%;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.15);
        }
`
const NameQuantity = styled.div`
    width: 250%;
    display: flex;
    flex-direction: column;
        h1{
        font-family: "Varela Round";
        font-size: 20px;
        color: black;
        font-weight: bold;
        margin-top: 10%;
        }
        h2{
        font-family: "Varela Round";
        font-size: 15px;
        color: black;
        margin-top: 3%; 
        }
`
const Butons = styled.div`
    width: 2=80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Select = styled.div`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
        p{
        font-family: "Varela Round";
        font-size: 20px;
        color: #9F9F9F;
        font-weight: bold; 
        }
        div{
        width: 20px;
        height: 20px; 
        border :3px solid #2E5D15 ;
        border-radius: 50px;
        margin-left: 20%;
        }
`
const Cheddar = styled.div`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    display: flex;
    margin-top: 5%;
        img{
        width: 100px;
        height: 80px;
        margin: 2%;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.15);
        } 
`
const Sauce = styled.div`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    display: flex;
    margin-top: 5%;
        img{
        width: 100px;
        height: 80px;
        margin: 2%;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.15);
        }
`
const Observation = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    h1{
    font-family: "Varela Round";
    font-size: 25px;
    color: black;
    margin-top: 7%;
    font-weight: bold;   
    }
`
const Search = styled.input`
    width: 100%;
    height: 150px;
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    margin-top: 1%;
    margin-right: 10%;
    background-color: #F4F4F4;
    border: none;
    border-radius: 15px;
    padding-left: 10px;
    padding-top: 10px;
        input::placeholder {
        color: #000000; 
        margin-right: 10px;
        }
        input:focus {
        border: 1px solid black;
        outline: none; 
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
`
const Summary = styled.div`
    margin: 10%;
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
`
const PriceDescription = styled.div`
    margin: 10%;
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
    background-color: #2E5D15;
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
