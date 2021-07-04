import React, { useEffect } from 'react'
import { types } from '../utills/typesList'
import { Modal, Effect } from 'react-dynamic-modal'
import M from 'materialize-css'
import { ModalManager } from 'react-dynamic-modal/lib/Modal'

const TypesModal = ({ onRequestClose, setTypesState, typesState }) => {
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

  const handleChange = (index) => {
    const state = [...typesState]
    state[index].checked = !state[index].checked
    setTypesState(state)
  }

  useEffect(() => {
    M.AutoInit()
  }, [])

  return (
    <Modal
      onRequestClose={onRequestClose}
      effect={Effect.Fall}
      style={modalStyles}>
      <div className='types-grid'>
        {types.map((type, index) => (
          <div key={index} className='type-box'>
            <p>
              <label>
                <input
                  type='checkbox'
                  value={type}
                  className='filled-in'
                  defaultChecked={typesState[index].checked}
                  ischecked={typesState[index].checked.toString()}
                  onChange={() => handleChange(index)}
                />
                <span>
                  <img
                    src={type}
                    alt={type.toString().split('').slice(14, -14).join('')}
                    style={{ height: '20px' }}
                    className='types-img'
                  />
                </span>
                {type.toString().split('').slice(14, -14).join('')}
              </label>
            </p>
          </div>
        ))}
        <button
          className='waves-effect waves-light btn'
          onClick={ModalManager.close}>
          Close
        </button>
      </div>
    </Modal>
  )
}

export default TypesModal
