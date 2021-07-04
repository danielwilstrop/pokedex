import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHashtag,
  faEnvelope,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const date = new Date()
  return (
    <div className='logos'>
      <div>
        <a className='pad' href='https://github.com/danielwilstrop'>
          <FontAwesomeIcon icon={faCodeBranch} />
        </a>
        <a className='pad' href='https://www.instagram.com/danwilstrop/'>
          <FontAwesomeIcon icon={faHashtag} />
        </a>
        <a className='pad' href='mailto:daniel.wilstrop@outlook.com'>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <p className='copyright'>&copy; Daniel Wilstrop {date.getFullYear()}</p>
    </div>
  )
}

export default Contact
