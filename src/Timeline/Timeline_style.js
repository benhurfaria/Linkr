import styled from "styled-components";

/*
font-family: 'Passion One', cursive;
font-family: 'Oswald', sans-serif;
font-family: 'Lato', sans-serif;
*/

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
    margin: 125px auto auto auto;
    display: flex;
    flex-direction: column;

    border: 2px dashed yellow;
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

const PostsList = styled.ul`
    width: 611px;
    height: 1200px;
    margin: 0 auto auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Posts = styled.li`
    width: 611px;
    height: 276px;
    background-color: #171717;
    margin: 8px auto 8px 0;
    color: yellow;
    border: 2px dotted orange;
    border-radius: 16px;
`;

const TrendingWords = styled.div`
    width: 301px;
    height: 406px;
    margin: 0 0 auto auto;
    background-color: #171717;
    color: #FFFFFF;
`;

export {TimelineHeader, DropdownMenu, UserAvatar, MainContainer, ContainerHeader, ContainerPosts, PostsList, Posts, TrendingWords};