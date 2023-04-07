import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoPokemons from "../pages/pokemon-details-page";
import Main from "../pages/home/index";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/info-pokemons/:id" element={<InfoPokemons />} />
        <Route exact path="/info-pokemons/:name" element={<InfoPokemons />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
