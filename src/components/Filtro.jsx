import React from 'react'
import logo from '../assests/Harry_Potter_wordmark.png'
import BtnEstudiantes from './BtnEstudiantes'
import BtnStaff from './BtnStaff'
const Filtro = () => {
  return (
    <div className='filtro'>
        <div className='imgLogo'><img src={logo} alt="" /></div>
        <h2>Selecciona tu filtro</h2>
        <div className='buttons-filter'>
            <BtnEstudiantes/>
            <BtnStaff/>
        </div>
    </div>
  )
}

export default Filtro