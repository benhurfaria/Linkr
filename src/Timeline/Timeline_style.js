import styled from "styled-components";

const UserAvatar = styled.img`
    width: 53px;
    height: 53px;
    border-radius: 26px;
`;

const MainContainer = styled.div`
    width: 938px;
`;

const ContainerHeader = styled.div`
    width: 145px;
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
    align-items: center;
    justify-content: space-between;
`;

export {
    UserAvatar, 
    MainContainer, 
    ContainerHeader, 
    ContainerPosts, 
};