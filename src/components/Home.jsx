import React from 'react'
import ContentCards from './ContentCards'
import Filtro from './Filtro'
import Header from './Header'
import Modal from './Modal'

const Home = () => {
  return (
    <div className='home'>
      <div className='img-fondo'></div>
        <Header/>
        <Filtro/>
        <ContentCards/>
        <Modal/>
    </div>
  )
}

export default Home