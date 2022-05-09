import React,{useEffect,useState} from 'react'
import ContentCards from './ContentCards'
import Filtro from './Filtro'
import Header from './Header'
import Modal from './Modal'
import axios from 'axios'

const Home = () => {
 
  const initialForm = {
    id: Math.random(),
    name:"",
    dateOfBirth:"",
    eyeColour:"",
    hairColour:"",
    gender:"",
    hogwartsStudent:"",
    hogwartsStaff:"",   
    alive:true ,
    image:""
  }

  const [data, setData] = useState([]);
  const [bntActiveStudens, setBntActiveStudens] = useState(false);
  const [bntActiveStaff, setBntActiveStaff] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [form,setForm] = useState(initialForm)
  const [dataOrigen,setDataOrigen] = useState([])

  useEffect(() => {
    getData();
  }, []);
  





const getData = ()=>{
  axios({
    url: "http://localhost:5000/personajes",
  })
    .then((response) => {
      setData(response.data);
      setDataOrigen(response.data);
    })
    .catch((error) => {
      console.log(error);
    });  
}



const filterStudens = ()=>{
  
    if(bntActiveStudens){
      setBntActiveStudens(false);
      setData(dataOrigen);
    }else{
      setBntActiveStudens(true);
      const filterData = dataOrigen.filter( element=> element.hogwartsStudent === true);
      setData(filterData);
      if(bntActiveStaff){
        setBntActiveStaff(false);
      }

    
    }
}

const filterStaff = ()=>{
  
  if(bntActiveStaff){
    setBntActiveStaff(false);
    setData(dataOrigen);
  }else{
    setBntActiveStaff(true);
    if(bntActiveStudens){
      setBntActiveStudens(false);
    }
    const filterData = dataOrigen.filter( element=> element.hogwartsStaff === true);
    setData(filterData);
   
    
    
  }

}

const activarModal = ()=>{
  if(!activeModal){
    setActiveModal(true)
  }else{
    setActiveModal(false)
  }
}

const handleChange = (e)=>{
  const {name,value} = e.target;
    setForm({
      ...form,[name]:value
    });
}

const handleSubmit = (e)=>{
  e.preventDefault();

  axios.post('http://localhost:5000/personajes',form).then(res => console.log('registrado',res)).catch(err=>console.log(err));
  setActiveModal(false)
  getData();
  setBntActiveStaff(false);
  setBntActiveStudens(false);
}

  return (
    <div className='home'>
      <div className='img-fondo'></div>
        <Modal activeModal={activeModal} handleModal={activarModal} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Header handleModal={activarModal}/>
        <Filtro handlefilterStudens={filterStudens} handlefilterStaff={filterStaff} bntActiveStudens={bntActiveStudens} bntActiveStaff={bntActiveStaff}/>
        {data.length > 0 && <ContentCards data={data}/>}
        {data.length === 0 && 'Tenemos fallos de conexión recuerda levantar JSONServer'}
    </div>
  )
}

export default Home