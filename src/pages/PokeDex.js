import React, { useState } from 'react'
import PokedexListEntry from '../components/PokedexListEntry.js'
import { usePokedexContext } from '../contexts/pokedexContext.js'
import PokemonFilter from '../components/PokemonFilter'
import Contact from '../components/Contact'
import Loading from '../components/Loading'
import PokedexPagination from '../components/PokedexPagination'

const PokeDex = () => {
  const { sortedPokemon, loading } = usePokedexContext()
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonPerPage] = useState(20)

  const lastIndex = currentPage * pokemonPerPage
  const firstIndex = lastIndex - pokemonPerPage
  const currentPokemon = sortedPokemon.slice(firstIndex, lastIndex)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <div className='dex-heading'>
        <h3> Pokedex </h3>{' '}
        <span>
          Search, filter and research your pokemon, then choose which to take
          into battle...
        </span>
      </div>

      <PokemonFilter setCurrentPage={setCurrentPage} />
      <PokedexPagination
        pokemonPerPage={pokemonPerPage}
        totalPokemon={sortedPokemon.length}
        paginate={paginate}
        active={currentPage}
      />
      <div className='dex'>
        {currentPokemon.map((poke, i) => (
          <PokedexListEntry key={i} pokemon={poke} />
        ))}
      </div>
      <Contact />
    </>
  )
}

export default PokeDex
