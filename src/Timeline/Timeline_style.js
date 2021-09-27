import styled from "styled-components";

const MainContainer = styled.div`
    width: 938px;
    margin: 125px auto auto auto;
    display: flex;
    flex-direction: column;
`;

const ContainerHeader = styled.div`
    max-width: 600px;
    max-height: 50px;
    margin: 5px auto 43px 0;
    font-family: 'Oswald', sans-serif;
    color: #FFFFFF;
    font-size: 43px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ContainerPosts = styled.div`
    display: flex;
    flex-direction: row;
        
`;

export {MainContainer, ContainerHeader, ContainerPosts};