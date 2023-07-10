import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import PopulationPage from "./pages/PopulationPage";
import InfoPage from "./pages/InfoPage";
import NotasPage from "./pages/NotasPage";
import EstSegurancaPage from "./pages/EstSegurancaPage";
import CrimesPage from "./pages/CrimesPage";
import UppPage from "./pages/UppPage";
import EstatisticasPage from "./pages/EstatisticasPage";


function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopulationPage />} />
        <Route path="/InfInstitucionais" element={<InfoPage />} />
        <Route path="/Notas" element={<NotasPage />} />
        <Route path="/EstSeguranca" element={<EstSegurancaPage />} />
        <Route path="/Crimes" element={<CrimesPage />} />
        <Route path="/UPP" element={<UppPage />} />
        <Route path="/Estatistica" element={<EstatisticasPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
