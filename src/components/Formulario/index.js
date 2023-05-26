
import './Formulario.css'
import Input from '../inputsTexto'
import ListaOpciones from '../listaOpciones'
import Boton from '../Boton'
import { useState } from 'react'

const Formulario = (props)=>{

    const {registrarColaborador, equipos, crearEquipo }= props;

    const [nombre,setNombre] = useState("")
    const [puesto,setPuesto] = useState("")
    const [foto,setFoto] = useState("")
    const [equipo,setEquipo] = useState("")
    const [titulo,setTitulo]=useState("")
    const [color,setColor]=useState("")

    const enviarDatos = (event)=>{
        event.preventDefault()
        let datosAenviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAenviar);
    }

    const enviarEquipo = (e)=>{
        e.preventDefault();
        // en un objeto de JS en esta version de ECMASCRIPT, al hacer un arreglo con el nombre en la llave y en el valor, basta con escribir la el valor directamente;
        crearEquipo({ titulo , color1: color })
    }

    return <section className = "formulario">
        <form className ="formulario-form" onSubmit={enviarDatos}>
            <h2 className ="formulario__titulo">Rellena el Formulario para crear el colaborador</h2>
            <Input
                 valor = {nombre} 
                setDato={setNombre} 
                titulo = "Nombre" 
                placeholder='Ingresar nombre' 
                required
            />
            <Input
                 valor = {puesto} 
                setDato={setPuesto} 
                titulo = "Puesto" 
                placeholder='Ingresar puesto' 
                required 
            />
            <Input
                 valor = {foto} 
                setDato={setFoto} 
                titulo = "Foto" 
                placeholder='Ingresar enlace de foto' 
                required 
            />
            <ListaOpciones
                equipos = {equipos}
                 valor = {equipo} 
                setDato = {setEquipo} 
            />
            <Boton>Crear</Boton>
        </form>
        <form className ="formulario-form" onSubmit={enviarEquipo}>
            <h2 className ="formulario__titulo">Rellena el Formulario para crear el equipo</h2>
            <Input
                 valor = {titulo} 
                setDato={setTitulo} 
                titulo = "Titulo" 
                placeholder='Ingresar titulo' 
                required
            />
            <Input
                type ="color"
                 valor = {color} 
                setDato={setColor} 
                titulo = "color" 
                placeholder='Ingresar color' 
                required 
            />
            <Boton>Formar Equipo</Boton>
            </form>
    </section>
}

export default Formulario