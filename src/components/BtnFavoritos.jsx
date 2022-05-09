import React from 'react'
import icono from '../assests/flag.png'

const BtnFavoritos = ({handleActive}) => {
  return (
    <div className='btn-header btn-fav' onClick={handleActive}><span>Favoritos</span><img src={icono} alt="" /></div>
  )
}

export default BtnFavoritos