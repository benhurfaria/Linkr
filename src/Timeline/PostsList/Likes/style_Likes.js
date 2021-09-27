import styled from "styled-components";

const LikeObj = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #171717;
`
const NotLiked = styled.div`
    font-size: 20px;
    color: #ffffff; 
`
const Liked = styled.div`
    color: #AC0000;
    font-size: 20px;
`
const Button = styled.button`
    margin: 0 10px 0 10px;
    border: none;
    background-color: #171717;
    height: 30px;
    width: 60px;
    :hover{
    cursor: pointer;
  }
`
const Counter = styled.div`
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
`
export { LikeObj, Liked, NotLiked, Button, Counter }
