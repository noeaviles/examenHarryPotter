import React from 'react'
import Form from './Form'
import close from '../assests/close.png'

const Modal = ({activeModal,handleModal,handleChange,handleSubmit}) => {
  return (
    <div className={activeModal ? "modal" : "hidenModal"}>
        <div className="modal-container">
            <div className='title-modal'>
              <h3>Agregar un personaje</h3>
              <div className='btnClose' onClick={handleModal}>
                <img src={close} alt="" />
              </div>
            </div>
           <Form handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    </div>
  )
}

export default Modal