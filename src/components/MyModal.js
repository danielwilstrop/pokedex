import React from 'react'
import { Modal, ModalManager, Effect } from 'react-dynamic-modal'
import PokedexEntry from '../components/PokedexEntry'

const MyModal = ({ onRequestClose, pokemon }) => {
  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },

    content: {
      width: '70%',
      border: '2px solid rgba(0, 0, 0, .8)',
      borderRadius: '6px'
    }
  }

  return (
    <Modal
      onRequestClose={onRequestClose}
      effect={Effect.Fall}
      style={modalStyles}>
      <PokedexEntry pokemon={pokemon} />
      <button
        onClick={ModalManager.close}
        className='waves-effect waves-light btn modal-btn'>
        Close
      </button>
      <a
        href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pok%C3%A9mon)`}
        target='blank'>
        See more
      </a>
    </Modal>
  )
}

export default MyModal
