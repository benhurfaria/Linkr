import styled from "styled-components";

const Button = styled.button`
    width: 120px;
    height: 30px;
    background-color: #1877F2;
    position: fixed;
    right: 6%;
    top: 120px;
    font-family: 'Lato',sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
    border: none;
    &:focus{
        outline: transparent;
    }
    &&.seguido{
        color: #1877F2;
        background-color: #ffffff;
    }
`
export {Button};