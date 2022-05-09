import React from 'react'
import logo from '../assests/Harry_Potter_wordmark.png'
import BtnEstudiantes from './BtnEstudiantes'
import BtnStaff from './BtnStaff'
const Filtro = ({handlefilterStudens,handlefilterStaff,bntActiveStudens,bntActiveStaff}) => {
  return (
    <div className='filtro'>
        <div className='imgLogo'><img src={logo} alt="" /></div>
        <h2>Selecciona tu filtro</h2>
        <div className='buttons-filter'>
            <BtnEstudiantes handlefilterStudens={handlefilterStudens} bntActiveStudens={bntActiveStudens}/>
            <BtnStaff handlefilterStaff={handlefilterStaff} bntActiveStaff={bntActiveStaff}/>
        </div>
    </div>
  )
}

export default Filtro