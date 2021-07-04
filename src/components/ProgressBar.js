import React from 'react'

const ProgressBar = ({ width, stat }) => {
  const containerStyles = {
    height: 20,
    width: '98%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    marginTop: 10,
    textTransform: 'capitalize',
    display: 'flex'
  }

  const fillerStyles = {
    height: '100%',
    width: `${width / 2 + 20}%`,
    maxWidth: '100%',
    backgroundColor: 'red',
    borderRadius: 'inherit'
  }

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold'
  }

  return (
    <>
      <div style={containerStyles}>
        <span style={{ position: 'absolute', paddingLeft: '10px' }}>
          {stat} - {width}
        </span>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    </>
  )
}

export default ProgressBar
