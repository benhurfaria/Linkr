import styled from "styled-components";

const MainContainer = styled.div`
    width: 938px;
    margin: 73px auto auto auto;
    padding-top: 52px;
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
const LoaderPosition = styled.div`
    height: 80px;
    font-family: 'Lato', sans-serif;
    position: fixed;
    bottom: 180px;
    left: calc(40% - 30px);
    color: #6D6D6D;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    @media (max-width: 640px){
        left: calc(50% - 30px);
    }
`



export {MainContainer, ContainerHeader, ContainerPosts, LoaderPosition };

