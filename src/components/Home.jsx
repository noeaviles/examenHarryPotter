import React,{useEffect,useState} from 'react'
import ContentCards from './ContentCards'
import Filtro from './Filtro'
import Header from './Header'
import Modal from './Modal'
import axios from 'axios'

const Home = () => {
 
  const [data, setData] = useState([]);


  useEffect(() => {
    axios({
      url: "http://localhost:5000/personajes",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });   
  }, []);

  


  return (
    <div className='home'>
      <div className='img-fondo'></div>
        <Header/>
        <Filtro/>
        <ContentCards data={data}/>
        <Modal/>
    </div>
  )
}

export default Home