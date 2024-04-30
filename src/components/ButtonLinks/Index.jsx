import styled from "styled-components"
import PropTypes from 'prop-types'

const ButtonLinks = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 20vw;
    height: 6vh;
    background: linear-gradient(135deg, #4e54c8, #8f94fb);
    border: 1px;
    border-radius: 20px;
    flex-grow: 1;
    padding: 0 50px; 
    text-decoration: none;

    & img {
        width: 2vw;
        margin-right: 10px;
    }

    @media (max-width: 768px) {
        width: 70vw;
        padding: 0 20px; 
        justify-content: center; 
        
        & img {
            width: 30px ;
        }
    }
`   

const Link = styled.a`
    text-decoration: none;
    
`

export const Button = ({ nome, link, imgUrl, alt}) => {
    return(
        <div>
            <Link href={link}>
                <ButtonLinks>
                    <img src={imgUrl} alt={alt}></img>
                    {nome}
                </ButtonLinks>
            </Link>
        </div>
        
    )
}

Button.propTypes = {
    nome: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
