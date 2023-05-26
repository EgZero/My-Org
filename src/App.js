import './App.css';
import Banner from './components/Banner';
import {v4 as idUnico} from 'uuid'
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Equipo from './components/equipo';
import MiOrg from './components/miOrg';
import { useState } from 'react';

function App() {
  const [mostrarForm, ActualizarForm] = useState(false);
  const [integrantes, setIntegrantes] = useState([
    {
      equipo: "Programacion",
      foto: "https://GitHub.com/EgZero.png",
      nombre: "Angel Orellana",
      puesto: "Desarrollador ",
      id: idUnico(),
      fav:true
    },
    {
      equipo: "Front-End",
      foto: "https://GitHub.com/EgZero.png",
      nombre: "Angel Orellana",
      puesto: "Desarrollador ",
      id: idUnico(),
      fav:false
    },
    {
      equipo: "Data Science",
      foto: "https://GitHub.com/EgZero.png",
      nombre: "Angel Orellana",
      puesto: "Desarrollador ",
      id: idUnico(),
      fav:false
    },
    {
      equipo: "Mobile",
      foto: "https://GitHub.com/EgZero.png",
      nombre: "Angel Orellana",
      puesto: "Desarrollador ",
      id: idUnico(),
      fav:false
    },
    {
      equipo: "Innovacion y Gestion",
      foto: "https://GitHub.com/EgZero.png",
      nombre: "Angel Orellana",
      puesto: "Desarrollador ",
      id: idUnico(),
      fav:false
    },
    {
      equipo: "DevOps",
      foto: "https://GitHub.com/EgZero.png",
      nombre: "Angel Orellana",
      puesto: "Desarrollador ",
      id: idUnico(),
      fav:false
    },
    {
      equipo: "UX y Diseño",
      foto: "https://GitHub.com/EgZero.png",
      nombre: "Angel Orellana",
      puesto: "Desarrollador ",
      id: idUnico(),
      fav:false
    }
  ])
  const [Equipos, setEquipos] = useState([
    {
      titulo: "Programacion",
      color1: "#57C278",
      id : idUnico()
    },
    {
      titulo: "Front-End",
      color1: "#82CFFA",
      id : idUnico()
    },
    {
      titulo: "Data Science",
      color1: "#A6D157",
      id : idUnico()
    },
    {
      titulo: "DevOps",
      color1: "#E06B69",
      id : idUnico()
    },
    {
      titulo: "UX y Diseño",
      color1: "#DB6EBF",
      id : idUnico()
    },
    {
      titulo: "Mobile",
      color1: "#FFBA05",
      id : idUnico()
    },
    {
      titulo: "Innovacion y Gestion",
      color1: "#FF8A29",
      id : idUnico()
    }
  ]); 

  const expandirForm = () => {
    ActualizarForm(!mostrarForm)
  }

  const cambiarColor = (color, id) => {
    const equiposActualizados = Equipos.map((equipo) => {
      if (equipo.id === id) {equipo.color1 = color}
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  const crearEquipo = ({titulo,color1}) =>{
    setEquipos([...Equipos,{titulo,color1,id:idUnico()}])
  }

  const registrarColaborador = (colaborador) => {
    setIntegrantes([...integrantes, colaborador])
  }

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = integrantes.filter((colaborador)=> colaborador.id !== id)
    setIntegrantes(nuevosColaboradores)
  }

  const marcarFavorito = (id)=>{
    const nuevoFavorito = integrantes.map((integrante) => {
      if(integrante.id === id){
        integrante.fav = !integrante.fav
      }
      return integrante
    })
    setIntegrantes([...integrantes, nuevoFavorito])
  }

  return (
    <div>
      <Banner />
      {mostrarForm && <Formulario crearEquipo = {crearEquipo} equipos={Equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} />}
      <MiOrg expandirForm={expandirForm} />
      {Equipos.map((equipo) => <Equipo
        marcarFavorito = {marcarFavorito}
        datos={equipo}
        key={equipo.titulo}
        integrantes={integrantes.filter(integrante => integrante.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        cambiarColor={cambiarColor}
      />)}
      <Footer />
    </div>
  );
}

export default App;
