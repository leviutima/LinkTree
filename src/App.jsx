import styled from 'styled-components'
import './App.css'
import EstilosGlobais from './components/GlobalStyle/Index'
import { Header } from './components/header/Index'
import { Button } from './components/ButtonLinks/Index'

import git from './assets/github.png'
import yt from './assets/yt-removebg-preview.png'


function App() {

  const Fundo = styled.div`
   background: linear-gradient(to bottom, #800080, #4B0082);
    width: 100%;
    min-height: 100vh;
  `

  const ListContainer = styled.div`
    display: grid;
    justify-content: center;
    gap: 25px;
  `

  const Container = styled.div `
    display: grid;
    gap: 70px;
  `

  return (
    <>
    <Fundo>
    <EstilosGlobais/>
    <Container>
      <Header/>
      <ListContainer>
        <Button nome='Repositório do projeto' link='https://github.com/leviutima/LinkTree' imgUrl={git}/>
        <Button nome='Canal no youtube' link='https://www.youtube.com/channel/UCio9H7BF7xB0P_GB2HIq7QA' imgUrl={yt}/>
      </ListContainer>
    </Container>
    </Fundo>
    </>
  )
}

export default App
