import styled from "styled-components";

const PageTitle = styled.div`
    background-color: #151515;
    width: 66vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 200px;
    padding-bottom: 400px;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    @media (max-width: 640px){
        width: 100vw;
        height: 26vh;
        padding-bottom: 20px;
        padding-left: 0;
        align-items: center;
    }


`
const H1 = styled.h1`
    font-family: 'Passion One', cursive;
    font-size: 150px;
    color: #ffffff;
    @media (max-width: 640px){
        font-size: 76px;
    }
`
const H2 = styled.h2`
    font-family: 'Oswald', sans-serif;
    font-size: 60px;
    color: #ffffff;
    @media (max-width: 640px){
        font-size: 23px;
    }
`
const SignUpPage = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    @media(max-width: 640px){
       flex-direction: column;
    }
`
const SignUpForm = styled.div` 
    width: 33vw;
    height: 100vh;
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 200px;
    @media (max-width: 640px){
        width: 100vw;
        height: 74vh;
        padding-bottom: 0;
        justify-content: flex-start; 
        padding-top: 20px;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 30px 0 60px;
    margin-bottom: 20px;
    @media (max-width: 640px){
        margin-bottom: 0;
        padding: 0 0 0 0;
        justify-content: flex-start;
    }
`
const Input = styled.input`
    margin-bottom: 10px;
    height: 45px;
    width: 100%;
    border-radius: 4px;
    border: none;
    ::placeholder{
        font-size: 27px;
    }
    @media (max-width: 640px){
        margin-bottom: 10px;
        height: 45px;
        width: 80%;
        ::placeholder{
            font-size: 20px;
        }
    }
`
const Button = styled.button`
    width: 100%;
    height: 45px;
    border-radius: 4px;
    border: none;
    background-color: #1877F2;
    color: #ffffff;
    font-size: 27px;
    margin-bottom: 10px;
    :hover{
        cursor: pointer;
    }
    :disabled{
        filter: brightness(0.4);
    }
    @media (max-width: 640px){
        width: 80%;
    }

`
const BackToLogin = styled.div`
    font-family: 'Lato', sans-serif;
    color: #ffffff;
    font: 20px;
    text-decoration: underline;
    text-decoration-color: #ffffff;
    :hover{
        cursor: pointer;
    }
`

export {H1, H2, PageTitle, SignUpPage, BackToLogin, Button, Input, Form, SignUpForm}