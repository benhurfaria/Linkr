import styled from "styled-components";

const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: fixed;
    top: 15px;
    @media(max-width: 640px){
        top:100px ;

    }

`
const UsersNames = styled.p`
   
    padding: 10px 15px 10px 5px;
    background-color: #fafafa;
    color: black;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    width: 25%;
    height: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    img{
        margin: 0 10px 0 5px;
        width: 35px;
        height: 35px;
        border-radius: 100%;
    }
    a{
        text-decoration: none;
        color: black;
        display: flex;
    align-items: center;
    }
`


export { UsersNames, SearchDiv}