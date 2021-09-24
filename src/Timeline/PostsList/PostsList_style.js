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

export { AllPostsList, Posts, StillLoading }