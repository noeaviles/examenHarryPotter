import React from 'react'
import personaje from '../assests/personaje.png'
import flagImg from '../assests/flagfavor.png'
const ContentCards = ({data}) => {
  return (
    <div className='cards'>
      
      {
        data.map( (item)=>(
          <div className="card" key={item.actor}>
            
          <div className={`img-personaje ${item.house ? item.house : 'house'}`}>
            <img src={item.image} alt="" />
          </div>

          <div className='info-card'>
              <div className='status-card'>
                <div className="status">
                  <span className='vivo'>{item.alive ? "VIVO" : "FINADO"}</span>
                  <span className='rol'>{item.hogwartsStudent ? "ESTUDIANTE" : "STAFF"}</span>
                </div>
                <div className="flag-fav">
                  <img src={flagImg} alt="" />
                </div>
              </div>
              <div className='name-card'>{item.name}</div>
              <div className='info-personaje'>
              <div className='datos'><h3>Cumpleaños:</h3><span>{item.dateOfBirth}</span></div>
                <div className='datos'><h3>Genero:</h3><span>{item.gender}</span></div>
                <div className='datos'><h3>Color de Ojos:</h3><span>{item.eyeColour}</span></div>
                <div className='datos'><h3>Color de pelo:</h3><span>{item.hairColour}</span></div>
              </div>
          </div>
        </div>
        ))
      }

    </div>
  )
}

export default ContentCards

