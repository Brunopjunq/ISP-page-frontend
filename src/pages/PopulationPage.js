import { styled } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../assets/iconHome.png.png";
import SideBar from "../components/SideBar";

export default function PopulationPage() {
    return (
        <Page>
        <Header />
        <TitleBox>
            <img src={Home} alt="HomeIcon" />
            <p>Conjuntos de dados</p>
        </TitleBox>
        <ContentBox>
            <SideBar />
            <MainContentBox>
                <SearchBox placeholder="Pesquisar conjunto de dados..." />
                <TitleContent>
                    População
                </TitleContent>
                <TextContent>
                População: série mensal por área de delegacia (desde 2003)
                </TextContent>
                <LinkBox color={'#DFB100'}>
                    CSV
                </LinkBox>
                <TextContent>
                População: série anual por área de delegacia (2000 a 2021)
                </TextContent>
                <LinkBox color={'#DFB100'}>
                    CSV
                </LinkBox>
                <TextContent>
                População: série anual por município (2000 a 2021)
                </TextContent>
                <LinkBox color={'#DFB100'}>
                    CSV
                </LinkBox>
                <TextContent>
                População: residente por UPP (2021)
                </TextContent>
                <LinkBox color={'#DFB100'}>
                    CSV
                </LinkBox>
                <TextContent>
                População: série mensal do estado (desde 2003)
                </TextContent>
                <LinkBox color={'#DFB100'}>
                    CSV
                </LinkBox>
                <TextContent>
                População: série anual do estado (1991 a 2021)
                </TextContent>
                <LinkBox color={'#DFB100'}>
                    CSV
                </LinkBox>
                <TextContent>
                População: residente por UPP (2010)
                </TextContent>
                <LinkBox color={'#2DB55D'}>
                    XLS
                </LinkBox>
                <TextContent>
                População: série anual projetada por UPP (2007 a 2021)
                </TextContent>
                <LinkBox color={'#2DB55D'}>
                    XLS
                </LinkBox>
                <TextContent>
                Nota metodológica: população
                </TextContent>
                <LinkBox color={'#55A1CE'}>
                    HTML
                </LinkBox>
                <TextContent>
                Frota de veículos: série mensal do estado (desde 01/2003)
                </TextContent>
                <LinkBox color={'#DFB100'}>
                    CSV
                </LinkBox>
                <TextContent>
                Frota de veículos: série anual do estado (desde 2001)
                </TextContent>
                <LinkBox color={'#DFB100'}>
                    CSV
                </LinkBox>
                <BottomContent>
                <p>Você também pode ter acesso a esses dados acessando o site do <a>ISP - Instituto de Segurança Pública.</a></p>
                </BottomContent>
            </MainContentBox>
        </ContentBox>
        <Footer />
        </Page>
    )
}

const Page = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #EEEEEE;
`

const TitleBox = styled.div`
    width: 222px;
    height: 58px;
    display: flex;
    align-items: center;
    margin-left: 490px;
    cursor: pointer;

    p {
        color: #505050;
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-weight: 700;
        padding-left: 5px;
    }
`

const ContentBox = styled.div`
    width: 940px;
    min-height: 700px;
    background-color: white;
    border-radius: 4px;
    margin-left: 490px;
    box-shadow: 0 0 4px 3px #CCCCCC;
    display: flex;
`

const MainContentBox = styled.div`
    min-height: 700px;
    width: 720px;
    box-sizing: border-box;
    padding-left: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
`

const SearchBox = styled.input`
    width: 667px;
    height: 52px;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    border: 1px solid #e7e7e7;
    margin-bottom: 50px;
`

const TitleContent = styled.p`
    font-size: 16px;
    color: #006699;
    font-weight: 700;
    margin-bottom: 58px;
`

const TextContent = styled.p`
    font-size: 14px;
    color: #444444;
    margin-bottom: 10px;
    margin-top: 16px;
`

const LinkBox = styled.div`
    font-size: 11px;
    font-weight: 700;
    color: #FFFFFF;
    display: inline;
    padding: 3px 4px;
    border-radius: 3px;
    background-color: ${(props) => props.color};
    margin-bottom: 17px;
`

const BottomContent = styled.div`
    display: flex;
    justify-content: center;
    color: #444444;
    font-size: 12px;
    margin-top: 47px;

    a {
        cursor: pointer;
        color: #187794;
    }

    :hover {
        color: #444444;
    }
`