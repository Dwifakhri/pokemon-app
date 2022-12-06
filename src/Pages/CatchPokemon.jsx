import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { WithRouter } from "Utils/Navigation";
import Layout from "Components/Layout";
import Modal from "Components/Modal";

function CatchPokemon(props) {
  const [pokeName, setPokeName] = useState("");
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const { name_pokemon } = props.params;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`)

      .then((res) => {
        const { data } = res;
        setData(data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  function catchPokemon() {
    let pokemonRate = Math.floor(Math.random() * 100);
    if (pokemonRate >= 50) {
      setModal(true);
    } else {
      alert("You Missed, Catch Again!");
    }
  }

  function closeModalPokemon() {
    setModal(false);
  }

  function savePokemon(data) {
    const myLocalPokemon = localStorage.getItem("myPokemon");
    if (myLocalPokemon) {
      const newPokemon = JSON.parse(myLocalPokemon);
      data.pokename = pokeName;
      const sameName = newPokemon.find((data) => data.pokename === pokeName);
      if (sameName) {
        const temp = newPokemon.filter((data) => data.pokename !== pokeName);
        newPokemon.pop(temp);
        alert("Name is already exist");
      } else {
        newPokemon.push(data);
        alert("Pokemon added");
        const storagePoke = JSON.stringify(newPokemon);
        localStorage.setItem("myPokemon", storagePoke);
      }
    } else {
      const storagePoke = JSON.stringify([data]);
      localStorage.setItem("myPokemon", storagePoke);
    }
  }

  return (
    <Layout>
      <div
        className={
          modal === false
            ? "hidden"
            : "absolute z-100 w-full px-10 py-4 h-full flex justify-center modal-content border-none shadow-lg  pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
        }
      >
        <Modal
          image={data.id}
          name={data.name}
          closeModal={closeModalPokemon}
          addName={(e) => setPokeName(e.target.value)}
          savePokemon={() => savePokemon(data)}
        />
      </div>
      <div className="flex flex-row items-center space-x-10 px-5 py-5 justify-around">
        <div className="flex flex-col space-y-4 text-center p-3">
          <p className="capitalize font-bold text-2xl">Catch "{data.name}"</p>
          <img
            className="w-72 h-72"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
          />
        </div>
      </div>

      <div className="flex flex-row justify-around mb-20">
        <div
          onClick={() => catchPokemon()}
          className="hover:scale-110 hover:cursor-pointer p-3 border-4 border-lg border-black bg-white font-bold text-xl text-center "
        >
          CATCH
        </div>
        <Link to="/">
          <div className=" p-3 border-4 border-lg border-black bg-white font-bold text-xl text-center hover:scale-110">
            GO AWAY
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export default WithRouter(CatchPokemon);
