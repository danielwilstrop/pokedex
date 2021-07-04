import React from 'react'
import { types } from '../utills/typesList'
import ProgressBar from '../components/ProgressBar'

const PokedexEntry = ({ pokemon }) => {
  return (
    <div className='dex-entry' key={Math.random()}>
      <h4>{pokemon.name}</h4>
      <img src={pokemon.sprites.front_default} alt='pokemon.name' />
      <div className='pokemon-data'>
        <p>Pokedex: #{pokemon.order}</p>
        <p>Height: {pokemon.height}"</p>
        <p className='types'>
          Types:
          {pokemon.types.map((type, i) => (
            <span key={i}>
              <img
                className='type-image'
                src={types.filter(
                  (item) =>
                    item.toString().split('').slice(14, -14).join('') === //fix to get type (ie:grass)from memory location
                    type.type.name
                )}
                alt={type.type.name}
              />
              {type.type.name}
            </span>
          ))}
        </p>
      </div>

      <ProgressBar
        key='10'
        width={pokemon.stats[0].base_stat}
        stat={pokemon.stats[0].stat.name}
      />

      <ProgressBar
        key='20'
        width={pokemon.stats[1].base_stat}
        stat={pokemon.stats[1].stat.name}
      />
      <ProgressBar
        key='30'
        width={pokemon.stats[2].base_stat}
        stat={pokemon.stats[2].stat.name}
      />
      <ProgressBar
        key='40'
        width={pokemon.stats[3].base_stat}
        stat={pokemon.stats[3].stat.name}
      />
      <ProgressBar
        key='50'
        width={pokemon.stats[4].base_stat}
        stat={pokemon.stats[4].stat.name}
      />
      <ProgressBar
        key='60'
        width={pokemon.stats[5].base_stat}
        stat={pokemon.stats[5].stat.name}
      />
    </div>
  )
}

export default PokedexEntry
