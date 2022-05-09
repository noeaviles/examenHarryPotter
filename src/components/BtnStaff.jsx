import React from 'react'

const BtnStaff = ({handlefilterStaff,bntActiveStaff}) => {
  return (
    <div className={bntActiveStaff ? 'btn-filter-active ' : 'btn-filter-normal '} onClick={handlefilterStaff}>
        <span>STAFF</span>
    </div>
  )
}

export default BtnStaff