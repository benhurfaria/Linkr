import styled from "styled-components";

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

const PostContent = styled.div`
    width: 504px;
    height: 237px;
    margin: 0 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-decoration: none;
`;

const UsernameLink = styled.div`
    & a {
        text-decoration: none;
        max-width: 100%;
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
        color: #FFFFFF;
    }
`;

const PostText = styled.h1`
    max-width: 100%;
    font-size: 19px;
    font-weight: 400;
    line-height: 23px;
    color: #FFFFFF; 
`;

const PostPreview = styled.div`
    width: 100%;
    height: 155px;
    display: flex;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
`;

const PreviewInfo = styled.a`
    width: 350px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding-left: 20px;
    word-wrap: wrap;
    text-decoration: none;
    
    & h1 {
        margin: 10px auto 0 0;
        font-size: 16px;
        line-height: 19px;
        color: #CECECE;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
    }
    & h2 {
        margin: 10px auto 0 0;
        font-size: 11px;
        line-height: 13px;
        color: #9B9595;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    & h3 {
        margin: 10px auto 0 0;
        font-size: 11px;
        line-height: 13px;
        color: #CECECE;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
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


export { Post, PostContent, PostPreview, PreviewInfo, ThumbPreview, UsernameLink, PostText}