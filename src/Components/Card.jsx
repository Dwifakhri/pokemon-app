import React from "react";
import { useState, useEffect } from "react";

function Card(props) {
  const [pokemonIndex, setPokemonIndex] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setPokemon();
  }, []);

  function setPokemon() {
    const { name, url } = props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    setPokemonIndex(pokemonIndex);
    setName(name);
  }

  return (
    <div className="shadow-lg border rounded-lg cursor-pointer hover:scale-105">
      <div className="text-center flex flex-col justify-center h-full">
        <img
          onClick={props.onNavigate}
          className="w-full h-32"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonIndex}.svg`}
        />
        <div
          onClick={props.onNavigate}
          className="bg-gray-200 font-bold w-full capitalize"
        >
          {props.name}
        </div>
      </div>
    </div>
  );
}

export default Card;
