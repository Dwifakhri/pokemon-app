import React from 'react'
import { Link } from 'react-router-dom'

function Layout({children}) {
  return (
    <div className='flex justify-center'>
    <div className='relative w-full md:w-1/2 h-screen bg-slate-50 overflow-auto'>
      <nav className='w-full h-16 px-3 bg-black flex justify-between items-center text-white top-0 sticky'>
        <div className='flex space-x-3 items-center'>
        <div className='h-8 w-8 rounded-full bg-center bg-cover' style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWlmi_gchAZW4uThlZ59lTuX6lHQxAbOZ3Q&usqp=CAU)'}}></div>
        <p className='text-xl font-bold'>POKEMON GATCHA</p>
        </div>
        <svg className="w-8 h-8 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </nav>
      <div> 
      {children}
      </div>
      <footer className='w-full h-16 bg-black bottom-0 text-white font-medium grid grid-cols-2 py-2 sticky '>
        <div className='w-auto flex items-center flex-col'>
        <Link to="/"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg></Link>
          <Link to="/"><p>HOME</p></Link>
        </div>
        <div className='w-auto flex flex-col items-center '>
        <Link to="/MyPokemon"> <div className='h-8 w-8 rounded-full bg-center bg-cover' style={{backgroundImage:'url(https://cdn2.iconfinder.com/data/icons/poke-ball-set-free/150/Poke_Ball-512.png)'}}>
        </div> </Link>
          <Link to="/MyPokemon"><p>MY POKEMON</p></Link>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Layout