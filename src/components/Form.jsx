import React,{useState} from 'react'

function Form({handleChange,handleSubmit}) {
  

  return (
  <form onSubmit={handleSubmit}>
      <div className="form-inputs">

            <div className='input-info'>
              <label htmlFor="name">NOMBRE</label>
              <input type="text" name="name" className='inputs' onChange={handleChange} required/>
            </div>

            <div className='input-info'>  
              <label htmlFor="dateOfBirth">CUMPLEAÑOS</label>
              <input type="text" name="dateOfBirth" className='inputs' onChange={handleChange} required/>
            </div>

            <div className='input-info'>  
              <label htmlFor="eyeColour">COLOR DE OJOS</label>
              <input type="text" name="eyeColour" className='inputs' onChange={handleChange} required/>
            </div>

            <div className='input-info'>  
            <label htmlFor="hairColour">COLOR DE PELO</label>
            <input type="text" name="hairColour" className='inputs' onChange={handleChange} required/>
            </div>
            
            <div className='radio'>
                <label htmlFor="">GÉNERO</label>
                <div className="radios">
                  <input type="radio" name="gender" value="female" onChange={handleChange} /><span>Mujer</span>
                  <input type="radio" name="gender" value="male" onChange={handleChange}/><span>Hombre</span>
                </div>
            </div>
        
            
            <div className='radio'>
                <label htmlFor="">POSICIÓN</label>
                <div className="radios">
                  <input type="radio" name="hogwartsStudent" value="studen" onChange={handleChange}/><span>Estudiante</span>  
                  <input type="radio" name="hogwartsStaff" value="staff" onChange={handleChange}/><span>Staff</span> 
                </div>
            </div>
        
      </div>
     
      
      <label className='file'>FOTOGRAFIA:<input type="file" ref={React.createRef()}/></label>

      <input className='btn-form' type="submit" value="Guardar"/>
      
  </form>
  )
}

export default Form