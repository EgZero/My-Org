import './colaborador.css'
import { TiDelete} from "react-icons/ti"
import { AiFillHeart,AiOutlineHeart} from "react-icons/ai"

const Colaborador = (props)=>{
    
    const{nombre,puesto,foto, id,fav} = props.datos
    const {fondo, eliminarColaborador, marcarFavorito} = props

    return <li className="colaborador__card">
        <TiDelete className="boton-eliminar" onClick={()=>{eliminarColaborador(id)}}/>
        <div style={{backgroundColor: fondo}} className="colaborador__encabezado">
            <img src={foto} alt={nombre}/>
        </div>
        <div className="colaborador__info">
            <h4 className="colaborador__nombre colaborador__text">{nombre}</h4>
            <h5 className="colaborador__puesto colaborador__text">{puesto}</h5>
            {fav === false ? <AiOutlineHeart onClick={()=>{marcarFavorito(id)}} /> : <AiFillHeart color="#c00000" onClick={()=>{marcarFavorito(id)}}/>}
            
        </div>
    </li>
}

export default Colaborador