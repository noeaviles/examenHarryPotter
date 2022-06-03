import React from 'react'
import Form from './Form'
import close from '../assests/close.png'
class Modal extends React.Component {

  render(){
    return(
      <div className={this.props.activeModal ? "modal" : "hidenModal"}>
        <div className="modal-container">
            <div className='title-modal'>
              <h3>Agregar un personaje</h3>
              <div className='btnClose' onClick={this.props.handleModal}>
                <img src={close} alt="" />
              </div>
            </div>
           <Form handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
        </div>
    </div>
    )
  }

}

export default Modal;
