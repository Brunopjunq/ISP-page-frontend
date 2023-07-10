import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import PopulationPage from "./pages/PopulationPage";
import InfoPage from "./pages/InfoPage";


function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopulationPage />} />
        <Route path="/InfInstitucionais" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
