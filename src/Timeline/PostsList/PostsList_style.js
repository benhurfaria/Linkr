import styled from "styled-components";

const AllPostsList = styled.div`
    display: flex;
    flex-direction: column;
`;

const Posts = styled.ul`
    width: 611px;
    height: 1200px;
    margin: 0 auto auto 0;
    & span {    
    font-weight: bold;
    color: #FFFFFF;
    }
`;

const StillLoading = styled.div`
    width: 611px;
    height: 305px;
    margin: auto;
    display: flex;
    background-color: #171717;
    border-radius: 16px;
    & h1 {
        font-family: 'Passion One';
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;
        letter-spacing: 0.05em;
        margin: auto;
        font-size: 49px;
        color: yellow;
    }
`;

const Post = styled.li`
    width: 611px;
    padding: 19px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #171717;
    margin: 8px auto 8px 0;
    color: yellow;
    border-radius: 16px;
    font-family: 'Lato', sans-serif;
    position: relative;
    z-index: 0;
    .pencil{
        position: absolute;
        top:15px;
        right: 55px;
        font-size: 25px;
        color: #FFFFFF;
        cursor: pointer;
    }
    
    .trash{
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 30px;
        color: #FFFFFF;
        cursor: pointer;
    }
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(255, 255, 255, 0.9);
        color: #FFFFFF;
        opacity: 1;
    }
`;
const ModalScreen = styled.div`
    width: 600px;
    height: 300px;
    color: #FFFFFF;
    background-color: #333333;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    border-radius: 50px;
    top: calc(50% - 150px);
    left: calc(50% - 300px);
    padding: 20px 113px 142px 126px;
    box-sizing: border-box;
    text-align: center;
    .excluir{
        background-color: #1877F2;
        width: 134px;
        height: 37px;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 18px;
        display: flex;
        align-items: center;
    }
    .naoexcluir{
        background-color: #FFFFFF;
        border-radius: 5px;
        width: 134px;
        height: 37px;
        color: #1877F2;
        font-size: 18px;
        display: flex;
        align-items: center;
    }
    div{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }
`;

const PostContent = styled.div `
    width: 504px;

    margin: 0 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
               
    & a,h1 {
        max-width: 100%;        text-decoration: none;
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
        color: #FFFFFF;        
    }
    & a {
        -webkit-line-clamp: 2;
    }
    & h2 {
        max-width: 100%;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
        color: #B7B7B7;
        margin: 15px 0px;
        word-break: break-all;
        }
    input{
        border-radius: 7px;
        outline: none;
        height: 50px;
        width: 500px;
        height: 44px;
        font-family: 'Lato', sans-serif;
        border: none;
    }
    
`;

const PostPreview = styled.div`
    width: 100%;
    display: flex;
    border-radius: 11px;
    overflow: hidden;
    &&.altura{
        height: 170px;
        border: 1px solid #4D4D4D;
        
    }
`;

const PreviewInfo = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    word-wrap: wrap;
    padding: 15px 0px;
    & h1 {

        font-size: 16px;
        line-height: 19px;
        color: #CECECE;
        
    }
    & h2 {
        margin: 14px auto;
        font-size: 11px;
        line-height: 13px;
        color: #9B9595;
    }
    & h3 {
        
        font-size: 11px;
        line-height: 13px;
        color: #CECECE;
    }
`;

const ThumbPreview = styled.div`
    margin-left: 14px;
    width: 154px;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;        
    }
`;


export {AllPostsList, Posts, StillLoading, Post, PostContent, PostPreview, PreviewInfo, ThumbPreview, ModalScreen}