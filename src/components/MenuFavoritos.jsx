import React from 'react'
import iconTrash from '../assests/Trash.png'
import personaje from '../assests/personaje.png'
import {connect} from 'react-redux';
import {eliminarFavorito} from '../redux/actions'

const mapStateToProps = (state)=>{
    return {
        favoritos: state.reducerFavoritos.favoritos,
    }
}

const MenuFavoritos = ({favoritos,activeFav}) => {
    
  return (
    <div className={activeFav ? 'menuFav' : 'hidenFav'}>
        {
            favoritos.map(
                (item)=>(
                <div key={item.name}>
                    <hr />
                    <div className='item-fav'>
                        <div className='fav-img' style={{backgroundImage: `url(${item.image})`}}></div>
                        <span>{item.name}</span>
                        <div className='btn-trash' onClick={()=>eliminarFavorito(item)}><img src={iconTrash} alt="" /></div>
                    </div>
                  
                </div>
                )
            )
        }
    </div>
  )
}

export default connect(mapStateToProps,{eliminarFavorito})(MenuFavoritos)