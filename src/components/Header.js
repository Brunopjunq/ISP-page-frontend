import { styled } from "styled-components";
import LogoEstado from "../assets/logoEstado.png.png";
import LogoISP from "../assets/div.container.png";

export default function Header() {
    return (
        <HeaderBox>
            <TopBox1 />
            <TopBox2>
                <div>
                    <img src={LogoEstado} alt="LogoEstado" />
                    <div>
                        <p>Acesso à Informação</p>
                        <p>Ir para o site ISP</p>
                        <p>Ir para Busca</p>
                    </div>
                </div>
            </TopBox2>
            <MiddleBox>
                <div />
            </MiddleBox>
            <BottomBox>
                <div>
                    <p>Inicial</p>
                    <p>|</p>
                    <p>Visualização de Dados</p>
                    <p>|</p>
                    <p>Contato</p>
                </div>
            </BottomBox>
        </HeaderBox>
    )
}

const HeaderBox = styled.div`
    width: 100vw;
    height: 235px;
    background-color: #006699;
    
`

const TopBox1 = styled.div`
    width: 100vw;
    height: 16px;
    background-color: #006699;
`

const TopBox2 = styled.div`
    width: 100vw;
    height: 51px;
    background-color: #F1F1F1;
    display: flex;
    justify-content: center;

    div {
        width: 960px;
        height: 51px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            width: 320px;
            height: 51px;

            p {
                font-family: 'Inter', sans-serif;
                font-size: 11px;
                font-weight: 800;
                color: #006699;
                padding-bottom: 6px;
                cursor: pointer;
            }
        }
    }
`

const MiddleBox = styled.div`
    width: 100vw;
    height: 131px;
    display: flex;
    justify-content: center;

    div {
        width: 940px;
        background:url(${LogoISP});
    }
`

const BottomBox = styled.div`
    width: 100vw;
    height: 33px;
    background-color: #00476b;
    display: flex;
    align-items: center;

    div {
        width: 290px;
        display: flex;
        margin-left: 1146px;
        justify-content: space-between;
        align-items: center;

        p {
            color: white;
            font-family: 'Inter', sans-serif;
            font-size: 15px;
            cursor: pointer;
        }
    }
`