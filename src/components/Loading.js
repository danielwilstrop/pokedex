import React from 'react'
import arrow from '../resources/loading-arrow.gif'

const Loading = () => {
  return (
    <div className='loading'>
      <h4> Warming up the pokeballs...</h4>
      <img src={arrow} alt='loading' />
    </div>
  )
}

export default Loading
