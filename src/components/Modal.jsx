import React from 'react'
import Form from './Form'
import close from '../assests/close.png'
const Modal = () => {
  return (
    <div className='modal'>
        <div className="modal-container">
            <div className='title-modal'><h3>Agregar un personaje</h3><div><img src={close} alt="" /></div></div>
           <Form/>
        </div>
    </div>
  )
}

export default Modal