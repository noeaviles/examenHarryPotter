import React,{useState} from 'react'
import BtnAgregar from './BtnAgregar'
import BtnFavoritos from './BtnFavoritos'
import MenuFavoritos from './MenuFavoritos'

const Header = ({handleModal}) => {
  const [activeFav, setActiveFav] = useState(false)

  
  const activarFavoritos = ()=>{
      if(!activeFav){
        setActiveFav(true)
      }else{
        setActiveFav(false)
      }
  }


  return (
    <header>
        <BtnFavoritos handleActive={activarFavoritos}/>
        <BtnAgregar handleModal={handleModal}/>
        <MenuFavoritos activeFav={activeFav}/>
    </header>
  )
}

export default Header