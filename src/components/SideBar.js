import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"

export default function SideBar() {
    const navigate = useNavigate();

    return(
        <SideBarBox>
            <TitleBox>
                <p>Divisão por Grupos</p>
            </TitleBox>
            <InfoBox>
                <p>Estatísticas de Segurança</p>
            </InfoBox>
            <InfoBox>
                <p>Divisão Territorial da Base de Segurança</p>
            </InfoBox>
            <InfoBox>
                <p onClick={() => navigate('/Notas')}>Notas Metodológicas e Dicionários</p>
            </InfoBox>
            <InfoBox>
                <p onClick={() => navigate('/InfInstitucionais')}>Informações Institucionais</p>
            </InfoBox>
            <InfoBox>
                <p onClick={() => navigate('/')}>População</p>
            </InfoBox>
            <TitleBox>
                <p>Divisão por Temas</p>
            </TitleBox>
            <InfoBox>
                <p onClick={() => navigate('/EstSeguranca')}>Informações Gerais de Segurança</p>
            </InfoBox>
            <InfoBox>
                <p onClick={() => navigate('/Crimes')}>Crimes contra a vida</p>
            </InfoBox>
            <InfoBox>
                <p>UPP</p>
            </InfoBox>
            <InfoBox>
                <p>Armas</p>
            </InfoBox>
            <InfoBox>
                <p>Divisão Territorial da Base de Segurança</p>
            </InfoBox>
        </SideBarBox>
    )
}

const SideBarBox = styled.div`
    width: 220px;
    min-height: 400px;
`

const TitleBox = styled.div`
    width: 220px;
    background-color: #F6F6F6;
    height: 36px;
    border-bottom: 1px solid #DDDDDD;

    p {
        padding-left: 15px;
        padding-top: 9px;
        color: #444444;
        font-size: 15px;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
    }
`

const InfoBox = styled.div`
    width: 220px;
    min-height: 35px;
    border-bottom: 1px solid #DDDDDD;
    cursor: pointer;

    p {
        color: #333333;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        padding-left: 15px;
        padding-top: 7px;
        padding-bottom: 7px;
        line-height: 20px;
    }

    :hover {
        background-color: #eeeeee;
    }
`