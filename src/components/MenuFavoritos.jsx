import React from 'react'
import iconTrash from '../assests/Trash.png'
import personaje from '../assests/personaje.png'
const MenuFavoritos = () => {
  return (
    <div className='menuFav'>
        <div>
            <div className='item-fav'>
                <img src={personaje} alt="" />
                <span>Luna Lovegood</span>
                <div className='btn-trash'><img src={iconTrash} alt="" /></div>
            </div>
            <hr />
        </div>
        <div className='item-fav'>
            <img src={personaje} alt="" />
            <span>Harry Potter</span>
            <div className='btn-trash'><img src={iconTrash} alt="" /></div>
        </div>
        <hr />
        <div className='item-fav'>
            <img src={personaje} alt="" />
            <span>Luna Lovegood</span>
            <div className='btn-trash'><img src={iconTrash} alt="" /></div>
        </div>
        <hr />
        <div className='item-fav'>
            <img src={personaje} alt="" />
            <span>Harry Potter</span>
            <div className='btn-trash'><img src={iconTrash} alt="" /></div>
        </div>
        <hr />
        <div className='item-fav'>
            <img src={personaje} alt="" />
            <span>Harry Potter</span>
            <div className='btn-trash'><img src={iconTrash} alt="" /></div>
        </div>
        <hr />
    </div>
  )
}

export default MenuFavoritos