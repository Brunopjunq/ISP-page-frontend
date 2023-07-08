import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import PopulationPage from "./pages/PopulationPage";


function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PopulationPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
