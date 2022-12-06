import React, { useState, useEffect } from "react";
import { WithRouter } from "Utils/Navigation";
import Layout from "Components/Layout";

function MyPokemonList(props) {
  const [datas, setDatas] = useState([]);
  const catchedPokemon = localStorage.getItem("myPokemon") || [];
  const pokeDatas = JSON.parse(catchedPokemon);

  useEffect(() => {
    setDatas(pokeDatas);
  }, []);

  function releasePokemon(pokemon) {
    const delPokemon = datas.filter(
      (data) => data.pokename !== pokemon.pokename
    );
    const temp = JSON.stringify(delPokemon);
    localStorage.setItem("myPokemon", temp);
    setDatas(delPokemon);
  }

  return (
    <Layout>
      <div className="overflow-auto">
        <div className="font-bold text-xl text-center p-1">My Pokemon List</div>
        <div className="grid grid-cols-3 gap-3 px-3 py-2">
          {datas.length === 0 ? (
            <p className="font-semibold text-center p-2">No Pokemon</p>
          ) : (
            datas?.map((data) => (
              <div
                key={data.pokename}
                className="shadow-lg border rounded-lg cursor-pointer capitalize"
              >
                <div className="text-center flex flex-col justify-center h-full">
                  <img
                    onClick={() => props.navigate(`${data.name}`)}
                    className="w-full h-32"
                    src={data.sprites.other.dream_world.front_default}
                  />
                  <div
                    onClick={() => props.navigate(`${data.name}`)}
                    className="bg-gray-200 font-bold w-full capitalize"
                  >
                    {data.name} - ({data.pokename})
                  </div>
                  <div
                    onClick={() => releasePokemon(data)}
                    className="bg-gray-400 font-bold w-full capitalize rounded-b-lg hover:bg-red-600"
                  >
                    Release
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}

export default WithRouter(MyPokemonList);
