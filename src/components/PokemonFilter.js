import React, { useEffect } from 'react'
import { usePokedexContext } from '../contexts/pokedexContext.js'
import TypesModal from './TypesModal.js'
import M from 'materialize-css'
import { ModalManager } from 'react-dynamic-modal/lib/Modal'

const PokemonFilter = ({ setCurrentPage }) => {
  const {
    searchTerm,
    setSearchTerm,
    selectTerm,
    setSelectTerm,
    filterPokemon,
    typesState,
    setTypesState
  } = usePokedexContext()

  const openModal = () => {
    ModalManager.open(
      <TypesModal
        onRequestClose={() => true}
        setTypesState={setTypesState}
        filterPokemon={filterPokemon}
        typesState={typesState}
      />
    )
  }

  useEffect(() => {
    filterPokemon()
    M.AutoInit()
    setCurrentPage(1)
    // eslint-disable-next-line
  }, [searchTerm, selectTerm, typesState])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSelectChange = (e) => {
    setSelectTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit} action='#' className='search-form'>
        <input
          type='text'
          name='search'
          id='search'
          onChange={handleChange}
          placeholder='Search by Name...'
          style={{ width: '40%' }}
        />

        <select
          onChange={handleSelectChange}
          defaultValue='sortBy'
          style={{ width: '30%' }}>
          <option value='sortBy' disabled>
            Sort By..
          </option>
          <option value='pokedex'>Pokedex #</option>
          <option value='alphabetical'>Alphabetically</option>
          <option value='hp'>HP</option>
          <option value='attack'>Attack</option>
          <option value='defense'>Defense</option>
          <option value='sp-attack'>Special-Attack</option>
          <option value='sp-defense'>Special-Defense</option>
          <option value='speed'>Speed</option>
        </select>
      </form>
      <div style={{ textAlign: 'center' }}>
        <button
          className='waves-effect waves-light btn center'
          onClick={openModal}>
          Sort by Type
        </button>
      </div>
    </>
  )
}

export default PokemonFilter
