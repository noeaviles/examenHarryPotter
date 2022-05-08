import React from 'react'
import icono from '../assests/flag.png'

const BtnFavoritos = () => {
  return (
    <div className='btn-header btn-fav'><span>Favoritos</span><img src={icono} alt="" /></div>
  )
}

export default BtnFavoritos