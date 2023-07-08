import { styled } from "styled-components"

export default function Footer() {
    return(
        <FooterBox>
            <p>ISP DADOS ABERTOS - <a>Instituto de Segurança Pública</a></p>
        </FooterBox>
    )
}

const FooterBox = styled.div`
    width: 100vw;
    height: 100px;
    background-color: #006699;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: white;
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        padding-bottom: 15px;
    }

    a {
        color: #B7E3E3;
        cursor: pointer;
    }
`