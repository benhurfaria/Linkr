import styled from "styled-components";

const AllPostsList = styled.div`
    display: flex;
    flex-direction: column;

    
`;

const Posts = styled.ul`
    width: 611px;
    //height: 1200px;
    margin: 0 auto 300px 0;
    & span {    
    font-weight: bold;
    color: #FFFFFF;
    }
    @media(max-width:640px){
        width: 100%;
        margin: 0 auto;
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
    height: 276px;
    padding: 19px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #171717;
    margin: 8px auto 8px 0;
    color: yellow;
    border-radius: 16px;
    font-family: 'Lato', sans-serif;
`;

const PostContent = styled.div `
    width: 504px;
    height: 237px;
    margin: 0 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
               
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
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
        color: #B7B7B7;
        }
`;

const PostPreview = styled.div`
    width: 100%;
    height: 155px;
    display: flex;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    overflow: hidden;
`;

const PreviewInfo = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    word-wrap: wrap;
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


export {AllPostsList, Posts, StillLoading, Post, PostContent, PostPreview, PreviewInfo, ThumbPreview}