import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import PokeBall from '../resources/pokeball.png'
import Contact from '../components/Contact'

const NavBar = () => {
  useEffect(() => {
    const elem = document.querySelector('.sidenav')
    M.Sidenav.init(elem, {
      edge: 'right',
      inDuration: '300ms'
    })
  })

  const closeNav = () => {
    const elem = document.querySelector('.sidenav')
    const instance = M.Sidenav.getInstance(elem)
    instance.close()
  }

  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo center'>
            <img
              src={PokeBall}
              alt='pokeball logo'
              height='47px'
              style={{ marginTop: '4px' }}
            />
          </Link>

          <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul
            className='right hide-on-med-and-down'
            style={{ marginRight: '30px' }}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/battle'>Battle</Link>
            </li>
            <li>
              <Link to='/pokedex'>Pokedex</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul
        className='sidenav'
        id='mobile-demo'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          maxHeight: '60vh'
        }}>
        <li>
          <Link to='/' className='sidenav-close' onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/battle' className='sidenav-close' onClick={closeNav}>
            Battle
          </Link>
        </li>
        <li>
          <Link to='pokedex' className='sidenav-close' onClick={closeNav}>
            Pokedex
          </Link>
        </li>

        <Contact />
      </ul>
    </>
  )
}

export default NavBar
