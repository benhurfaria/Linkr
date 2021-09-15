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


`
const H1 = styled.h1`
    font-family: 'Passion One', cursive;
    font-size: 150px;
    color: #ffffff;
`
const H2 = styled.h2`
    font-family: 'Oswald', sans-serif;
    font-size: 60px;
    color: #ffffff;
`
const SignUpPage = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`
const SignUpForm = styled.div` 
    width: 33vw;
    height: 100vh;
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 200px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 30px 0 60px;
    margin-bottom: 20px;
`
const Input = styled.input`
    margin-bottom: 10PX;
    height: 45PX;
    width: 100%;
    border-radius: 4px;
    border: none;
    ::placeholder{
        font-size: 27px;
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
    :hover{
        cursor: pointer;
    }
    :disabled{
        filter: brightness(0.4);
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