import React from 'react'
import BtnAgregar from './BtnAgregar'
import BtnFavoritos from './BtnFavoritos'
import MenuFavoritos from './MenuFavoritos'

const Header = () => {
  return (
    <header>
        <BtnFavoritos/>
        <BtnAgregar/>
        <MenuFavoritos/>
    </header>
  )
}

export default Header