import styled from "styled-components";


const TimelineHeader = styled.div`
    width: 100%;
    height: 72px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: #151515;  
    color: #FFFFFF;
    & h1 {
        font-family: 'Passion One';
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;
        letter-spacing: 0.05em;
        margin: 10px auto 8px 28px;
    }
`;

const DropdownMenu = styled.div`
    width: 100px;
    height: 54px;
    margin: 10px 17px 9px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 35px;
`;

const UserAvatar = styled.img`
    width: 53px;
    height: 53px;
    border-radius: 26px;
`;

const MainContainer = styled.div`
    width: 938px;
    margin: 73px auto auto auto;
    padding-top: 52px;
    display: flex;
    flex-direction: column;
    
    
    
`;

const ContainerHeader = styled.div`
    max-width: 400px;
    height: 64px;
    margin: 5px auto 43px 0;
    font-family: 'Oswald', sans-serif;
    color: #FFFFFF;
    font-size: 43px;
    font-weight: 700;
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

export { TimelineHeader, DropdownMenu, UserAvatar, MainContainer, ContainerHeader, ContainerPosts, LoaderPosition };