import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPokemonList from "Pages/MyPokemonList";
import PokemonDetail from "Pages/PokemonDetail";
import PokemonList from "Pages/PokemonList";
import CatchPokemon from "Pages/CatchPokemon";
import { useTitle } from "Utils/UseTitle";

function App() {
  useTitle("PokemonGatcha");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name_pokemon" element={<PokemonDetail />} />
        <Route path="/pokemon/catch/:name_pokemon" element={<CatchPokemon />} />
        <Route path="/pokemon" element={<MyPokemonList />} />
        <Route path="*" element={<div>404 Error Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
