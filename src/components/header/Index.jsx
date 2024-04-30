import styled from "styled-components"
import profile from '../header/images.png'

const cabecalho = styled.header``


export const Header = () => {
    return(
        <cabecalho>
            <h1>LinkTree</h1>
            <img src={profile}></img>
        </cabecalho>
    )
}