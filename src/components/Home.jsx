import React from 'react'
import ContentCards from './ContentCards'
import Filtro from './Filtro'
import Header from './Header'
import Modal from './Modal'
import axios from 'axios'


class Home extends React.Component{

  constructor() {
    super();
    this.state = {
      dataOrigen:[],
      data:[],
      bntActiveStudens:false,
      bntActiveStaff:false,
      activeModal:false,
      form:{
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
      },
    }
  }

  componentDidMount() {
    this.getData();
  }
   

  getData = () => {
    axios({
      url: "http://localhost:5000/personajes",
    })
      .then((response) => {
        this.setState({
          dataOrigen:response.data,
          data:response.data,
        })
      })
      .catch((error) => {
        console.log(error);
      });  
  }



  filterStudens = () => {
    
      if(this.state.bntActiveStudens){
        this.setState({
          data:this.state.dataOrigen,
          bntActiveStudens:false,
        });
  
      }else{
        const { dataOrigen } = this.state
        const filterData = dataOrigen.filter( element=> element.hogwartsStudent === true);
        this.setState({
          bntActiveStudens:true,
          data:filterData,     
        })

        if(this.state.bntActiveStaff){
          this.setState({
            bntActiveStaff:false,
          })
        }

      }
  }

  filterStaff = () => {
    
    if(this.state.bntActiveStaff){

      this.setState({
        bntActiveStaff:false,
        data:this.state.dataOrigen,
      })

    }else{

      const { dataOrigen } = this.state
      const filterData = dataOrigen.filter( element=> element.hogwartsStaff === true)
      this.setState({
        bntActiveStaff:true,
        data:filterData,
      })

      if(this.state.bntActiveStudens){
        this.setState({
          bntActiveStudens:false,
        })
      }
      
    }

  }

   activarModal = () => {
    if(!this.state.activeModal){
      this.setState({
        activeModal:true,
      })
    }else{
      this.setState({
        activeModal:false,
      })
    }
  }

   handleChange = (e) => {
    const {name,value} = e.target;
      if(name === "typeHogwarts"){
        if (value === "studen"){
          this.setState({
            form: {...this.state.form,"hogwartsStudent":true,"hogwartsStaff":false}
          })
        }else{
          this.setState({
            form:{...this.state.form,"hogwartsStudent":false,"hogwartsStaff":true}
          })
        }
      }else{
        this.setState({
          form:{...this.state.form,[name]:value}
        })
    }
  }

   handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/personajes',this.state.form).then(res => console.log('registrado',res)).catch(err=>console.log(err));
    this.setState({
      activeModal:false,
    })
    this.getData();
    this.setState({
      bntActiveStaff:false,
      bntActiveStudens:false,
    })
  }

render() {
  return (
    <div className='home'>
      <div className='img-fondo'></div>
        <Modal activeModal={this.state.activeModal} handleModal={this.activarModal} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Header handleModal={this.activarModal}/>
        <Filtro handlefilterStudens={this.filterStudens} handlefilterStaff={this.filterStaff} bntActiveStudens={this.state.bntActiveStudens} bntActiveStaff={this.state.bntActiveStaff}/>
        {this.state.data.length > 0 && <ContentCards data={this.state.data}/>}
        {this.state.data.length === 0 && <div className='warning'>"Tenemos fallos de conexión recuerda levantar JSONSERVER"</div>}
    </div>
  )
}


}


export default Home;

