import './inputTexto.css'

function Input(props){
    const {setDato,type = "text",valor,titulo,placeholder,required} = props
    const capturarDatos =(e)=>{
       setDato(e.target.value)
    }

    return <div className = "input-container">
        <label className="input-label">{titulo}</label>
        <input type={type} value={valor} onChange={capturarDatos} className={`input-input input__${type}`} placeholder  ={placeholder + "..."} required={required}/>
    </div>
}
;
export default Input