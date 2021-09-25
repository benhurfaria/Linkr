import styled from "styled-components";

const Input = styled.input`
    border-radius: 6px;
    width: 100%;
    height: 35px;
    border: none;
    font-family: 'Lato', sans-serif;
    font-size: 18px;

    ::placeholder{
        font-family: 'Lato', sans-serif;
        font-size: 18px;
        color: #c6c6c6;
    }
`
const Form = styled.form`
    width: 25%;
    display: flex;
    flex-direction: row;
`
const IMG = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
`

export {Input, Form, IMG}