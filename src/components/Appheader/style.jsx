import styled from "styled-components";

export const Header = styled.header`
    position:fixed;
    z-index:2;
    height:110vh;
    background-color:#202020;
    width:20%;
    padding:30px;
    transition:0.5s ;
    transform:translate(${props => props.positionPx || "0%"}) ;
`