import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { WithRouter } from 'Utils/Navigation'
import Layout from 'Components/Layout'

function CatchPokemon(props) {
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
      
      const promise = new Promise ((resolve, reject) => {
        // const pokemonList = localStorage.getItem("MyPokemon")
        // const getPokemon = JSON.parse(pokemonList)      
        let pokemonRate = Math.floor(Math.random() * 100)
        setTimeout(()=> {
          if(pokemonRate >= 50) {
            resolve()
          } else {
            reject()
          }
        },1000)
      })

      function clickPo(num) {
        promise
        .then((res) => {
          alert("Congratulations")
          // pokeCatch.push(data)
          // let pokeCatch = JSON.stringify(data)
          // localStorage.setItem("MyPokemon",data)
        })
        .catch((err)=> {
          alert("You Missed")
        })
        .finally(()=>{
          console.log("done")
        })
      }
      
      function clickPokemon(){
        clickPo()
      }

        return (
          <Layout>
            <div className='flex flex-row items-center space-x-10 px-5 py-5 justify-around'>
              <div className='flex flex-col space-y-4 text-center p-3'>
                <p className='font-bold text-2xl'>Catch "{data.name}"</p>
                <img className='w-72 h-72' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} />
              </div>
            
            </div>
            <div className='flex flex-row justify-around mb-20'>
            <div onClick={()=> clickPokemon()} className='hover:scale-110 hover:cursor-pointer p-3 border-4 border-lg border-black bg-white font-bold text-xl text-center '>CATCH</div>
            <Link to="/"><div className=' p-3 border-4 border-lg border-black bg-white font-bold text-xl text-center hover:scale-110'>GO AWAY</div></Link>
            </div>
      
          </Layout>
          
        )
      }

export default WithRouter(CatchPokemon)