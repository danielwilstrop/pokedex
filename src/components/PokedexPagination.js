import React from 'react'

const PokedexPagination = ({
  pokemonPerPage,
  totalPokemon,
  paginate,
  active
}) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
    pageNumbers.push(i)
  }

  const scrollPageUp = () => {
    if (active > 0 && active < Math.ceil(totalPokemon / pokemonPerPage)) {
      paginate(active + 1)
    }
  }

  const scrollPagedown = () => {
    if (active - 1 >= 1) {
      paginate(active - 1)
    }
  }

  return (
    <div className='pages'>
      <ul className='pagination'>
        <li>
          <a href='#!'>
            <i className='material-icons' onClick={scrollPagedown}>
              chevron_left
            </i>
          </a>
        </li>
        {pageNumbers.map((page, i) => (
          <li
            key={i}
            className={
              active === page ? 'waves-effect active' : 'waves-effect'
            }>
            <a href='#!' onClick={() => paginate(page)}>
              {page}
            </a>
          </li>
        ))}
        <li>
          <a href='#!'>
            <i className='material-icons' onClick={scrollPageUp}>
              chevron_right
            </i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default PokedexPagination
