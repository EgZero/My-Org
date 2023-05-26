import Colaborador from '../colaborador'
import './equipo.css'
import hexToRgba from 'hex-to-rgba'
import {v4 as idUnico} from 'uuid'

const Equipo = (props)=>{

    const {titulo, id, color1} = props.datos;
    const { integrantes,eliminarColaborador,cambiarColor,marcarFavorito } = props
    
    return <>{integrantes.length > 0 &&
        <section className="equipo__container" 
             style={{backgroundColor: hexToRgba(color1 , 0.65)}}
        >
        <input className='boton-color'
            type='color' 
            value = {color1} 
            onChange={( {target} )=>cambiarColor(target.value,id)}
        />
        <h2 className="equipo__titulo" 
            style={{borderColor: color1}}
        >{titulo}</h2>

        <ul className="equipo__lista">
            {integrantes.map((integrante)=> <Colaborador fondo = {color1} 
                                                marcarFavorito = {marcarFavorito}
                                                datos={integrante} 
                                                key = {idUnico()} 
                                                eliminarColaborador={eliminarColaborador}
                                            /> )
            }
        </ul>
    </section>}</>
}

export default Equipo 