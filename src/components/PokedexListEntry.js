import React from 'react'
import { ModalManager } from 'react-dynamic-modal'
import MyModal from '../components/MyModal'

const PokedexListEntry = ({ pokemon }) => {
  const openModal = () => {
    ModalManager.open(<MyModal onRequestClose={() => true} pokemon={pokemon} />)
  }

  return (
    <>
      <div className='dex-list-entry'>
        <h3> {pokemon.name} </h3>
        <img src={pokemon.sprites.front_default} alt='pokemon.name' />
        <button
          className='waves-effect waves-light btn'
          href='#!'
          onClick={openModal}>
          View
        </button>
      </div>
    </>
  )
}

export default PokedexListEntry
