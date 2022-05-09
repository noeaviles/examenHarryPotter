import React from 'react'
import flagImg from '../assests/flagfavor.png'
import flagImgBlack from '../assests/flagfavorblack.png'
import {agregarFavorito} from '../redux/actions'
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
  return {
      favoritos: state.reducerFavoritos.favoritos,
  }
}

const ContentCards = ({data,agregarFavorito,favoritos}) => {
  
  const handleFav=(item)=>{
    if(favoritos.length < 5){
      agregarFavorito(item)
    }
  }
  return (
    <div className='cards'>
    
      
      {
        data.map( (item)=>{
          
         const fav =  favoritos.find(el => el.name === item.name)
         

          return (
            <div className={item.alive ? "card" : "card finado"} key={item.id || item.actor}>
              
            <div className={`img-personaje ${item.house ? item.house : 'house'}`}>
              <div className='personaje' style={{backgroundImage: `url(${item.image})`}}></div>
            </div>
  
            <div className='info-card'>
                <div className='status-card'>
                  <div className="status">
                    <span className='vivo'>{item.alive ? "VIVO" : "FINADO"}/</span>
                    <span className='rol'>{item.hogwartsStudent ? "ESTUDIANTE" : "STAFF"}</span>
                  </div>
                  <div className="flag-fav" onClick={()=>handleFav(item)}>
                    <img src={fav ? flagImgBlack :flagImg} alt="" />
                  </div>
                </div>
                <div className='name-card'>{item.alive ? "" : <span className='finado-text'>+</span>}{item.name}</div>
                <div className='info-personaje'>
                <div className='datos'><h3>Cumpleaños:</h3><span>{item.dateOfBirth}</span></div>
                  <div className='datos'><h3>Genero:</h3><span>{item.gender}</span></div>
                  <div className='datos'><h3>Color de Ojos:</h3><span>{item.eyeColour}</span></div>
                  <div className='datos'><h3>Color de pelo:</h3><span>{item.hairColour}</span></div>
                </div>
            </div>
          </div>
          )
        })
      }

    </div>
  )
}

export default connect(mapStateToProps,{agregarFavorito})(ContentCards)

