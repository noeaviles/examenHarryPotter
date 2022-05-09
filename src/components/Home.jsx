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


  useEffect(() => {
    getData();
  }, []);
  

  useEffect(() => {
    if(!bntActiveStaff){
      getData();
    }
    
  }, [bntActiveStaff]);


  useEffect(() => {
    if(!bntActiveStudens){
      getData();
    }
  }, [bntActiveStudens]);



const getData = ()=>{
  axios({
    url: "http://localhost:5000/personajes",
  })
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });  
}



const filterStudens = ()=>{
    const filterData = data.filter( element=> element.hogwartsStudent === true);
    console.log(filterData);
    setData(filterData);

    if(bntActiveStudens){
      setBntActiveStudens(false);
    }else{
      setBntActiveStudens(true)
      
    }
}

const filterStaff = ()=>{
  const filterData = data.filter( element=> element.hogwartsStaff === true);
  console.log(filterData);
  setData(filterData);
  
  if(bntActiveStaff){
    setBntActiveStaff(false);
  }else{
    setBntActiveStaff(true)
    
  }

}

const activarModal = ()=>{
  if(!activeModal){
    setActiveModal(true)
  }else{
    setActiveModal(false)
    console.log(activeModal);
  }
}

const handleChange = (e)=>{
  const {name,value} = e.target;
  console.log(name,value)
    setForm({
      ...form,[name]:value
    });
}

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log("Enviando")
  console.log(form)
  axios.post('http://localhost:5000/personajes',form).then(res => console.log('registrado',res)).catch(err=>console.log(err));
  setActiveModal(false)
}



  return (
    <div className='home'>
      <div className='img-fondo'></div>
        <Modal activeModal={activeModal} handleModal={activarModal} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Header handleModal={activarModal}/>
        <Filtro handlefilterStudens={filterStudens} handlefilterStaff={filterStaff} bntActiveStudens={bntActiveStudens} bntActiveStaff={bntActiveStaff}/>
        <ContentCards data={data}/>
    </div>
  )
}

export default Home