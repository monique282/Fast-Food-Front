import styled from "styled-components";

export default function Kitchen() {


    return (
        <All>
            <Preparing>
                <p>Preparando:</p>
              
            </Preparing>
            <Sidebar></Sidebar>
            <Ready>
                <p>Pronto:</p>
            </Ready>
        </All>
    )
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
    background-color: red;
    margin-top: 7%;
    margin-left: 12%;
        p{
        font-family: "Varela Round";
        font-size: 24px;
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
`
const Ready = styled.div`
    width: 50%;
    height: 100%;
    background-color: #1411ba;
    margin-top: 7%;
    margin-left: 12%;
        p{
        font-family: "Varela Round";
        font-size: 24px;
        color: black;
        font-weight: bold;
        }
`
