import styled from "styled-components";

const Sharp = styled.li`
    font-family: 'Lato', sans-serif;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
    
`
const SharpList = styled.ul`
    padding: 0 0 0 10px;
    
    a{
        text-decoration: none;
    }
`
const TrendingTitle = styled.div`
    color: #ffffff;
    font-family: 'Oswald', sans-serif;
    font-style: 27px;
    //margin-bottom: 15px;
    padding-left: 10px;
    font-weight: 700;
    height: 40px;
    display: flex;
    align-items: center;

`
const Border = styled.div`
    background-color: #484848;
    height: 1px;
    margin-bottom: 10px;

`
const Trending = styled.div`
    height: 400px;
    width: 230px;
    background-color: #151515;
    border-radius: 10px;
    margin: 0 auto auto 25px;
`

export { Sharp, SharpList, TrendingTitle, Border, Trending }