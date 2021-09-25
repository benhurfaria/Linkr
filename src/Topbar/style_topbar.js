import styled from "styled-components";

const Top = styled.div`
    width: 100%;
    height: 72px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: #151515;
    color: #ffffff;
    z-index: 1;
    h1{
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
    justify-content: center;
    font-size: 35px;
    .clicavel{
        cursor: pointer;
    }
`;

const UserAvatar = styled.img`
    width: 53px;
    height: 53px;
    border-radius: 26px;
`;

const SideBar = styled.div`
    width: 150px;
    height: 110px;
    position: absolute;
    top: 72px;
    background-color: #171717;
    right:0;
    border-radius: 0px 0px 0px 20px;
    font-family: 'Lato', sans-serif;
    position:fixed;
    h1{
        color: #ffffff;
        font-weight: 700;
        font-size: 17px;
        margin-top: 11px;
        text-align: center;
    }
    .decoration{
        text-decoration: none;
    }
`;

export {Top, DropdownMenu, UserAvatar, SideBar};