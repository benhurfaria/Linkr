import styled from 'styled-components';
import './App.css'

export default function App(){
    return(
        <>
          <PageTitle>
            <H1>linkr</H1>
          </PageTitle>
        </>
      );
}

const PageTitle = styled.div`
    background-color: #151515;
    width: 66%;
    height: 100vh;
`
const H1 = styled.h1`
    color: #ffffff;
    font-family: 'Passion One', cursive;
    font-size: 106px;
`