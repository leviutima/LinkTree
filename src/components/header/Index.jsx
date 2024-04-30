import styled from "styled-components"
import profile from '../header/profile.png'
import whats from '../header/whatsapp-removebg-preview.png'

const Cabecalho = styled.header`
 display: flex;
 justify-content: center;
`
const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: center;
`
const Container = styled.div`
    display: grid;
    gap: 20px;
`

const Image = styled.img`
    width: 9vw;
`

const ImageLogo = styled.img`
    width: 1.5vw;
`

const Name = styled.h1`
    color: #000;
`

const Style = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 50px;
    padding: 8px;
    background: linear-gradient(45deg, #a64dff, #c682ff);
    gap: 8px;
    cursor: pointer;
`

export const Header = () => {
    return(
        <Cabecalho>
            <Perfil>
                <div>
                    <Image src={profile}></Image>
                </div>
                <Container>
                    <Name>@exemplo</Name>
                    <Style>
                        <ImageLogo src={whats}></ImageLogo>
                        <h2>Contact</h2>
                    </Style>
                </Container>
            </Perfil>
        </Cabecalho>
    )
}