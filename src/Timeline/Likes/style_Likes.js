import styled from "styled-components";

const StyledTooltip = styled(ReactTooltip)`
  font-family: 'Lato', sans-serif;
  background-color: rgba(255, 255, 255, 0.9) ;
  color: #505050;
`
const LikeObj = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    background-color: #151515;

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
    background-color: #151515;
    height: 30px;
    width: 60px;
`
const Counter = styled.div`
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
`
export {StyledTooltip, LikeObj, Liked,NotLiked, Button, Counter}