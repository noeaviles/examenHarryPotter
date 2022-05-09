import React from 'react'

const BtnEstudiantes = ({handlefilterStudens,bntActiveStudens}) => {
  return (
    <div className={bntActiveStudens? 'btn-filter-active ' : 'btn-filter-normal '} onClick={handlefilterStudens}>
        <span>ESTUDIANTES</span>
    </div>
  )
}

export default BtnEstudiantes