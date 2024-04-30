import styled from 'styled-components'
import './App.css'
import EstilosGlobais from './components/GlobalStyle/Index'
import { Header } from './components/header/Index'

function App() {

  const Fundo = styled.div`
    background: linear-gradient(to bottom, #ffcccc, #ff99cc);
    width: 100%;
    min-height: 100vh;
  `

  return (
    <>
    <Fundo>
    <EstilosGlobais/>
      <Header/>
    </Fundo>
    </>
  )
}

export default App
