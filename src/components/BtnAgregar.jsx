import React from 'react'
import icono from '../assests/UserAdd.png'
const BtnAgregar = ({handleModal}) => {
  return (
    <div className='btn-header btn-add' onClick={handleModal}><span>Agregar</span><img src={icono} alt="" /></div>
  )
}

export default BtnAgregar