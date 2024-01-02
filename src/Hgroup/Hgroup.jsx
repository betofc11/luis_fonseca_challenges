import React from 'react'
import './Hgroup.css'

function Hgroup({ series, title }) {
  return (
    <>
      <p className='series'>{series}</p>
      <h1 className='title'>{title}</h1>
    </>
  )
}

export default Hgroup