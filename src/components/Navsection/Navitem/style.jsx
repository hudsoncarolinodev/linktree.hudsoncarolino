import styled from "styled-components";

export const Li = styled.li`
    width:100%;
    max-width: 352px;
    height:220px;
    background-color:#1b1b1b;
    background-image:url(${props => props.backgroundImage});
    background-position:center;
    background-size:cover;
    border-radius:5px;
    margin:10px;
    position:relative;
   
    a{
        display:block;
        width:100%;
        height:100%;
        color:#fff ;
        display: flex;
        align-items: flex-end;
        padding:10px;
    }
    :before{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,0.9416141456582633) 0%, rgba(0,0,0,0.6951155462184874) 94%, rgba(0,0,0,0.7399334733893557) 100%);
    }
    h2{
        position: relative;
        z-index: 1;
        padding: 10px 25px;
        background-color: hsl(220deg 77% 30%);
        border-radius: 5px;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;

    }
   
`