import React from 'react'
import iconTrash from '../assests/Trash.png'
import {connect} from 'react-redux';
import {eliminarFavorito} from '../redux/actions'

const mapStateToProps = (state)=>{
    return {
        favoritos: state.reducerFavoritos.favoritos,
    }
}

const MenuFavoritos = ({favoritos,activeFav,eliminarFavorito}) => {
    
  return (
    <div className={activeFav ? 'menuFav' : 'hidenFav'}>
        {
            favoritos.length > 0 ?
            favoritos.map(
                (item)=>(
                <div key={item.name}>
                    <hr />
                    <div className='item-fav'>
                        <div className='fav-img' style={{backgroundImage: `url(${item.image})`}}></div>
                        <span>{item.name}</span>
                        <div className='btn-trash' onClick={()=>eliminarFavorito(favoritos.filter((fav)=>fav.name !== item.name ))}><img src={iconTrash} alt="" /></div>
                    </div>
                  
                </div>
                )
            ) : <div className='empty-fav'>Selecciona tus personajes favoritos</div>
        }
    </div>
  )
}

export default connect(mapStateToProps,{eliminarFavorito})(MenuFavoritos)