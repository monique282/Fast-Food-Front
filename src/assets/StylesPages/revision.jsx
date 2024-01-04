import styled from "styled-components";

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
    z-index: 2;
`;
export const BoxAll = styled.div`
    margin-top: 100%;
    width: 60%;
    height: auto;
    border-radius: 20px;
    background-color: #FFFFFF;
    margin-bottom: 20%;
`;
export const Header = styled.div`
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
`;
export const Exit = styled.div`
    margin-right: 5%;
`;
export const ProductOverview = styled.div`
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
`;
export const NameDescriptionQuantity = styled.div`
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
`;
export const AddQauntity = styled.div`
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
`;
export const Add = styled.div`
    width: 40%;
    height: 100%;
    background-color: #2E5D15;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Subtract = styled.div`
    width: 40%;
    height: 100%;
    background-color: #2E5D15;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Price = styled.div`
    width: 14%;
    height: 100%;
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
    margin-right: 10%;
    margin-top: 7%;
    font-weight: bold; 
`;
export const Additional = styled.div`
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
`;
export const Bacon = styled.div`
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
`;
export const NameQuantity = styled.div`
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
`;
export const Butons = styled.div`
    width: 2=80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
export const Select = styled.div`
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
`;
export const Cheddar = styled.div`
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
`;
export const Sauce = styled.div`
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
`;
export const Observation = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    h1{
    font-family: "Varela Round";
    font-size: 25px;
    color: black;
    margin-top: 7%;
    font-weight: bold;   
    }
`;
export const Search = styled.input`
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
`;
export const PurchaseSummary = styled.div`
    height: 100%;
    margin-left: 10%;
    margin-right: 10%;
    border: 1px solid #D2D2D2;
    border-radius: 5px;
    margin-top: 5%;
`;
export const DescriptionPrice = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
`;
export const Summary = styled.div`
    margin-left: 10%;
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
`;
export const PriceDescription = styled.div`
    margin-right: 10%;
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
`;
export const Divider = styled.div`
    border-bottom: 2px dashed #C3C3C3; 
    margin: 20px 20px; 
`;
export const FinalValue = styled.div`
    margin-top: 5%;
    margin-left: 10%;
    margin-bottom: 5%;
    h1{
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
    }
`;
export const Amount = styled.div`
    font-family: "Varela Round";
    font-size: 40px;
    color: black;
    font-weight: bold; 
    margin-top: 3%;
`;
export const Finishing = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10%;
    margin-top: 5%;
    margin-bottom: 10%;
`;
export const RemoveOrderFromList = styled.div`
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
`;
export const AddProducttoList = styled.div`
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
`;