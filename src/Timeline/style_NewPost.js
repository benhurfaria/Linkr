import styled from "styled-components";

const NewPostFrame = styled.div`
    width: 611px;
    height: 209px;
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF;
    
    & img {
        width: 50px;
        height: 50px;
        border-radius: 26px;
    }

    & form {
        width: 503px;
        height: 172px;
        margin: 22px 22px 16px 18px; 
        display: flex;
        flex-direction: column;
        & input {
            margin: 5px auto;
            width: 100%;
            height: 36px;
        }
    }

    & button {
        width: 112px;
        height: 31px;
        margin: 5px 0 16px auto;
    }

    & ul {
        background-color: lightblue;
    }
`;

export {NewPostFrame}