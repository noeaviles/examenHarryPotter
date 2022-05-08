import React from 'react'

function Form() {
  return (
  <form action="">
      <div className="form-inputs">

            <div className='input-info'>
              <label htmlFor="name">NOMBRE</label>
              <input type="text" name="name" className='inputs'/>
            </div>

            <div className='input-info'>  
              <label htmlFor="birthday">CUMPLEAÑOS</label>
              <input type="text" name="birthday" className='inputs' required/>
            </div>

            <div className='input-info'>  
              <label htmlFor="eyes">COLOR DE OJOS</label>
              <input type="text" name="eyes" className='inputs'/>
            </div>

            <div className='input-info'>  
            <label htmlFor="hair">COLOR DE PELO</label>
            <input type="text" name="hair" className='inputs'/>
            </div>
            
            <div className='radio'>
                <label htmlFor="">GÉNERO</label>
                <div className="radios">
                  <input type="radio" name="genero" value="female" /><span>Mujer</span>
                  <input type="radio" name="genero" value="male"/><span>Hombre</span>
                </div>
            </div>
        
            
            <div className='radio'>
                <label htmlFor="">POSICIÓN</label>
                <div className="radios">
                  <input type="radio" name="posicion" value="studen"/><span>Estudiante</span>  
                  <input type="radio" name="posicion" value="staff"/><span>Staff</span> 
                </div>
            </div>
        
      </div>
     
      
      <label className='file'>FOTOGRAFIA:<input type="file" /></label>

      <div className='btn-form'>
        <span>GUARDAR</span>
      </div>
  </form>
  )
}

export default Form