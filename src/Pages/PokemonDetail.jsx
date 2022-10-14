import Layout from 'Components/Layout'
import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { WithRouter } from 'Utils/Navigation'
import Box from 'Components/Box'



function PokemonDetail(props) {
  const [data, setData] = useState([])


useEffect(() => {
  fetchData()
},[])

function fetchData() {
  const {name_pokemon} = props.params
  axios
  .get(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`)

  .then((res) => {
    const {data} = res
    setData(data)

  })
  .catch((err) => {
    alert(err.toString())
  })
}

  return (
    <Layout>
      <div className='flex flex-row items-center space-x-10 px-5 py-5 justify-around'>
        <div className='flex flex-col space-y-4 text-center shadow-lg p-3'>
          <img className='w-72 h-72' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} />
          <p className='font-bold text-2xl'>{data.name}</p>
        </div>
        <div>
          <p className='text-xl font-bold bg-gray-300 p-1 rounded-lg'>Statistic</p>
          {data.stats?.map((item, index)=>(
            <Box
          stat={item.stat.name}
          base_stat={item.base_stat}
          />
          ))}
          <p className='text-xl font-bold mt-3 bg-gray-300 p-1 rounded-lg'>Type</p>
          {data.types?.map((item, index)=>(
            <Box
          type={item.type.name}
          />
          ))}
          <p className='text-xl font-bold mt-3  bg-gray-300 p-1 rounded-lg'>Ability</p>
          {data.abilities?.map((item, index)=>(
            <Box
          ability={item.ability.name}
          />
          ))}
        </div>
      </div>
      <div onClick={()=> props.navigate(`/pokemon/catch/${data.name}`)} className='hover:cursor-pointer w-1/4 rounded-lg p-2 mt-5 mb-12 mx-auto bg-rose-500 font-bold text-xl text-center flex justify-center'>Let's Catch</div>

    </Layout>
    
  )
}

export default WithRouter(PokemonDetail)