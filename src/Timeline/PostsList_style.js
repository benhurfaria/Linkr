import styled from "styled-components";

const AllPostsList = styled.div`
    display: flex;
    display: flex;
    flex-direction: column;
`;

const Posts = styled.ul`
    width: 611px;
    height: 1200px;
    margin: 0 auto auto 0;
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
    & h1 {
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
        color: #FFFFFF;       
    }
    & h2 {
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
    & img {
        width: 154px;
        
    }
`;

const PreviewInfo = styled.div`
    display: flex;
    flex-direction: column;
    & h1 {
        color: orange;
    }
    & h2 {
        color: crimson;
    }
    & h3 {
        color: lightblue;
    }
`;


export {AllPostsList, Posts, Post, PostContent, PostPreview, PreviewInfo}