import styled from "styled-components";

const NewPostFrame = styled.div`
    width: 611px;
    height: 209px;
    margin: 0 auto 30px 0;
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    
    & img {
        margin: 16px 18px auto 18px;
    }   
`;

const NewPostForm = styled.form`
    width: 503px;
    height: 172px;
    margin: 22px 22px 16px 0; 
    display: flex;
    flex-direction: column;
    & h2 {
        height: 40px;
        font-weight: 300;
        color: #707070;
    }
    & input,textarea {
        border: none;
        padding: 5px 5px 7px 13px;
        border-radius: 5px;
        background-color: #EFEFEF;
        color: #949494;
        font-size: 15px;
        line-height: 18px;
        display: flex;
        overflow: auto;
    }
    & button {
        width: 112px;
        height: 31px;
        margin: 5px 0 0 auto;
        background-color: #1877F2;
        border: none;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bold;
        line-height: 17px;
    }
    .desabilitar{
        background-color: #52B6FF;
    }
`;

const NewPostURL = styled.input`
    height: 30px;
    margin: 0 auto 5px 0;
    width: 100%;
`;

const NewPostComment = styled.textarea`
    height: 66px;
    margin: 0 auto 5px 0;
    width: 100%;
`;

const PostLeftPanel = styled.div`
    display: flex;
    flex-direction: column;    
`;


export {NewPostFrame, NewPostForm, NewPostURL, NewPostComment, PostLeftPanel}