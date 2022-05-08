import React from 'react'
import personaje from '../assests/personaje.png'
import flagImg from '../assests/flagfavor.png'
const ContentCards = () => {
  return (
    <div className='cards'>

        <div className="card">
          
            <div className='img-personaje slytherin'>
              <img src={personaje} alt="" />
            </div>

            <div className='info-card'>
                <div className='status-card'>
                  <div className="status">
                    <span className='vivo'>VIVO</span>
                    <span className='rol'>ESTUDIANTE</span>
                  </div>
                  <div className="flag-fav">
                    <img src={flagImg} alt="" />
                  </div>
                </div>
                <div className='name-card'>Draco Malfoy</div>
                <div className='info-personaje'>
                <div className='datos'><h3>Cumpleaños:</h3><span>31-07-1980</span></div>
                  <div className='datos'><h3>Genero:</h3><span>Male</span></div>
                  <div className='datos'><h3>Color de Ojos:</h3><span>Green</span></div>
                  <div className='datos'><h3>Color de pelo:</h3><span>Blonde</span></div>
                </div>
            </div>
        </div>

        <div className="card">
          
          <div className='img-personaje ravenclaw'>
            <img src={personaje} alt="" />
          </div>

          <div className='info-card'>
              <div className='status-card'>
                <div className="status">
                  <span className='vivo'>VIVO</span>
                  <span className='rol'>ESTUDIANTE</span>
                </div>
                <div className="flag-fav">
                  <img src={flagImg} alt="" />
                </div>
              </div>
              <div className='name-card'>Draco Malfoy</div>
              <div className='info-personaje'>
                  <div className='datos'><h3>Cumpleaños:</h3><span>31-07-1980</span></div>
                  <div className='datos'><h3>Genero:</h3><span>Male</span></div>
                  <div className='datos'><h3>Color de Ojos:</h3><span>Green</span></div>
                  <div className='datos'><h3>Color de pelo:</h3><span>Blonde</span></div>
              </div>
          </div>
          
      </div>
      <div className="card">
          
          <div className='img-personaje ravenclaw'>
            <img src={personaje} alt="" />
          </div>

          <div className='info-card'>
              <div className='status-card'>
                <div className="status">
                  <span className='vivo'>VIVO</span>
                  <span className='rol'>ESTUDIANTE</span>
                </div>
                <div className="flag-fav">
                  <img src={flagImg} alt="" />
                </div>
              </div>
              <div className='name-card'>Draco Malfoy</div>
              <div className='info-personaje'>
                  <div className='datos'><h3>Cumpleaños:</h3><span>31-07-1980</span></div>
                  <div className='datos'><h3>Genero:</h3><span>Male</span></div>
                  <div className='datos'><h3>Color de Ojos:</h3><span>Green</span></div>
                  <div className='datos'><h3>Color de pelo:</h3><span>Blonde</span></div>
              </div>
          </div>
          
      </div>
      <div className="card">
          
          <div className='img-personaje ravenclaw'>
            <img src={personaje} alt="" />
          </div>

          <div className='info-card'>
              <div className='status-card'>
                <div className="status">
                  <span className='vivo'>VIVO</span>
                  <span className='rol'>ESTUDIANTE</span>
                </div>
                <div className="flag-fav">
                  <img src={flagImg} alt="" />
                </div>
              </div>
              <div className='name-card'>Draco Malfoy</div>
              <div className='info-personaje'>
                  <div className='datos'><h3>Cumpleaños:</h3><span>31-07-1980</span></div>
                  <div className='datos'><h3>Genero:</h3><span>Male</span></div>
                  <div className='datos'><h3>Color de Ojos:</h3><span>Green</span></div>
                  <div className='datos'><h3>Color de pelo:</h3><span>Blonde</span></div>
              </div>
          </div>
          
      </div>
      
    </div>
  )
}

export default ContentCards

