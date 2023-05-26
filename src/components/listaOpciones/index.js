
import './listaOpciones.css'
const ListaOpciones = (props) => {


    const cambiarOpcion = (e)=>{
        props.setDato(e.target.value)
    }
    return <div className="listaOpciones-container">
        <label className="listaOpciones-label">Equipos</label>
        <select onChange={cambiarOpcion} value={props.valor} className="listaOpciones-list">
            <option 
                value="" 
                disabled 
                defaultValue=""
                hidden>Seleccionar Equipo...</option>
            { props.equipos.map((equipo,i) => <option value={equipo} key ={i}>{equipo}</option>) }
        </select>
    </div>
}

export default ListaOpciones