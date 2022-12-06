import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { WithRouter } from "Utils/Navigation";

import Layout from "Components/Layout";
import Card from "Components/Card";

function PokemonList(props) {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const limit = 9;

  useEffect(() => {
    fetchData();
  }, [page]);

  function fetchData() {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`)
      .then((res) => {
        const { results } = res.data;
        setDatas(results);
      })
      .catch((err) => {
        alert.apply(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-3 px-3 py-2">
        {loading ? (
          <p>Loading...</p>
        ) : (
          datas.map((data) => (
            <Card
              key={data.name}
              name={data.name}
              url={data.url}
              onNavigate={() => props.navigate(`/pokemon/${data.name}`)}
            />
          ))
        )}
      </div>
      <div
        className={`flex px-3 py-1 ${
          page === 0 ? "justify-end" : "justify-between"
        } text-sm text-white`}
      >
        {page === 0 ? (
          ""
        ) : (
          <button
            className="bg-blue-600 px-2 rounded-lg"
            onClick={() => setPage(page - limit)}
          >
            Prev
          </button>
        )}
        {page === 1154 / limit ? (
          ""
        ) : (
          <button
            className="bg-blue-600 px-2 rounded-lg"
            onClick={() => setPage(page + limit)}
          >
            Next
          </button>
        )}
      </div>
    </Layout>
  );
}

export default WithRouter(PokemonList);
