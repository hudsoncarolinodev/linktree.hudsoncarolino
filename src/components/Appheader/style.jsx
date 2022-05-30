import styled from "styled-components";

export const Header = styled.header`
    position:fixed;
    z-index:2;
    height:110vh;
    background-color:#2b2b2b;
    width:100%;
    max-width:200px ;
    padding:30px;
    transition:0.5s ;
    transform:translate(${props => props.positionPx ? "0%":"-100%"}) ;
    button{
        position: absolute;
        right: -50px;
        top: 0;
        width: 50px;
        height: 50px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #2b2b2b;
        color: #fff;
        font-size: 25px;
        cursor:pointer ;
    }
`