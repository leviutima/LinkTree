import styled from "styled-components"
import profile from '../header/profile.png'

const Cabecalho = styled.header`

`


export const Header = () => {
    return(
        <Cabecalho>
            <h1>LinkTree</h1>
            <img src={profile}></img>
        </Cabecalho>
    )
}