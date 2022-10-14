import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { WithRouter } from 'Utils/Navigation'


import Layout from 'Components/Layout'
import Card from 'Components/Card'


function PokemonList(props) {

  const [datas, setDatas] = useState([])
  const [page, setPage] = useState(20)
  const [limit, setLimit] = useState(0)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetchData()
  }, [])

  function fetchData(){
    
      axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${limit}&limit=${page}`)
    .then((res)=> {
      const {results} = res.data
      const newPage = page + 20
      const newLimit = page - 20
      const temp = [...datas]
      temp.push(...results)
      setDatas(temp) 
      setPage(newPage)
      setLimit(newLimit)
      
    })
    .catch((err)=> {
      alert.apply(err.toString())
    })
    .finally(() => {
      setLoading(false)
    })
  }


  return (
    <Layout>
        <div className='grid grid-cols-3 gap-3 px-3 py-2'>
          {datas.map((data) => (
            <Card
            key={data.id}
            name={data.name}
            url={data.url}
            onNavigate={()=>props.navigate(`/pokemon/${data.name}`)}
            />

          ))} 
        </div>
        <button onClick={()=>fetchData()} className='w-1/4 m-3 p-2 border-black border'>Load More Pokemon</button>
    </Layout>
  )
}

export default WithRouter(PokemonList)